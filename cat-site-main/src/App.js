import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CatCard from "./components/CatCard";
import Basket from "./components/Basket";
import Modal from 'react-modal';

const App = () => {
    const faker = require('faker')
    const [catData, setCatData] = useState([])
    const [basketOrders, setBasketOrders] = useState([])
    const [error, setError] = useState({
      error: false,
      message: ""
    });

    const getCatImage = async () => {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
            if (response.status !== 200) {
                throw new Error("The API is down, try again later!")
            }
            const data = await response.json()
            const updatedData = await fakeDataHandler(data)
            setCatData(updatedData)
        }
        catch (error) {
            setError({ error: true, message: error.message })
        }

    //fake data of each cat:
    const fakeDataHandler = (data) => {
    
      data.map((cat) => {
        cat["name"] = faker.name.firstName()
        cat["price"] = faker.commerce.price()
      })}
      return catData;
    }
   
    // useEffect hook:
    useEffect(() => {
      getCatImage()
    }, [])
    
   //model popup hook:
    const [displayModel, setDisplayModel] = useState(false)

    const openModal = () => {
      setDisplayModel(true)
    }
    const closeModel = () => {
      setDisplayModel(false)
    }
        
    if (!catData) {
      return null
    }

//The basket array - add or remove order:
    //Add order to basket:
    const addHandler = (cat) => {
      let currentBasket = [...basketOrders];
      currentBasket.push(cat)
      setBasketOrders(currentBasket);
    }

    //Delete order from basket:
    const removeHandler = (index) => {
      let currentBasket = [...basketOrders];
      currentBasket.splice(index, 1);
      setBasketOrders(currentBasket);
    }
    
    const clearBasket = () => {
      setBasketOrders([])
    }

   
    //render the components: a cat stop landing page with a check out page (pop-up)
    return (
      <div className="App">
        <Navbar />
        <div className="card-wrapper">
          {catData.map((catData, index) => {
            return <CatCard   
              key={catData.id}
              img={catData.url}
              name={catData.name}
              price={catData.price}
              handleAdd={() => addHandler(index)}
              />
          })}
        </div>
        <Modal isOpen={displayModel} >
          <div className="basket-wrapper">
            <h2>Your Order</h2>
            <Basket />
            <button onClick={clearBasket} data-testid="clear-btn">Clear Basket</button>
          </div>
        </Modal>
      </div>
    )
}

export default App;
