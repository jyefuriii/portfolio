import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";

function App() {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    /* <Router>*/

    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
