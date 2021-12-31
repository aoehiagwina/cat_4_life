import React from "react";

const Navbar = (props) => {

    return(
        <div className="header">
            <h1 className="website-name">{props.title}</h1>
            <button onClick={props.openModal}>Basket</button>
        </div>
    )
}

export default Navbar;