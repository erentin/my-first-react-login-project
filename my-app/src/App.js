import "./app.css"
import "./components/input/input"
import Button from "./components/button/button";
import Input from "./components/input/input";
import Form from "./components/form/form";
import { useState } from "react";
import { func } from "prop-types";


function App() {

  let mesajx;
  const [output,setOutput] = useState("");
  const [output2,setOutput2] = useState("");
  const [mesaj,setMesaj] = useState("");

  const handleChange = (e) => {
    setOutput(e.target.value)
    console.log(output)
  }

  const handleChange2 = (e) => {
    setOutput2(e.target.value)
    console.log(output)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(output.length!=10 || output2.length!=10 ){
      setMesaj("Kullanıcı ve Müşteri kodu 10 Hane olmalıdır.")
      console.log("Kullanıcı ve Müşteri kodu 10 Hane olmalıdır.")
    }else{
      setMesaj("")
    }
  }
  

  return (
    
    <Form metin={"Hoşgeldiniz"} foto={"motorasinlogo.png"} altfoto={"motoraşin"} submitted={handleSubmit} mesaj={mesaj} >
      <Input placeholder={"Müşteri Kodu"} type={'text'} inputChanges={handleChange}></Input>
      <Input placeholder={"Kullanıcı Kodu"} type={'text'} inputChanges={handleChange2}></Input>
      <Input placeholder={"Parola"} type={'password'}></Input>
      <Button name={"GİRİŞ"}></Button>
    </Form>
    

  )
}

// HelloWorld.propTypes={   <h4>{warningError}</h4>
//   name:propTypes.string
// }

// HelloWorld.defaultProps={
//     name:"ahathis"
// }

export default App;
 