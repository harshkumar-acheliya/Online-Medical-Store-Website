import React from 'react'
import './DCard.css'
function DCard(props) {
    return (
        <div>
            <div className="day-container">
                <div className="pic1">
                    <img src={props.pic} alt={props.title} />
                </div>
                <div className="day-heading"><h2>{props.title}</h2></div>
                <div className="day-subheading"><h2>{props.subtile}</h2></div>
                <div className="day-cancelPrice"><h4>{props.cprice} {props.symbol} {props.cancelPrice}</h4></div>
                <div className="day-price"><h2>{props.symbol} {props.price}</h2></div>


            </div>
        </div>
    )
}

export default DCard
