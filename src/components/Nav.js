import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ setLibraryIsOpen, libraryIsOpen }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryIsOpen(!libraryIsOpen)}>
        <span>Library</span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  )
}

export default Nav
