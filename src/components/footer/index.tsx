import React from "react";
import "./index.css";

function Footer() {
  return (
    <div>
      <iframe
        title="SoundCloud player"
        width="100%"
        height="110"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2294724167&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
      />
    </div>
  );
}

export default Footer;