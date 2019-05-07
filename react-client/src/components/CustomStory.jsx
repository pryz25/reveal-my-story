import React from 'react';

const CustomStory = ({userStory, handleChange}) => {
  return (
    <div>
      <textarea rows='10' value={userStory} onChange={handleChange} />
    </div>
  )
}

export default CustomStory;