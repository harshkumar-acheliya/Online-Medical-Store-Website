import React from 'react'
import Appstore from './Appstore'
import CallIcon from './CallIcon'
import './DownloadApp.css'
import Mobile from './Mobile'
import Playstore from './Playstore'
function DownloadApp() {
    return (
        <div>
            <div className="d-container">
                <div className="ld-part">
                    <img src="retailer.png" alt="" />
                </div>
                <div className="rd-part">
                    <div className="d-heading"><h3>Download app for free</h3></div>
                    <div className="d-links">
                        <div className="d1-links">
                        <ul>
                            <li><a className="d-btn" href="#">Google Play </a></li>
                            <li><a className="d-btn-icon" href="#"><Playstore /></a></li>
                        </ul>
                        </div>
                        <div className="d2-links">
                        <ul>

                            <li><a className="d-btn" href="#">App Store  </a></li>
                            <li><a className="d-btn-icon" href="#"><Appstore /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="d-subheading"><h4>Get the link to Download the app</h4>
                    </div>
                    <div className="takeNum">
                        <div className="callIcon"> <CallIcon /> </div>
                        <div className="d-input">
                            <input type="number" name="number" id="number" placeholder="Enter phone number" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DownloadApp
