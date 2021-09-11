import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({
  songs,
  setCurrentSong,

  isPlaying,
  audioRef,
  setSongs,
  libraryIsOpen,
}) => {
  return (
    <div className={`library ${libraryIsOpen ? 'active-library' : ''}`}>
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
              setCurrentSong={setCurrentSong}
              isPlaying={isPlaying}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Library
