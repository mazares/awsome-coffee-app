import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [numero, setNumero] = useState(Math.floor(Math.random() * 3));
  const [tempValue, setTempValue] = useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    event.preventDefault();
    setTempValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setValue(tempValue);
    setTempValue(``);
    console.log(`clicked`);
  };

  return (
    <div className="app">
      <Header headertype={value} />

      <form>
        <input type="text" value={tempValue} onChange={handleChange} />
        <button onClick={handleClick}>ok</button>
      </form>

      <Main displaynumero={numero} />

      <Footer />
    </div>
  );
}
