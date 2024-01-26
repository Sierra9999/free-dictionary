'use client'
import React from 'react'
import WordContext from '../contexts/WordContext'

const Results = () => {
  let {currentWord} = React.useContext(WordContext)

  return (
    <div>
        <h1>
          {currentWord? currentWord.word : "..."}
        </h1>
        <p>{currentWord? currentWord.phonetic : ""}</p>
    </div>
  )
}

export default Results