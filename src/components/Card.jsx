import React from 'react';
// import { FcLike } from 'react-icons/fc';

const Card = (props) => {
  return (
    <div>
      
        <img src={props.course.image.url} alt={props.course.image.alt} />
        {/* <button>
        <FcLike /> {/* Render the FaThumbsUp icon */}
        {/* </button> */} 
      
      <div>
        <p>{props.course.title}</p>
        <p>{props.course.description}</p>
      </div>
    </div>
  );
};

export default Card;
