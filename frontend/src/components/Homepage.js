import React from "react";
import { utils } from "ethers";


export function Homepage({charityName, charityEndTime, totalBenificiaries, totalBalance, charityGoal, description, showWithdrawl, withdraw, openDonateModal}) {

    function convertEndTime() {
        if(charityEndTime !== undefined) {
            let endTimeUnix = charityEndTime.toNumber()
            let endDate = new Date(endTimeUnix);
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
            return utils.formatEther(totalBalance)
        }
    }

    function getGoal(){
        if(charityGoal !== undefined){
            return utils.formatEther(charityGoal)
        }
    }

    return <div className='homepage'>
            <div className="home">
                <div className='center'>
                            <span >
                                <h2>
                                    Featured Project
                                </h2>
                                <h3>
                                    {(charityName !== undefined ? charityName : '') }
                                </h3>
                                <p className='projectDescription'>
                                    {description}
                                </p>
                            </span>
                        </div>
                    <div className='content'>
                        <img src='https://picsum.photos/1400/1400' className="fullImg"/>

                        <div className='right' id='backerInfo'>
                            <p>
                            {getTotalRaised()} ETH / {getGoal()} ETH Raised
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


}
