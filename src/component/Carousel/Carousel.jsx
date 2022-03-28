import React from 'react'
import './Carousel.css'
import Left from './Left'
import Right from './Right'
function Carousel() {
    return (
        <>
            <div className="C-container">

                <div className="carousel">
                    <div className="parent-img">
                        <img src="./pills.jpg" alt="Carousel" />
                    </div>
                    <div className="child-1">
                        <a href="#"><Left /></a>
                    </div>
                    <div className="child-2">
                        <a href="#"><Right /></a>
                    </div>
                    <div className="c-btn">
                        <a href="#">Shop Now</a>
                    </div>
                    <div className="c-off">
                        <h1>Flat 20% off</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Carousel
