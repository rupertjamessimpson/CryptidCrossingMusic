import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Header from "./components/header";
// import Footer from "./components/footer";
import Album from "./components/pages/album";
import About from "./components/pages/about";


function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="page">
          <Routes>
            <Route path="/" element={<Navigate to="/album" />} />
            <Route path="/album" element={<Album />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
