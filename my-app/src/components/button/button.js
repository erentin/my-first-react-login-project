import React from "react";
import "./button.css"

const Button  = ({name}) => {
    return(
        <button className="custom-button" type="submit">{name}</button>
    )
}


export default Button;