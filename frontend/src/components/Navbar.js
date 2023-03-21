import React from "react";
import './styling/navbar.css'


// TODO use currentPage to update the options on the navbar dynamically
// TODO if you are logged in, change the connectWallet button to be a profile button (?)
export function Navbar({currentPage, connectWallet, networkError, dismiss}) {

    return <div className="page">
      <div className="outer">
      
        <button className="button">
          <span>Discover</span>
        </button>
    
        <button className="button">
          <span>Start a Project</span>
        </button>
        
        <span className='center'><img className="icon" src='https://img.icons8.com/windows/512/jsfiddle--v2.png'/> </span>
        
        <span className='right'>
          <button className="button">
          <span>Search</span>
          </button>
    
          <button className="button" onClick={connectWallet}>
            <span>Log in</span>
          </button>
        </span>
        
      </div>
    </div>


}