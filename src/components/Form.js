import React, { useState } from "react";

export default function Form(props) {
  const upperCaseClicked = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UpperCase!","success");
  };
  const lowerCaseClicked = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to LowerCase!","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className={`container text-${props.mode === "light" ? "dark" : "light"} my-5`}>
        <h1>Enter Your Text To Analyze</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === "light" ? "white" : "black",
          color:props.mode === "light" ? "black" : "white"
        }} id="textForm" rows="10"></textarea>
        </div>
        <button className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-1`} onClick={upperCaseClicked}>UpperCase</button>
        <button className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-1`} onClick={lowerCaseClicked}>LowerCase</button>
      </div>
      <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
      </div>
    </>
  );
}
