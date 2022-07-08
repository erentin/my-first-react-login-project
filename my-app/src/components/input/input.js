import React from "react";
import propTypes from "prop-types"  
import "./input.css"

const Input  = ({placeholder,text}) => {
    return(
        <input className="custom-input" placeholder={placeholder} value={text}></input>
    )
}

Input.propTypes = {
    placeholder: propTypes.string,
}
Input.defaultProps = {
    value: null
}


export default Input;