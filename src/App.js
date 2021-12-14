
import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import IndexContainer from "./containers/IndexContainer/IndexContainer";
import ThemeContext from "./context/ThemeContext"

function App() {
  return (
    <ThemeContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <IndexContainer />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;