import React from "react";
import './styling/navbar.css'
import { NetworkErrorMessage } from "./NetworkErrorMessage";

// TODO use currentPage to update the options on the navbar dynamically
// TODO if you are logged in, change the connectWallet button to be a profile button (?)
export function Navbar({currentPage, connectWallet, handleDisconnectWallet, networkError, dismiss, loggedIn, handlePageChange, prepareNewCharity, handleNewCharity, unSetCharity}) {

    function handlePageChangeChild(event) {
      unSetCharity();
      handlePageChange(event.target.innerText);
    }

    function leftPageButton() {
      if(currentPage == 'Home') {
        return  <button name='Discover' className="navButton" onClick={handlePageChangeChild}>
        <span>Discover</span>
      </button>
      } else {
        return  <button name='Home' className="navButton" onClick={handlePageChangeChild}>
        <span>Home</span>
      </button>
      }
    }

    function createCharity() {
      prepareNewCharity('test Name2', '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', 125000, 3600 * 24 * 7 * Math.floor(new Date().getTime() / 1000))
      handleNewCharity();
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

        <button className="navButton" onClick={createCharity}>
          <span>Start a Project</span>
        </button>
        
        <span className='center'><img className="icon" src='https://img.icons8.com/windows/512/jsfiddle--v2.png'/> </span>
        
        <span className='right'>
          <button className="navButton">
          <span>Search</span>
          </button>
    
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