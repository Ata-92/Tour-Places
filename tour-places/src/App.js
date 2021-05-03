import React from "react";
import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card />
    </div>
  );
}

export default App;
