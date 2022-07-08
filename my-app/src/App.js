import "./app.css"
import "./components/input/input"
import Button from "./components/button/button";
import Input from "./components/input/input";
import Form from "./components/form/form";




function App() {

  return (
    
        <Form metin={"WELCOME"} foto={"icons8-facebook-50.png"} altfoto={"facebook"} >
        <Input placeholder={"Enter your e-mail"}></Input>
        <Input placeholder={"Enter your password"}></Input>
        <Button name={"LOGIN"}></Button>
      </Form>
    

  )
}

// HelloWorld.propTypes={
//   name:propTypes.string
// }

// HelloWorld.defaultProps={
//     name:"ahathis"
// }

export default App;
 