import React from 'react';
import './MenuCard.css';

function MenuCard({
    src,
    title,
    description,
    price,
}) {
    return (
        <div className='searchResult'>
            <img src={src} alt="" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                </div>

                <div className="searchResult__infoBottom">
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard
