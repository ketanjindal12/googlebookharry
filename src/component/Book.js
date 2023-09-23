import React from 'react'

const Book = ({ book }) => {
    const { volumeInfo } = book;
  return (
    
    <div>
     <h2>{volumeInfo.title}</h2>
      <p>Authors: {volumeInfo.authors.join(', ')}</p>
      <p>Published Date: {volumeInfo.publishedDate}</p>
      <p>Description: {volumeInfo.description}</p> 
    </div>
  )
}

export default Book
