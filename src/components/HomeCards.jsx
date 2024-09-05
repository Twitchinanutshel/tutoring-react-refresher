import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <div>
      <Card>
        <h1>For Students</h1>
        <p>Find the right teacher for you</p>
        <button>Browse Tutors</button>
      </Card>

      <Card bg='bg-red-500'>
        <h1>For Tutorers</h1>
        <p>Use your language teaching skills to earn today</p>
        <button>Add Tutor</button>
      </Card>
    </div>
  )
}

export default HomeCards