import React from 'react'
import { playAudio } from '../util'

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  isPlaying,
  audioRef,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song)
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
    playAudio(isPlaying, audioRef)
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
