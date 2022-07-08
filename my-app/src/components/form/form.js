import React, { children } from "react";
import propTypes from "prop-types"  
import "./form.css"


const Form = ({children,metin,foto,altfoto}) => {
    return(
        <form className="custom-form">
            <div className="div">
                <img alt={altfoto} src={foto}></img>
                <h3>acebook</h3>
            </div>
            <h1>{metin}</h1>
            {children}
        </form>
    )
}

Form.propTypes={
   altfoto:propTypes.string
 }

Form.defaultProps={
    foto:null
}

export default Form;