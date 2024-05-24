import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneReviewPage from "./pages/PhoneReviewPage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Homepage} />
        <Route path="/reviews/:id" Component={PhoneReviewPage} />
      </Routes>
    </Router>
  );
};

export default App;
