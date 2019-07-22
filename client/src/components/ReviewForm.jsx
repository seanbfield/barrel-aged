import React from 'react';

export default ReviewForm = (props) => {
  return (
    <div>
      <p>This is the whiskey review form.</p>
      <button onClick={props.handleSubmit}>Submit Review</button>
    </div>
  )
}