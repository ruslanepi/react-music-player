import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({
  songs,
  setCurentSong,
  currentSong,
  isPlaying,
  audioRef,
  setSongs,
}) => {
  return (
    <div className='library'>
      <h2>library</h2>
      <div className='library-songs'>
        {songs.map((song) => {
          return (
            <LibrarySong
              setSongs={setSongs}
              audioRef={audioRef}
              key={song.id}
              song={song}
              songs={songs}
              setCurentSong={setCurentSong}
              isPlaying={isPlaying}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Library
