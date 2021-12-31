import React from "react";

const Basket = ({cat, removeHandler}) => {

    return (
        <div className="basket-layout">
            {cat.map((cat, index) => {
                return (
                    <div className="product">
                        <h1>{cat.name}</h1>
                        <p>{cat.price}</p>
                        <button onClick={removeHandler}>Remove Order</button>
                    </div>
                )
            })};
        </div>
    )
}

export default Basket;