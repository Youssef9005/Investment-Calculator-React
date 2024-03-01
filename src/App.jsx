import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment:  1200,
    expectedReturn: 6,
    duration:10,
  });

  function handleChange(inputIdentfier , newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentfier]: newValue
      };
    });
  };

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Result user={userInput}/>
    </>
  )
}
export default App
