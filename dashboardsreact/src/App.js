import React from "react";
import Header from "./Assets/header";
import Navbar from "./Assets/navbar";
import Dashboard from "./Assets/dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
