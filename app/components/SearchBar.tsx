'use client'
import React from 'react'
import WordContext from '../contexts/WordContext'
import fetchWord from '../services/fetchWord'


const SearchBar = () => {
    let {currentWord,setCurrentWord} = React.useContext(WordContext)
    
    return (
        <section>
            <input onSubmit={()=>{fetchWord(currentWord)}} value={currentWord} onChange={(e) => {
                setCurrentWord(e.target.value)
                console.log(currentWord)
                }} type='text' />
            <button onClick={()=>{fetchWord(currentWord)}}>search</button>
        </section>
    )
}

export default SearchBar