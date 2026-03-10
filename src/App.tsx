import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Footer from "./components/footer";
import Header from "./components/header";
import Shows from "./components/pages/shows";
import Login from "./components/pages/login";


function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Navigate to="/shows" />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
