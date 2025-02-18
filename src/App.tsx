import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx"


function App() {
  return (

  <main>
  <Container as={Button}>Click</Container>
  <Button className="button" element='anchor' href="https://google.com">Link</Button>
  <Button className="button" element="button">Button</Button>
  <Input id="you" label="nuffin" type="text"></Input>
  <Input type="number" label="number" id="quantity" name="quantity" min="1" max="5"></Input>
  </main>
  )
}

export default App;
