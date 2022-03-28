import React from 'react'
import Delivery from './Delivery'
import Medical from './Medical'
import Medicine from './Medicine'
import Retail from './Retail'
import './MedicinesBrand.css'

function MedicinesBrand() {
    return (
        <div>
            <div className="med-container">
                <div className="medicine-card1">
                    <div className="pic1"> <Delivery /> </div>
                    <div className="medicine-title"><h2>50,000+</h2></div>
                    <div className="medicine-subtitle"><h2>Orders Delivered</h2></div>
                </div>
                <div className="medicine-card1">
                    <div className="pic1"> <Medicine /> </div>
                    <div className="medicine-title"><h2>1,00,000+</h2></div>
                    <div className="medicine-subtitle"><h2>Medicines Available</h2></div>
                </div>
                <div className="medicine-card1">
                    <div className="pic1"> <Retail /> </div>
                    <div className="medicine-title"><h2>8000+</h2></div>
                    <div className="medicine-subtitle"><h2>Retailers</h2></div>
                </div>
                <div className="medicine-card1">
                    <div className="pic1"> <Medical /> </div>
                    <div className="medicine-title"><h2>500+</h2></div>
                    <div className="medicine-subtitle"><h2>Medical Brands</h2></div>
                </div>


            </div>
        </div>
    )
}

export default MedicinesBrand
