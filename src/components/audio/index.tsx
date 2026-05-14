import React, { useRef, useEffect, useState } from "react";
import "./index.css";

type AudioProps = {
  audioRequest: string;
};

function Audio({ audioRequest }: AudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cryptidCrossing = ["Rose Tint", "Sand Castle", "Manemsha", "Lilith", "Quindecim", "Ghost", "Wardrobe"];

  const [currentAlbum, setCurrentAlbum] = useState<string>("Cryptid Crossing")
  const [currentTrack, setCurrentTrack] = useState<string>("Sand Castle");
  const [isPaused, setPause] = useState(true);
  const [active, setActive] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = "/music/Cryptid Crossing/Sand Castle.mp3";
    audioRef.current.load();
  }, []);

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
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = `/music/${audioPath}.mp3`;
    audio.play().catch(() => {});

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

    if (currentAlbum === "Cryptid Crossing") {
      const currentIndex = cryptidCrossing.indexOf(currentTrack);
      if (currentIndex === -1) return;

      let nextSong = cryptidCrossing[currentIndex + 1];
      if (!nextSong) {
        nextSong = cryptidCrossing[0];
      };

      play(`${currentAlbum}/${nextSong}`);
    }
    return;
  };

  const skipBackwards = () => {
    if (!audioRef.current) return;

    if (currentAlbum === "Cryptid Crossing") {
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

  // const formatTime = (time: number) => {
  //   if (!isFinite(time)) return "0:00";

  //   const rounded = Math.floor(time + 0.5);

  //   const minutes = Math.floor(rounded / 60);
  //   const seconds = rounded % 60;

  //   return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  // };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={active ? "audio-player-container" : "audio-player-container-inactive"}>
      <div className="audio-player">
        <audio
          ref={audioRef}
          onLoadedMetadata={() => {
            if (!audioRef.current) return;
            setDuration(audioRef.current.duration);
          }}
          onEnded={skipForwards}
        />

        <div className="audio-player-ui">
          <div className="track-info">
            <img src="/images/AlbumArt.png" alt="album-art" />

            <div className="track-info-text">
              <span className="track-info-track-name">{currentTrack}</span>
              <span className="track-info-album-name">{currentAlbum}</span>
            </div>
          </div>

          <div className="controls">
            <div className="buttons">
              <button className="previous-button" onClick={() => {skipBackwards()}}>
                <img src="/images/previous.png" alt="previous-button" />
              </button>

              <button
                className="play-button"
                onClick={() => {
                  if (isPaused) {
                    resume();
                  } else {
                    pause();
                  }
                }}
              >
                <img
                  src={isPaused ? "/images/play.png" : "/images/pause.png"}
                  alt={isPaused ? "play-button" : "pause-button"}
                />
              </button>

              <button className="next-button" onClick={() => {skipForwards()}}>
                <img src="/images/next.png" alt="next-button" />
              </button>
            </div>

            <div className="progress-row">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                style={{
                  background: `linear-gradient(to right, #ece8eb ${progressPercent}%, #5a5659 ${progressPercent}%)`
                }}
                onChange={(e) => {
                  if (!audioRef.current) return;

                  const newTime = Number(e.target.value);
                  audioRef.current.currentTime = newTime;
                  setCurrentTime(newTime);
                }}
              />
            </div>
          </div>

          <div>
            <button className="stop-button" onClick={() => {stop()}}>
              <img src="/images/stop.png" alt="stop-button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audio;