import React from "react";
import { Navbar } from "./Navbar"

import './styling/style.css'

export function Projectpage({charityName, charityEndTime}) {

    function convertEndTime() {
        let endTimeUnix = charityEndTime.toNumber()
        let endDate = new Date(endTimeUnix);
        // To calculate the time difference of two dates
        let diffTime = endDate.getTime() - new Date().getTime()
        console.log(endDate)

        console.log(endDate.getTime()/(1000*3600*24))
        // To calculate the no. of days between two dates
        let diffDays = diffTime / (1000 * 3600 * 24);
        return diffDays;
        
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
                    $123,456 Raised
                    <br/><br/>

                    1234 Backers
                    <br/><br/>

                    {convertEndTime()} 
                    </p>

                    <div className="center">
                        <button className="button">
                        Back this project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


}
