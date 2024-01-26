'use client'
import React from 'react'
import fetchWord from '../services/fetchWord'
import WordContext from '../contexts/WordContext'

const SearchBar = () => {
    let [input, setInput] = React.useState("")
    let {currentWord,setCurrentWord} = React.useContext(WordContext)

    const handleSubmit = ()=>{
        console.log("123")
        //@ts-ignore
        fetchWord(input).then(data => {setCurrentWord(data)})
        console.log(currentWord)
    }

    return (
        <section>
            <input value={input} onChange={(e) => {
                setInput(e.target.value)

                }} type='text' />
            <button onClick={handleSubmit}>search</button>
        </section>
    )
}

export default SearchBar