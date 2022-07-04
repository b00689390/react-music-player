import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { activeLibraryHandler } from "../util";

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
}) => {
  //Event Handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip-forward") {
      await setCurrentSong(
        songs[currentIndex + 1 === songs.length ? 0 : currentIndex + 1]
      );
      activeLibraryHandler(
        songs,
        setSongs,
        songs[currentIndex + 1 === songs.length ? 0 : currentIndex + 1]
      );

      if (isPlaying) audioRef.current.play();
    } else {
      await setCurrentSong(
        songs[currentIndex - 1 === -1 ? songs.length - 1 : currentIndex - 1]
      );
      activeLibraryHandler(
        songs,
        setSongs,
        songs[currentIndex - 1 === -1 ? songs.length - 1 : currentIndex - 1]
      );

      if (isPlaying) audioRef.current.play();
    }
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player-wrapper">
      <div className="container mx-auto">
        <div className="time-control">
          <p className="font-source">{getTime(songInfo.currentTime)}</p>
          <div
            style={{
              background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
            }}
            className="track"
          >
            <input
              min={0}
              max={songInfo.duration || 0}
              value={songInfo.currentTime}
              onChange={dragHandler}
              type="range"
              name="playback"
              id="playback"
            />
            <div style={trackAnim} className="animate-track"></div>
          </div>
          <p className="font-source">{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon
            onClick={() => skipTrackHandler("skip-back")}
            className="skip-back"
            size="2x"
            icon={faAngleLeft}
          />
          <FontAwesomeIcon
            onClick={playSongHandler}
            className="play"
            size="2x"
            icon={isPlaying ? faPause : faPlay}
          />
          <FontAwesomeIcon
            onClick={() => skipTrackHandler("skip-forward")}
            className="skip-forward"
            size="2x"
            icon={faAngleRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
