import React from 'react'
import FeaturedCard from './FeaturedCard'
import LeftVectorSlide from '../DelayOfDay/LeftVectorSlide'
import RightVectorSlide from '../DelayOfDay/RightVectorSlide'
import './Featured.css'
function Featured() {
    return (
        <div>

<div className="delay-container featured-container">
                <div className="delay-headingcont">

                <div className="delay-heading featured-heading">
                    <div ><h1 id="heading11"> Featured Brands   </h1></div>
                    <div id="heading234"> </div>
                </div>


                <div className="delay-icon">
                    <div className="l-arrow"> <a href="#"><LeftVectorSlide /></a> </div>
                    <div className="r-arrow"> <a href="#"><RightVectorSlide /></a> </div>
                </div>
                </div>
                <div className="delay-day-card">

                    <div className="delay-card">
                    <FeaturedCard pic="./Images/liveasy.png" title=" Liveasy"/>
                    </div>

                    <div className="delay-card">
                    <FeaturedCard pic="./Images/sugarfree2.jpg" title=" Sugar Free"/>
                    </div>

                    <div className="delay-card">
                    <FeaturedCard pic="./Images/cipla.png" title=" Cipla"/>
                    </div>

                    <div className="delay-card">
                    <FeaturedCard pic="./Images/vicks.jpg" title=" Vicks"/>
                    </div>

                    <div className="delay-card">
                    <FeaturedCard pic="./Images/benadryl.jpg" title=" Benadryl"/>
                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default Featured
