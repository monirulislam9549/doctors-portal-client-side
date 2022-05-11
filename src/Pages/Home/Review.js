import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg shadow-xl text-primary-content">
            <div class="card-body">

                <p>{review.description}</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;