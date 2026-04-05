import React, { useEffect } from "react";

import "./index.css";

function Album() {

  useEffect(() => {
    const players = document.querySelectorAll("audio");

    const handlePlay = (e: Event) => {
      players.forEach((player) => {
        if (player !== e.target) {
          player.pause();
        }
      });
    }

    players.forEach((player) => {
      player.addEventListener("play", handlePlay);
    });

    return () => {
      players.forEach((player) => {
        player.removeEventListener("play", handlePlay);
      })
    }
  }, []);

  return (
    <div className="album">
      <img src="/images/AlbumArt.png" alt="Album Art" height="220" width="220"/>
      <p><b>Listen on <a href="https://soundcloud.com/cryptid-crossing/sets/cryptid-crossing" >SoundCloud</a></b></p>
      <p><b>Listen on <a href="https://www.youtube.com/watch?v=t9BHY-le5tI&list=PLu-AFnJxgQ6Faslw7BFjvbaJY8UFfP5wJ" >YouTube</a></b></p>
      <br/>

      <div className="tracks">
        <p><b>1. Rose Tint</b></p>
        <audio controls>
          <source src="/music/Rose Tint.mp3"/>
        </audio>
        <p><u>Lyrics:</u> Written and performed by Rupert Simpson</p>
        <p><u>Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>
        
        <p><b>2. Sand Castle</b></p>
        <audio controls>
          <source src="/music/Sand Castle.mp3"/>
        </audio>
        <p><u>Lyrics:</u> Written and performed by Rupert Simpson</p>
        <p><u>Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <p><b>3. Manemsha</b></p>
        <audio controls>
          <source src="/music/Manemsha.mp3"/>
        </audio>
        <p><u>Lyrics:</u> Written and performed by Rupert Simpson</p>
        <p><u>Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <p><b>4. Lilith</b></p>
        <audio controls>
          <source src="/music/Lilitht.mp3"/>
        </audio>
        <p><u>Lyrics:</u> Written and performed by Rupert Simpson</p>
        <p><u>Guitar:</u> Written by Rupert Simpson, performed by Andrew Frazier</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <p><b>5. Quindecim</b></p>
        <audio controls>
          <source src="/music/Quindecim.mp3"/>
        </audio>
        <p><u>Lyrics:</u> Written and performed by Rupert Simpson</p>
        <p><u>Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <p><b>6. Ghost</b></p>
        <audio controls>
          <source src="/music/Ghost.mp3"/>
        </audio>
        <p><u>Lyrics:</u> Written and performed by Rupert Simpson</p>
        <p><u>Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

        <p><b>7. Wardrobe</b></p>
        <audio controls>
          <source src="/music/Wardrobe.mp3"/>
        </audio>
        <p><u>Lyrics:</u> Written and performed by Rupert Simpson</p>
        <p><u>Guitar:</u> Written and performed by Rupert Simpson</p>
        <p><u>Drums:</u> Written and performed by Travis Bissel</p>
        <p><u>Bass:</u> Written by Conner White, performed by Dennis McCullough</p>
        <br/>

      </div>
    </div>
  );
}

export default Album;