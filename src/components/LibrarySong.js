const LibrarySong = ({
  song,
  songs,
  id,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      tabIndex="0"
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <div className="flex space-x-4 items-center">
        <img
          src={song.cover}
          alt={song.name}
          className="w-[100px] h-[100px] object-cover"
        />
        <div>
          <h3>{song.name}</h3>
          <p>{song.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default LibrarySong;
