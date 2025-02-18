import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx"

function App() {
  return (

  <main>
  <Container as={Button} onClick={ ()=>{} } type="button">Click it</Container>
  <Button element="button">Click</Button>
  </main>
  )
}

export default App;
