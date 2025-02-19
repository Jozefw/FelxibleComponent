import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx"
import Input from "./components/Input.tsx";
import {useRef} from "react";
import Form from "./components/Form.tsx";

function App() {

  // const input = useRef<HTMLInputElement>(null);

  function handleSave(data:unknown){
    const ExtractedFormData = data as {name:string, age:string};
    console.log(ExtractedFormData)
  }
  return (
<>
  <main>
  <Container as={Button}  onClick={ ()=>{} } type="button">Click it</Container>
  </main>
  <main>
    <Form onSave={handleSave}>
      <Input type="text" id="name" label="name"></Input>
      <Input type="number" id="age" label="age"></Input>
      <Button element="button">Click</Button>
    </Form>
  </main>

</>
  )
}

export default App;
