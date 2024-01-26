'use client'
import React from "react"
import { ApiResponse } from "../types/ApiTypes"

const WordContext = React.createContext<{
    currentWord :  ApiResponse |null, 
    setCurrentWord : React.Dispatch<React.SetStateAction< ApiResponse |null>>
}>({currentWord: null, setCurrentWord : ()=>{}})

export default WordContext