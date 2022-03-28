import React from 'react'
import HumanArc from './HumanArc'
import './About.css'

function About() {
    return (
        <div>
            <div className="a-container">
                <div className="l-part">
                    <h2>Company Information</h2>
                    <p>Medic is a B2B Marketplace for Medicines and Healthcare <br />
                        products.Medic is a collaborative trade platform that <br />
                        enables business entities to discover products at better <br />
                        rates,transact and get them delivered anywhere in <br />
                        India.
                    </p>
                </div>
                <div className="r-part">
                    <HumanArc/>
                </div>
            </div>
        </div>
    )
}

export default About
