import React from 'react'

export const Section = ({title,description}) => {

  return (
    <div>
        <h1>{title}</h1>
        <div>{description}</div>
    </div>
  )
}
