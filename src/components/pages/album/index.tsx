import React from "react";
import "./index.css";

type AlbumProps = {
  setAudioRequest: React.Dispatch<React.SetStateAction<string>>;
};

function Album({ setAudioRequest }: AlbumProps) {

  return (
    <div className="album">
      <img src="/images/AlbumArt.png" className="album-img" alt="Album Art" height="220" width="220" onClick={() => setAudioRequest(`cryptid_crossing/1. Rose Tint?${Date.now()}`)}/>
      <br/><br /><br />

      <div className="tracks">
        <div className="track-name">
          <button
            className="track-play-row"
            onClick={() => setAudioRequest(`cryptid_crossing/1. Rose Tint?${Date.now()}`)}>
            <span className="play-icon">▶</span>
            <span className="track-title">1. Rose Tint</span>
          </button>
        </div>
        <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>
        
        <div className="track-name">
          <button
            className="track-play-row"
            onClick={() => setAudioRequest(`cryptid_crossing/2. Sand Castle?${Date.now()}`)}>
            <span className="play-icon">▶</span>
            <span className="track-title">2. Sand Castle</span>
          </button>
        </div>
        <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <div className="track-name">
          <button
            className="track-play-row"
            onClick={() => setAudioRequest(`cryptid_crossing/3. Manemsha?${Date.now()}`)}>
            <span className="play-icon">▶</span>
            <span className="track-title">3. Manemsha</span>
          </button>
        </div>
        <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <div className="track-name">
          <button
            className="track-play-row"
            onClick={() => setAudioRequest(`cryptid_crossing/4. Lilith?${Date.now()}`)}>
            <span className="play-icon">▶</span>
            <span className="track-title">4. Lilith</span>
          </button>
        </div>
        <p><u>Vocals:</u> Written and performed by Rupert Simpson</p>
        <p><u>Guitar:</u> Written by Rupert Simpson, performed by Andrew Frazier</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <div className="track-name">
          <button
            className="track-play-row"
            onClick={() => setAudioRequest(`cryptid_crossing/5. Quindecim?${Date.now()}`)}>
            <span className="play-icon">▶</span>
            <span className="track-title">5. Quindecim</span>
          </button>
        </div>
        <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <div className="track-name">
          <button
            className="track-play-row"
            onClick={() => setAudioRequest(`cryptid_crossing/6. Ghost?${Date.now()}`)}>
            <span className="play-icon">▶</span>
            <span className="track-title">6. Ghost</span>
          </button>
        </div>
        <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <div className="track-name">
          <button
            className="track-play-row"
            onClick={() => setAudioRequest(`cryptid_crossing/7. Wardrobe?${Date.now()}`)}>
            <span className="play-icon">▶</span>
            <span className="track-title">7. Wardrobe</span>
          </button>
        </div>
        <p><u>Vocals & Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>
      </div>
      <div className="bottom-padding"></div>
    </div>
  );
}

export default Album;