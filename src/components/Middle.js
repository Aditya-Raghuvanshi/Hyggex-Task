import React from 'react'
import Hyggex from "../assets/Hyggex.jpg";
import create from "../assets/create-flash.jpg";

const Middle = () => {
  return (
    <div className='flex justify-between mx-16 mt-24 mb-10'>
      <img className='h-16 rounded-lg' src={Hyggex} alt="hyggex" />
      <img className='h-16 rounded-lg' src={create} alt="create" />
    </div>
  )
}

export default Middle
