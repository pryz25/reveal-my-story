import React from 'react';

const CustomStory = ({userStory, handleChange}) => {
  return (
    <div>
      <textarea value={userStory} onChange={handleChange} />
    </div>
  )
}

export default CustomStory;