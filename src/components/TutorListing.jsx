import React from 'react'
import { useState } from 'react'

const TutorListing = ({ tutor }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = tutor.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }



  return (
    <div key={tutor.id} className=''>
      <div><strong>Name:</strong> {tutor.name}</div>
      <div><strong>Location:</strong> {tutor.location}</div>
      <div><strong>Language Level:</strong> {tutor.languageLevel}</div>
      <div><strong>Description:</strong> {description}</div>
      <button onClick={() => setShowFullDescription((prevState) => !prevState)}>{showFullDescription ? 'Show Less' : 'Show More'}</button>
      <div><strong>Rate:</strong> {tutor.rate}</div>
      <div><strong>Availability:</strong> {tutor.availability}</div>
      <div><strong>Email:</strong> {tutor.contactEmail}</div>
      <div><strong>Phone:</strong> {tutor.contactPhone}</div>
    </div>
  )
}

export default TutorListing