import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Header from "./components/header";
import Audio from "./components/audio";
import Album from "./components/pages/album";
import About from "./components/pages/about";

function App() {
  const [audioRequest, setAudioRequest] = useState<string>("");

  return (
    <BrowserRouter>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="page">
          <Routes>
            <Route path="/" element={<Navigate to="/album" />} />
            <Route path="/album" element={<Album setAudioRequest={setAudioRequest}/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className="audio">
          <Audio audioRequest={audioRequest}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
