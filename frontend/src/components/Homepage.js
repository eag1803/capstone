import React from "react";


export function Homepage({}) {
    return <div className='homepage'>
            <div className="home">
                <div className='center'>
                    <span >
                        <h3>
                            Featured Project
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