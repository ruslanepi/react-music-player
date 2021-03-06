import { React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons'

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  currentSong,
  setCurrentSong,
  setSongs,
}) => {
  const getTime = (time) => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)

    if (direction === 'skip-back') {
      currentIndex = currentIndex - 1
      if (currentIndex < 0) {
        currentIndex = songs.length - 1
      }
      activeLibraryHandler(songs[currentIndex])
    }

    if (direction === 'skip-forward') {
      currentIndex = currentIndex + 1
      if (currentIndex > songs.length - 1) {
        currentIndex = 0
      }
      activeLibraryHandler(songs[currentIndex])
    }

    await setCurrentSong(songs[currentIndex])

    if (isPlaying) audioRef.current.play()
  }

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
  }

  //event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  // Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  }

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className='track'
        >
          <input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type='range'
          />
          <div style={trackAnim} className='animate-track'></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className='skip-back'
          size='2x'
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='pause'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
    </div>
  )
}

export default Player
