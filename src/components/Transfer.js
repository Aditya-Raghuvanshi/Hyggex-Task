import React from 'react'
import { Link } from 'react-router-dom'

const Transfer = () => {
  return (
    <div className='flex h-10 mx-10 my-5 '>
      <div className="img px-2 cursor-pointer flex">
        <Link to={"/"}>
        <img className='h-10' src="https://static.thenounproject.com/png/3574480-200.png" alt="home" />
        </Link>
        <p className='mt-2'>-</p>
      </div>
      <div className="flashcard mt-2 px-2 cursor-pointer">
      <Link to={"/flash"}>
        <p className=''>FlashCard -</p>
        </Link>  
      </div>
      <div className="math mt-2 px-2 cursor-pointer">
      <Link to={"/math"}>
      <p>Mathematics -</p>
      </Link>
      </div>
      <div className="relation mt-2 px-2 cursor-pointer">
        <Link to={"/relation"}>
        <p>Relation and Function</p>
        </Link>
      </div>
    </div>
  )
}

export default Transfer
