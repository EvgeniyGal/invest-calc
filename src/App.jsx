import logo from "./assets/investment-calculator-logo.png";
import InputGroup from "./components/Input/InputGroup";
import Result from "./components/Result/Result";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

const INITIAL_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [inputData, setInputData] = useState(INITIAL_DATA);

  function handleInputData(prop, value) {
    setInputData((oldInputData) => {
      return {
        ...oldInputData,
        [prop]: value,
      };
    });
  }

  return (
    <>
      <header id="header">
        <img src={logo} alt="React Investment Calculator" />
        <h1>React Investment Calculator</h1>
      </header>
      <section id="user-input">
        <InputGroup onChange={handleInputData} currData={inputData} />
      </section>
      <Result data={calculateInvestmentResults(inputData)} />
    </>
  );
}

export default App;
