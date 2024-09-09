import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
/*import Experiences from "./Components/Experiences";*/
import Footer from "./Components/Footer";

function App() {
  return (
<<<<<<< HEAD
    /*
    <Router basename={ProcessingInstruction.env.PUBLIC_URL}>
    */
    <Router>
      <Header />
=======
    <Router basename={ProcessingInstruction.env.PUBLIC_URL}>
          <Header />
>>>>>>> 27cbeb64d2a4b40b9e3a82cb4a6426a27545ee98
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
