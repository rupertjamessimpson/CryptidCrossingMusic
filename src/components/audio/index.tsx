import React, { useRef, useEffect, useState } from "react";
import "./index.css";

type AudioProps = {
  audioRequest: string;
};

function Audio({ audioRequest }: AudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cryptidCrossing = ["1. Rose Tint", "2. Sand Castle", "3. Manemsha", "4. Lilith", "5. Quindecim", "6. Ghost", "7. Wardrobe"];

  const [currentAlbum, setCurrentAlbum] = useState<string>("cryptid_crossing")
  const [currentTrack, setCurrentTrack] = useState<string>("1. Sand Castle");
  const [isPaused, setPause] = useState(false);
  const [active, setActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRequest) return;

    const audioPath = audioRequest.split("?")[0];
    play(audioPath);
  }, [audioRequest]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPaused || !active) return;

    const updateTime = () => {
      if (!audioRef.current) return;
      setCurrentTime(audioRef.current.currentTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [isPaused, active, currentTrack]);

  const play = (audioPath: string) => {
    if (!audioRef.current) return;

    audioRef.current.src = `/music/${audioPath}.mp3`;
    audioRef.current.play();

    const [albumTitle, songTitle] = audioPath.split("/");
    setCurrentTrack(songTitle);
    setCurrentAlbum(albumTitle);
    setPause(false);
    setActive(true);
    setCurrentTime(0);
  };

  const pause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setPause(true);
  };

  const resume = () => {
    if (!audioRef.current) return;

    audioRef.current.play();
    setPause(false);
    setActive(true);
  };

  const skipForwards = () => {
    if (!audioRef.current) return;

    if (currentAlbum === "cryptid_crossing") {
      const currentIndex = cryptidCrossing.indexOf(currentTrack);
      if (currentIndex === -1) return;

      const nextSong = cryptidCrossing[currentIndex + 1];
      if (!nextSong) return;

      play(`${currentAlbum}/${nextSong}`);
    }
    return;
  };

  const skipBackwards = () => {
    if (!audioRef.current) return;

    if (currentAlbum === "cryptid_crossing") {
      const currentIndex = cryptidCrossing.indexOf(currentTrack);
      if (currentIndex === -1) return;

      const previousSong = cryptidCrossing[currentIndex - 1];
      if (!previousSong) return;

      play(`${currentAlbum}/${previousSong}`);
    }
  };

  const stop = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    setCurrentTime(0);
    setPause(true);
    setActive(false);
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return "0:00";

    const rounded = Math.floor(time + 0.5);

    const minutes = Math.floor(rounded / 60);
    const seconds = rounded % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={active ? "audio-player-container" : "audio-player-container-inactive"}>
      <audio
        ref={audioRef}
        onLoadedMetadata={() => {
          if (!audioRef.current) return;
          setDuration(audioRef.current.duration);
        }}
      />
      <div className="audio-player" >
       <div className="audio-player-ui">
        <div className="track-info">
          <div className="display-labels">
            <p>Track</p>
            <p>Time</p>
          </div>
          <div className="track-info-screen">
            <div className="track-info-screen-values">
              <p>{`${currentTrack}`}</p>
              <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="play-pause-button" onClick={() => {if (isPaused) {
              resume();
            } else {
              pause();
          }}}>▶ ⏸</button>
          <div className="skip-stop-button-container">
            <div className="skip-buttons-container">
              <button className="skip-button" onClick={() => skipBackwards()}>⏮</button>
              <button className="skip-button" onClick={() => skipForwards()}>⏭</button>
            </div>
            <button className="stop-button" onClick={() => stop()}>⏹</button>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Audio;