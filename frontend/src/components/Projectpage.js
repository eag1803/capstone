import React from "react";
import { Navbar } from "./Navbar"

import './styling/style.css'

export function Projectpage({}) {
    return <div className='projectPage'>
    <div className="home">
        <div className='content'>
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
