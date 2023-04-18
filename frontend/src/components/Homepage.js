import React from "react";


export function Homepage({charityName, charityEndTime, totalBenificiaries, totalBalance, openDonateModal}) {

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
    return <div className='homepage'>
            <div className="home">
                <div className='center'>
                    <span >
                        <h3>
                            Featured Project : 
                        </h3>
                        <p className='projectDescription'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate
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

                            {convertEndTime()} Days Remaining
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
