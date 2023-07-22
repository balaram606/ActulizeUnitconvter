import React, { useState } from "react";
import "./inputForm.css"
const convert = require("convert-units");

const InputForm = () => {
  const [input, setInput] = useState(0);
  const [inputFrom, setInputFrom] = useState("");
  const [inputTo, setInputTo] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const result = convert(input).from(inputFrom).to(inputTo);
      setOutput(`${input} ${inputFrom} = ${result} ${inputTo}`);
    } catch (e) {
      setOutput(
        `Error: Please make sure you perform the correct conversion.\nError message: ${e}`
      );
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputFromChange = (event) => {
    setInputFrom(event.target.value);
  };

  const handleInputToChange = (event) => {
    setInputTo(event.target.value);
  };

  // Limiting the units to Length, Mass, and Temperature

  const lengthUnits = ["mm", "cm", "m", "km", "in", "yd", "ft-us", "ft", "mi"];
const massUnits = ["mcg", "mg", "g", "kg", "oz", "lb", "t"];
const temperatureUnits = ["c", "k", "f", "r"];


  return (
    <div className="con">
      <h1>Unit Converter</h1>
      <form onSubmit={handleSubmit}>
        <input className="unit-inp"
          type="number"
          placeholder="enter a value"
          min={0}
          step={0.01}
          onChange={handleInputChange}
        />
        <br/>
        <label>
          Convert from =
          <select className="con-select" value={inputFrom} onChange={handleInputFromChange}>
            {[
              ...lengthUnits,
              ...massUnits,
              ...temperatureUnits,
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label>
          Convert to =
          <select className="con-select"value={inputTo} onChange={handleInputToChange}>
            {[
              ...lengthUnits,
              ...massUnits,
              ...temperatureUnits,
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <input className="con-select" type="submit" value="Done" />
      </form>
      <div className="input-result">
      <h3>Result...</h3>
      <p>{output}</p>
      </div>
    </div>
  );
};

export default InputForm;
