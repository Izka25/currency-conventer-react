import { useState } from "react";
import Form from "./Form";
import Container from "./Container";
import Result from "./Result";
import currencies from "./currencies";

function App() {

const [result, setResult] = useState({});

const calculateResult = (currency, amount) => {
  const rate = currencies
  .find(({short}) => short === currency)
  .rate;
};

  return (
    <Container>
      <Form />
      <Result />
      calculateResult={calculateResult}
    </Container>
    
  );
}

export default App;
