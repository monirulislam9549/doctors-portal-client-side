import React from 'react';

const InfoCard = ({ img, cardTitle, cardDescription }) => {
    return (
        <div class="card card-side bg-base-100 shadow-xl bg-accent">
            <figure className='pl-5'><img src={img} alt="Movie" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>
    );
};

export default InfoCard;