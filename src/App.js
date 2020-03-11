import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Redirect from="/" to="login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
