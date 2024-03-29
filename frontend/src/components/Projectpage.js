import React from "react";
import { Navbar } from "./Navbar"
import { utils } from "ethers";

import './styling/style.css'
import { Withdrawl } from "./Withdrawl";

export function Projectpage({charityName, charityEndTime, totalBenificiaries, totalBalance, charityGoal, description, showWithdrawl, withdraw, openDonateModal}) {

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

    function getWithdrawl(){
        if(showWithdrawl !== undefined){
            return showWithdrawl
        }
        return false
    }


    return <div className='projectPage'>
    <div className="home">
        <div className='center'>
                    <span >
                        <h3>
                            {charityName}
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
                        {getWithdrawl() && (
                            <button className="button" onClick={withdraw}>
                                Withdraw
                            </button>
                        )}
                    </div>
            </div>
        </div>
    </div>
</div>


}
