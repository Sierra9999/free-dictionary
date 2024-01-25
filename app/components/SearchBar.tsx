'use client'
import React, { useState } from 'react'
import WordContext from '../contexts/WordContext'

const SearchBar = () => {

    let {currentWord,setCurrentWord} = React.useContext(WordContext)

    async function fetchWord(word: string) {
        const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const response = await request.json()
        console.log(response)
        return response
    }
    
    return (
        <section>
            <input onSubmit={()=>{fetchWord(currentWord)}} value={currentWord} onChange={(e) => {
                setCurrentWord(e.target.value)
                console.log(currentWord)
                }} className="" type="text" />
            <button onClick={()=>{fetchWord(currentWord)}}>search</button>
        </section>
    )
}

export default SearchBar