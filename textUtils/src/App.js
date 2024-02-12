import { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';

function App() {
  const [mode, setmode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#343a40"
      document.body.style.color = "white"
      showAlert("Dark mode enabled", "success")
    } else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#343a40"
      showAlert("Light mode enabled", "success")
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} />
      <Alert alert={alert} />
      <div className="container my-4" >
        <Form heading="Enter The Text To Analyze" showAlert={showAlert} mode={mode} modeText="Enable Dark Mode" toggleMode={changeMode} />
      </div>

    </>
  );
}

export default App;
