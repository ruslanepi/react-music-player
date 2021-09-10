import { React, useState } from 'react'

import './styles/app.scss'

import Song from './components/Song'
import Player from './components/Player'

import data from './util'

function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurentSong] = useState(songs[1])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className='App'>
      <Song {...currentSong} />
      <Player
        {...currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  )
}

export default App
