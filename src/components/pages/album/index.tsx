import React, { useState } from "react";
import "./index.css";

type AlbumProps = {
  setAudioRequest: React.Dispatch<React.SetStateAction<string>>;
};

function Album({ setAudioRequest }: AlbumProps) {
  const [albumInfoVisible, setAlbumInfoVisible] = useState(false);

  return (
    <div className="album">
      <div className="album-details">
        <img src="/images/AlbumArt.png" className="album-img" alt="Album Art" height="220" width="220" onClick={() => setAlbumInfoVisible(!albumInfoVisible)}/>
        <div className="album-info">
          {albumInfoVisible ? 
            <div>
              <button
                className="track-play-row"
                onClick={() => setAudioRequest(`Cryptid Crossing/Rose Tint?${Date.now()}`)}>
                <span className="play-icon">▶</span>
                <span className="track-title">Play</span>
              </button>
              {/* <div className="album-text">
                <p>Clasfas</p>
              </div> */}
            </div>
          : null}
        </div>
      </div>

      <div className="tracks">
        <div className="track">
          <div className="track-name">
            <button
              className="track-play-row"
              onClick={() => setAudioRequest(`Cryptid Crossing/Rose Tint?${Date.now()}`)}>
              <span className="play-icon">▶</span>
              <span className="track-title">1. Rose Tint</span>
            </button>
          </div>
          <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
          <p><u>Drums:</u> Written and performed by Travis Bissel</p>
          <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
          <br/>
        </div>
        <div className="track">
          <div className="track-name">
            <button
              className="track-play-row"
              onClick={() => setAudioRequest(`Cryptid Crossing/Sand Castle?${Date.now()}`)}>
              <span className="play-icon">▶</span>
              <span className="track-title">2. Sand Castle</span>
            </button>
          </div>
          <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
          <p><u>Drums:</u> Written and performed by Travis Bissel</p>
          <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
          <br/>
        </div>
        <div className="track">
          <div className="track-name">
            <button
              className="track-play-row"
              onClick={() => setAudioRequest(`Cryptid Crossing/Manemsha?${Date.now()}`)}>
              <span className="play-icon">▶</span>
              <span className="track-title">3. Manemsha</span>
            </button>
          </div>
          <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
          <p><u>Drums:</u> Written and performed by Travis Bissel</p>
          <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
          <br/>
        </div>
        <div className="track">
          <div className="track-name">
            <button
              className="track-play-row"
              onClick={() => setAudioRequest(`Cryptid Crossing/Lilith?${Date.now()}`)}>
              <span className="play-icon">▶</span>
              <span className="track-title">4. Lilith</span>
            </button>
          </div>
          <p><u>Vocals:</u> Written and performed by Rupert Simpson</p>
          <p><u>Guitar:</u> Written by Rupert Simpson, performed by Andrew Frazier</p>
          <p><u>Drums:</u> Written and performed by Travis Bissel</p>
          <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
          <br/>
        </div>
        <div className="track">
          <div className="track-name">
            <button
              className="track-play-row"
              onClick={() => setAudioRequest(`Cryptid Crossing/Quindecim?${Date.now()}`)}>
              <span className="play-icon">▶</span>
              <span className="track-title">5. Quindecim</span>
            </button>
          </div>
          <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
          <p><u>Drums:</u> Written and performed by Travis Bissel</p>
          <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
          <br/>
        </div>
        <div className="track">
          <div className="track-name">
            <button
              className="track-play-row"
              onClick={() => setAudioRequest(`Cryptid Crossing/Ghost?${Date.now()}`)}>
              <span className="play-icon">▶</span>
              <span className="track-title">6. Ghost</span>
            </button>
          </div>
          <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
          <p><u>Drums:</u> Written and performed by Travis Bissel</p>
          <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
          <br/>
        </div>
        <div className="track">
          <div className="track-name">
            <button
              className="track-play-row"
              onClick={() => setAudioRequest(`Cryptid Crossing/Wardrobe?${Date.now()}`)}>
              <span className="play-icon">▶</span>
              <span className="track-title">7. Wardrobe</span>
            </button>
          </div>
          <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
          <p><u>Drums:</u> Written and performed by Travis Bissel</p>
          <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
          <br/>
        </div>
      </div>
      <div className="bottom-padding"></div>
    </div>
  );
}

export default Album;