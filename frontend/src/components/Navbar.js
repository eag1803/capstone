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
      prepareNewCharity('testCharity3', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 125000, new Date('04/10/2023').getTime())
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