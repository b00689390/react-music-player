import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library-wrapper ${libraryStatus ? "active" : ""}`}>
      <h2 className="mb-4 font-source tracking-widest mx-6 px-2 text-[32px] leading-tight lg:text-[38px] lg:leading-normal text-purple-800 inline-block w-auto pb-1 border-b-4 border-purple-800">
        Library
      </h2>
      <div className="flex items-start flex-col justify-center">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            setSongs={setSongs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
