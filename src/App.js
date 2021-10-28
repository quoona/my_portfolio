import React from "react";
import "./App.css";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <About />
        <ProductList />
      </header>
    </div>
  );
}

export default App;
