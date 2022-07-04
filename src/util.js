export const activeLibraryHandler = (songs, setSongs, nextPrev) => {
  //Add Active State
  const newSongs = songs.map((song) => {
    if (song.id === nextPrev.id) {
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
};
