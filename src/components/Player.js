import { React, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons'

function Player({ audio, isPlaying, setIsPlaying }) {
  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  })

  const timeUpdateHandler = (e) => {
    const currentTime = Math.floor(e.target.currentTime)
    const duration = e.target.duration
    setSongInfo({ ...songInfo, currentTime, duration })
  }
  //refs
  const audioRef = useRef(null)
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

  return (
    <div className='player'>
      <div className='time-control'>
        <p>Start</p>
        <input type='range' />
        <p>End</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />
        {isPlaying ? (
          <FontAwesomeIcon
            onClick={playSongHandler}
            className='pause'
            size='2x'
            icon={faPause}
          />
        ) : (
          <FontAwesomeIcon
            onClick={playSongHandler}
            className='play'
            size='2x'
            icon={faPlay}
          />
        )}

        <FontAwesomeIcon
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={audio}
      ></audio>
    </div>
  )
}

export default Player
