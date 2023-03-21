import React from "react";
import { Navbar } from "./Navbar"

import './styling/homepage.css'

export function Homepage({connectWallet}) {
    return <div className='homepage'>
                <Navbar 
                currentPage = 'Homepage'
                connectWallet = {connectWallet}
                />

            <div className="home">
                <div className='center'>
                    <text>
                    <h3>
                        Featured Project
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate
                    </p>
                    </text>
                </div>

                <div>
                    <div className="placeholder">
                    placeholder

                        <div className='right' id='backerInfo'>
                            <p>
                            $123,456 Raised
                            <br/><br/>

                            1234 Backers
                            <br/><br/>

                            12 Days Remaining
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
