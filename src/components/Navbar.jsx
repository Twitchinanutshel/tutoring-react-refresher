import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-7 bg-amber-400'>
      <h1>German Tutoring</h1>
      <div>
        <a className='px-3'>Home</a>
        <a className='px-3'>Tutors</a>
        <a className='px-3'>Add Tutor</a>
      </div>
    </div>
  )
}

export default Navbar