import React from "react";
import Listing from "./Screens/Listing";
import AddService from "./Screens/AddService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditService from "./Screens/EditService";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Listing />} />
          <Route exact path="/addService" element={<AddService />} />
          <Route exact path="/editService" element={<EditService />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
