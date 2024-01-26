'use client'
import React from 'react'
import WordContext from '../contexts/WordContext'
import { v4 } from 'uuid'
import MeaningsList from './MeaningsList'

const PartsOfSpeech = () => {

    interface Part {
        partOfSpeech: string;
        definitions: {
          definition: string;
          synonyms: string[];
          antonyms: string[];
        }[];
        synonyms: string[];
        antonyms: string[];
      }

    const { currentWord } = React.useContext(WordContext)
    const speechMapUi = ({partOfSpeech, definitions, synonyms}: Part) =>{
        console.log(Array.isArray(definitions))
        return (<>
            <h2>{partOfSpeech}</h2>
            <MeaningsList list={definitions} />
            { synonyms.length > 0? <h3>Synonym : {synonyms[0]}</h3> : null}
        </>)
    }
    return (
        <>
            {currentWord?.meanings.map(item => (speechMapUi({...item})))}
        </>
    )
}

export default PartsOfSpeech