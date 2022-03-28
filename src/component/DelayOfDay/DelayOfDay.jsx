import React from 'react'
import DCard from './DCard'
import LeftVectorSlide from './LeftVectorSlide'
import RightVectorSlide from './RightVectorSlide'
import './DelayOfDay.css'
function DelayOfDay() {
    return (
        <div>
            <div className="delay-container">
                <div className="delay-headingcont">

                <div className="delay-heading">
                    <div ><h1 id="heading1"> Deals of the day   </h1></div>
                    <div ><h2 id="heading2">   19:20:32 left</h2></div>
                </div>


                <div className="delay-icon">
                    <div className="l-arrow"><a href="#"><LeftVectorSlide /></a>  </div>
                    <div className="r-arrow"><a href="#"><RightVectorSlide /></a>  </div>
                </div>
                </div>
                <div className="delay-day-card">

                    <div className="delay-card"><DCard title="Covifind Covid-19 Rapid" pic="./Images/covifind.jpg" subtitle="Antigen Self Test" cprice="MRP" symbol="₹" cancelPrice="300" price="225" />
                    </div>

                    <div className="delay-card">
                        <DCard title="Accu chek Active" pic="./Images/accu.jpg" subtitle="Glucometer Test Strips" cprice="MRP" symbol="₹" cancelPrice="975" price="809" />
                    </div>

                    <div className="delay-card">
                        <DCard title="Volini All Round 360" pic="./Images/volini.jpg" subtitle="Action Spray Bottle" cprice="MRP" symbol="₹" cancelPrice="210" price="150" />
                    </div>

                    <div className="delay-card">
                        <DCard title="Liveasy Wellness Biotin " pic="./Images/Liveasy.jpg" subtitle="10000mcg With Calcium" cprice="MRP" symbol="₹" cancelPrice="999" price="500" />
                    </div>

                    <div className="delay-card">
                        <DCard title="Sugar Free Gold " pic="./Images/sugar.jpg" subtitle="Sweetener Powder Jar" cprice="MRP" symbol="₹" cancelPrice="159" price="100" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DelayOfDay
