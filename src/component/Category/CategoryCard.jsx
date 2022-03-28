import React from 'react'
import './CategoryCard.css'
function CategoryCard(props) {
    return (
        <div>
            <div className="category-card-cont">
                <div className="cat-card-item">
                    <div className="l-side-cat-item">
                        <div className="l-cat-heading"><h2>{props.title}</h2>
                        </div>
                        <div className="l-cat-subheading"><h3>{props.subtitle}</h3>
                        </div>
                    </div>
                    <div className="r-side-cat-items">
                        <div className="r-cat-image">
                            <img src={props.pic} alt={props.title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
