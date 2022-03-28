import React from 'react'
import DCard from '../DelayOfDay/DCard'
import RightVectorSlide from '../DelayOfDay/RightVectorSlide'
import './Recommended.css'
import LeftVectorSlide from '../DelayOfDay/LeftVectorSlide'
function Recommended() {
    return (
        <div>
            <div className="delay-container recc-container">
                <div className="delay-headingcont">

                    <div className="delay-heading recc-heading">
                        <div ><h1 id="heading11"> Recommended for you  </h1></div>
                        <div id="heading23"></div>
                    </div>


                    <div className="delay-icon">
                        <div className="l-arrow"><a href="#"><LeftVectorSlide /></a>  </div>
                        <div className="r-arrow"> <a href="#"><RightVectorSlide /></a> </div>
                    </div>
                </div>
                <div className="delay-day-card">

                    <div className="delay-card"><DCard title="Himalayan LV.52" pic="./Images/himalayan.jpg" subtitle="Tablets 100 s" cprice="MRP" symbol="₹" cancelPrice="300" price="240" />
                    </div>

                    <div className="delay-card">
                        <DCard title="Savalon surface " pic="./Images/savalon.jpg" subtitle="disinfect spray 170g" cprice="MRP" symbol="₹" cancelPrice="160" price="142" />
                    </div>

                    <div className="delay-card">
                        <DCard title="Whey protein" pic="./Images/whey-product.jpg" subtitle="Muscle food 500 gm" cprice="MRP" symbol="₹" cancelPrice="900" price="792" />
                    </div>

                    <div className="delay-card">
                        <DCard title="ACCU check Active " pic="./Images/accu.jpg" subtitle="Test strips 50's" cprice="MRP" symbol="₹" cancelPrice="499" price="360" />
                    </div>

                    <div className="delay-card">
                        <DCard title="KC popcket Face " pic="./Images/Popcket-face.jpg" subtitle="masks 100" cprice="MRP" symbol="₹" cancelPrice="200" price="171" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Recommended
