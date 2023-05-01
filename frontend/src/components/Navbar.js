import React from "react";
import './styling/navbar.css'
import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function Navbar({currentPage, connectWallet, handleDisconnectWallet, networkError, dismiss, loggedIn, handlePageChange, openCharityModal, unSetCharity}) {

    function handlePageChangeChild(event) {
      unSetCharity();
      handlePageChange(event.target.innerText);
    }

    function leftPageButton() {
        return (
          <>
            <button name='Home' className="navButton" onClick={handlePageChangeChild}>
              <span>Home</span>
            </button>
            <button name='Discover' className="navButton" onClick={handlePageChangeChild}>
              <span>Discover</span>
            </button>
          </>
        )
    }

    function loginButton() {
      if(loggedIn) {
        return <button className="navButton" onClick={handleDisconnectWallet}>
        <span>Log out</span>
      </button>
      } else {
        return <button className="navButton" onClick={connectWallet}>
        <span>Log in</span>
      </button>
      }
    }
    return <div className="page">
      <div className="outer">
      
       {leftPageButton()}

        <button className="navButton" onClick={openCharityModal}>
          <span>Start a Project</span>
        </button>
        
        <span className='center'><img className="icon" src='https://img.icons8.com/windows/512/jsfiddle--v2.png'/> </span>
        
        <span className='right'>
         
    
          {loginButton()}
          <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
        </span>
        
      </div>
    </div>


}