import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Test from "./Test";
import Guide from "./Guide";
import Glossary from "./Glossary";
import Pricing from "./Pricing";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
import Signup from "./Signup";

function App() {
  console.log(React.version);
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/matchbox-beta" exact element={<Home />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/user-guide" exact element={<Guide />} />
        <Route path="/glossary" exact element={<Glossary />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
