import React from 'react'
import ClientStar from './ClientStar'
import './ClientCard.css'

function ClientCard(props) {
    return (
        <div>
            <div className="client-card-container">

                <div className="client-card">
                    <div className="client-card-heading">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="client-card-subheading">
                        <h4>{props.date}</h4>
                    </div>
                    <div className="client-card-body">
                        <p>{props.body}</p>
                    </div>
                    <div className="client-card-footer">
                        <div className="card-star-icon"><ClientStar /></div>
                        <div className="card-star-icon"><ClientStar /></div>
                        <div className="card-star-icon"><ClientStar /></div>
                        <div className="card-star-icon"><ClientStar /></div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientCard
