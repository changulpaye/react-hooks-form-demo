import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
