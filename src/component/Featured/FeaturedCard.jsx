import React from 'react'
import './FeaturedCard.css'
function FeaturedCard(props) {
    return (
        <div>
            <div className="featuredCard-cont">
                <div className="featuredCard-Pic"><img src={props.pic} alt={props.title} /></div>

                <div className="featured-heading">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard
