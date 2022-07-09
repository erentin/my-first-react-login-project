import React, { children } from "react";
import propTypes from "prop-types"  
import "./form.css"


const Form = ({children,metin,foto,altfoto,submitted,mesaj}) => {




    return(
        <form className="custom-form" onSubmit={submitted}>
            <div className="div">
                <img alt={altfoto} src={foto}></img>
            </div>
            <h1>{metin}</h1>
            {children}
            <h4>{mesaj}</h4>
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