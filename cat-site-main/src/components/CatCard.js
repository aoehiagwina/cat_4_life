import React from "react"

const CatCard = (props) => {
    
    return (
        <div className="card">
          <div className="card-body">
            <img className="card-img" src={props.img} alt="cat image"/>
            <h2 className="card-text"> {props.name}:</h2>
            <h3 className="card-text"> £{props.price}</h3>
          </div>
            <button className="card-btn" onClick={props.addHandler}>Take Me Home</button>
        </div>
    )
}

export default CatCard;
          