import React from 'react';
import tutors from '../tutors.json';
import TutorListing from './TutorListing';

const TutorListings = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {tutors.map((tutor) => ( 
          <TutorListing key={tutor.id} tutor={ tutor } /> 
        ))}
      </div>
    </div>
  );
};

export default TutorListings;
