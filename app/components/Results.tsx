import React from 'react'

const Results : React.FC<{word : string, pronunciation : string}> = ({word, pronunciation}) => {
  return (
    <div>
        <h1>{word}</h1>
        <a href={pronunciation}></a>
    </div>
  )
}

export default Results