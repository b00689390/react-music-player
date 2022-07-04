const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-wrapper">
      <div className="song-container">
        <div className="py-8 aspect-1">
          <img
            src={currentSong.cover}
            alt={currentSong.name}
            className={`max-h-[250px] sm:max-h-[350px] lg:max-h-[500px] max-w-[250px] sm:max-w-[350px] lg:max-w-[500px] object-cover rounded-full mb-8 mx-auto ${
              isPlaying ? "active" : ""
            }`}
          />
        </div>
        <h2>{currentSong.name}</h2>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
};

export default Song;
