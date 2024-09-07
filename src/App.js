import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
/*import Experiences from "./Components/Experiences";*/
import Footer from "./Components/Footer";

function App() {
  return (
    /*<Router basename={ProcessingInstruction.env.PUBLIC_URL}>*/
      <Router>
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
