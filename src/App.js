import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
  // const [showSideDrawer, setShowSideDrawer] = useState(false);
  // const handleClickEvent = () => {
  //   setShowSideDrawer(true);
  // };
  // const closeSideDrawer = () => {
  //   setShowSideDrawer(false);
  // };

  return (
    <>
      <Router>
        {/* <button onClick={() => handleClickEvent()}>Apply</button> */}
        <Navbar
          // showSideDrawer={showSideDrawer}
          // closeSideDrawer={() => closeSideDrawer()}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
