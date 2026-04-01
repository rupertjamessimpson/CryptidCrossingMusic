import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Shows from "./components/pages/shows";
import Login from "./components/pages/login";


function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Navigate to="/shows" />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
