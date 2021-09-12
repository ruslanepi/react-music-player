import React from 'react'

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  isPlaying,
  audioRef,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song)
    // add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false,
        }
      }
    })
    setSongs(newSongs)

    //
    if (isPlaying) {
      audioRef.current.play()
    }
  }
  const { id, cover, name, artist } = song
  return (
    <div
      className={`library-song ${song.active ? 'active' : ''}`}
      onClick={songSelectHandler}
    >
      <img src={cover} alt={name} />
      <div className='song-description'>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
