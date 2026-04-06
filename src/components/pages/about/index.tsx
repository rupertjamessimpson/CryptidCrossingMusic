import React from "react";
import "./index.css";

function About() {

  return (
    <div className="about">
      <h3>Thank you for visiting our webpage!</h3>

      <p>I'm Rupert, the songwriter for Cryptid Crossing and the developer of this site.</p>

      <p>
        Cryptid Crossing is a five piece rock band located in Massachusetts. Our band was made 
        in 2016 from a group of friends who play music together. I write songs about my life, 
        and lean on my bandmates to add rhythm and energy to my stories.
      </p>

      <p>Contact us at <u>CryptidCrossingMusic@gmail.com</u></p>
      <br/>

      <p><b>Socials</b></p>
      <a href="https://www.instagram.com/cryptidcrossingmusic/">Instagram</a>
      <br/>
      <a href="https://www.youtube.com/@CryptidCrossingMusic">YouTube</a>
      <br/>
      <a href="https://soundcloud.com/cryptid-crossing">SoundCloud</a>
    </div>
  );
}

export default About;