'use client'
import React, { useState } from 'react'

const SearchBar = () => {

    const [word,setWord] = useState<string>("")

    async function fetchWord(word: string) {
        const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const response = await request.json()
        console.log(response)
        return response
    }

    return (
        <section>
            <input value={word} onChange={(e) => {
                setWord(e.target.value)
                console.log(word)
                }} className="" type="text" />
            <button onClick={()=>{fetchWord(word)}}>search</button>
        </section>
    )
}

export default SearchBar