'use client'
import React from "react"

const WordContext = React.createContext<{
    currentWord : string, 
    setCurrentWord : React.Dispatch<React.SetStateAction<string>>
}>({currentWord: "apple", setCurrentWord : ()=>{}})

export default WordContext