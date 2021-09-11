import { React, useState, useRef } from 'react'

import './styles/app.scss'

import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Nav from './components/Nav'

import data from './data'

function App() {
  const audioRef = useRef(null)

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[1])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryIsOpen, setLibraryIsOpen] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    // calculatePercentage
    const roundedCurrent = Math.round(currentTime)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage: animation,
    })
  }

  return (
    <div className='App'>
      <Nav setLibraryIsOpen={setLibraryIsOpen} libraryIsOpen={libraryIsOpen} />
      <Song {...currentSong} />
      <Player
        setSongs={setSongs}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        {...currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        libraryIsOpen={libraryIsOpen}
        setSongs={setSongs}
        audioRef={audioRef}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
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
