import Navbar from "./components/Navbar";
import "./App.css";
import Form from "./components/Form";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnText, setBtnText] = useState("Dark Mode");
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const switchMode = () => {
    if (mode === "light"){
      setMode('dark')
      setBtnText("Light Mode")
      document.body.style.backgroundColor="black";
      showAlert("Dark Mode is enabled now!","success");
    } 
    else {
    setMode('light')
    setBtnText("Dark Mode")
    document.body.style.backgroundColor="white";
    showAlert("Light Mode is enabled now!","success");
  }

  };
  return (
    <>
      <Navbar title="TextEdit" mode={mode} switchMode={switchMode} btnText={btnText} />
       <Alert alert={alert}/>
      <Form mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
