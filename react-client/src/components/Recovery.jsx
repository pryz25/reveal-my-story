import React from 'react';

const Recovery = ({save, userId}) => {
  if (!save) {
    return null;
  }

  return (
    <div>
      <span>Your recovery ID is: {userId}</span>
    </div>
  )
}

export default Recovery;
