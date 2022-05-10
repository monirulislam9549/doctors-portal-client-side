import React from 'react';

const InfoCard = ({ img, cardTitle, cardDescription, bgClass }) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Movie" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p className='description'>{cardDescription}</p>
            </div>
        </div>
    );
};

export default InfoCard;