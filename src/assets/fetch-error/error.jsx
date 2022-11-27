import React from 'react'
import errorImage from '../images/rick-and-morty-error.png'

const Error = () => {
  return (
    <div className='flex flex-col items-center p-8 gap-4 lg:self-start h-screen'>
        <img src={errorImage} alt="error" className='w-1/3 md:w-1/2'/>
        <h1 className='text-4xl md:text-5xl font-signika font-semibold text-black'> Character not found :(</h1>
    </div>
  )
}

export default Error