import React from "react";
import './styling/navbar.css'

// TODO use currentPage to update the options on the navbar dynamically
// TODO if you are logged in, change the connectWallet button to be a profile button (?)
export function Navbar({currentPage, connectWallet, handleDisconnectWallet, networkError, dismiss, loggedIn, handlePageChange}) {

    function handlePageChangeChild(event) {
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

    function disconnectWallet() {
      handleDisconnectWallet()
    }

    function loginButton() {
      if(loggedIn) {
        return <button className="navButton" onClick={disconnectWallet}>
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

        <button className="navButton">
          <span>Start a Project</span>
        </button>
        
        <span className='center'><img className="icon" src='https://img.icons8.com/windows/512/jsfiddle--v2.png'/> </span>
        
        <span className='right'>
          <button className="navButton">
          <span>Search</span>
          </button>
    
          {loginButton()}
        </span>
        
      </div>
    </div>


}