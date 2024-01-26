import React from 'react'
import {v4} from 'uuid'
const MeaningsList = ({list} : {list : {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}[]}) => {
  return (
    <ul>
       {list.map(item => (<li key={v4()}>{item.definition}</li>))}
    </ul>
  )
}

export default MeaningsList