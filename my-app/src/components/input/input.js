import React, { useState } from "react";
import propTypes from "prop-types"  
import "./input.css"

const Input  = ({placeholder,text,type,inputChanges}) => {



   
    return(
        <input className="custom-input" placeholder={placeholder} value={text} type={type} onChange={inputChanges}></input>
    )
}

Input.propTypes = {
    placeholder: propTypes.string,
}
Input.defaultProps = {
    value: null
}


export default Input;