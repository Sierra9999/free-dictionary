'use client'
import React, { ReactNode } from 'react'
import WordContext from './WordContext'

const WordContextProvider:React.FC<{children:ReactNode}>  = ({children}) => {
  const [currentWord, setCurrentWord] = React.useState<string | any>("apple")
  return (
    <WordContext.Provider value={{currentWord, setCurrentWord}} >{children}</WordContext.Provider>
  )
}

export default WordContextProvider