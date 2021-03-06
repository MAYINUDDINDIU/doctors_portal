import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl bordered">
        <div className="card-body">
          {/* <h2className="card-title">{review.name}</h2> */}
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam fugiat officiis autem voluptate? Iste ad molestiae quos cum accusamus.</p>
          <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} />
            </div>
            </div>
            <div>
                <h4 className='text-xl'>{review.name}</h4>
                <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;