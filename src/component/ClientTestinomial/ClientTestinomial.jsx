import React from 'react'
import ClientCard from './ClientCard'
import ClientLeft from './ClientLeft'
import ClientRight from './ClientRight'
import './ClientTestinomial.css'


function ClientTestinomial() {
    return (
        <div>
            <div className="client-container">
                <div className="client-header">
                    <div className="client-heading"><h2>Client Testimonial</h2></div>
                    <div className="underline"></div>
                </div>
                <div className="client-body">
                    <div className="client-body-card"><ClientCard title="Name" date="23.10.2021" body="Best app among all apps.Poducts have been delivered on time.Would recomend it to everyone requiring fast and efficient delivery of medical products at doorstep." /></div>
                    <div className="client-body-card"><ClientCard title="Name" date="23.10.2021" body="Best app among all apps.Poducts have been delivered on time.Would recomend it to everyone requiring fast and efficient delivery of medical products at doorstep." /></div>
                    <div className="client-body-card"><ClientCard title="Name" date="23.10.2021" body="Best app among all apps.Poducts have been delivered on time.Would recomend it to everyone requiring fast and efficient delivery of medical products at doorstep." /></div>
                    <div className="client-body-card"><ClientCard title="Name" date="23.10.2021" body="Best app among all apps.Poducts have been delivered on time.Would recomend it to everyone requiring fast and efficient delivery of medical products at doorstep." /></div>
                </div>
                <div className="client-footer">
                    <div className="client-left"><a href="#"><ClientLeft /></a>  </div>
                    <div className="client-right"><a href="#"><ClientRight /></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientTestinomial
