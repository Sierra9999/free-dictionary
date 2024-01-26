import React from 'react'

const MeaningsList = ({list} : {list : {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}[]}) => {
  return (
    <ul>
       {list.map(item => (<li>{item.definition}</li>))}
    </ul>
  )
}

export default MeaningsList