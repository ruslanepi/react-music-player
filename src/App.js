import { React, useState, useRef } from 'react'

import './styles/app.scss'

import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'

import data from './util'

function App() {
  const audioRef = useRef(null)

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurentSong] = useState(songs[1])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({ ...songInfo, currentTime, duration })
  }

  return (
    <div className='App'>
      <Song {...currentSong} />
      <Player
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        {...currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        setSongs={setSongs}
        audioRef={audioRef}
        songs={songs}
        currentSong={currentSong}
        setCurentSong={setCurentSong}
        isPlaying={isPlaying}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  )
}

export default App
