import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container,Button,Row, Col } from 'react-bootstrap'
import "./app.css";
import Menu from './menu.jsx';

function App() {
const [show, setShow] = useState(false);

  const togglePara = () => setShow(!show);

  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <>
       <Menu />
      <Container className="text-center mt-5">
      <Button variant="success" onClick={togglePara}>
        {show ? "Hide" : "Show"} Paragraph
      </Button>

      {show && (
        <p className="mt-3">
          This is the paragraph that appears and disappears when the button is clicked.
        </p>
      )}
    </Container>
     <Container className="text-center mt-5">
      <h2>Count: {count}</h2>
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button variant="success" onClick={handleIncrease}>
            ➕ Increase
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="danger" onClick={handleDecrease}>
            ➖ Decrease
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
