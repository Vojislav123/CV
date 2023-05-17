import { Route, Routes } from "react-router-dom";

import HomePage from "./Components/pages/HomePage";
import Header from "./Components/pages/Header";
import AboutMe from "./Components/pages/AboutMe";
import Footer from './Components/pages/Footer';


import './App.css';
import ContactMe from "./Components/pages/ContactMe";
import ScrollToTop from "./Components/service/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/me&mywork" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
