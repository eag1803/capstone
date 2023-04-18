import React from "react";
import { Navbar } from "./Navbar"

import './styling/style.css'

export function Projectpage({charityName, charityEndTime, totalBenificiaries, totalBalance, openDonateModal}) {

    function convertEndTime() {
        if(charityEndTime !== undefined) {
            let endTimeUnix = charityEndTime.toNumber()
            let endDate = new Date(endTimeUnix);
            console.log(endDate);
            // To calculate the time difference of two dates
            let diffTime = endDate.getTime() - new Date().getTime()
    
            // To calculate the no. of days between two dates
            let diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
            return `${diffDays} days remaining`;
        }
    }

    function getBackers() {
        if(totalBenificiaries !== undefined) {
            return totalBenificiaries.toNumber()
        }
    }

    function getTotalRaised() {
        if(totalBalance !== undefined) {
            return totalBalance.toNumber()
        }
    }
    return <div className='projectPage'>
    <div className="home">
    <div className='center'>
                    <span >
                        <h3>
                            {charityName}
                        </h3>
                        <p className='projectDescription'>
                            projectDescription
                        </p>
                    </span>
                </div>
        <div className='content'>
            <div className="placeholder">
            placeholder

                <div className='right' id='backerInfo'>
                    <p>
                    ${getTotalRaised()} Raised
                    <br/><br/>

                    {getBackers()} Backers
                    <br/><br/>

                    {convertEndTime()} 
                    </p>

                    <div className="center">
                        <button className="button" onClick={openDonateModal}>
                        Back this project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


}
