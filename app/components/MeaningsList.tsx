import React from 'react'

const MeaningsList:React.FC <{meanings : string[]}> = ({meanings}) => {

  return (
    <ul>
        {meanings.map((meaning)=>(<li>{meaning}</li>))}
    </ul>
  )
}

export default MeaningsList