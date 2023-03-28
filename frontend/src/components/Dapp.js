import React, { Fragment } from "react";

// We'll use ethers to interact with the Ethereum network and our contract
import { ethers } from "ethers";

// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import CharityChainArtifact from "../contracts/CharityChain.json";
import CharityArtifact from "../contracts/Charity.json";
import contractAddress from "../contracts/contract-address.json";

// Dapp HTML Components
import { NoWalletDetected } from "./NoWalletDetected";
import { ConnectWallet } from "./ConnectWallet";
import { Loading } from "./Loading";
import { Transfer } from "./Transfer";
import { TransactionErrorMessage } from "./TransactionErrorMessage";
import { WaitingForTransactionMessage } from "./WaitingForTransaction";
import { Withdrawl } from "./Withdrawl";

import { Homepage } from "./Homepage"
import { Projectpage } from "./Projectpage"
import { Discoverpage } from "./Discoverpage"
import {Navbar} from "./Navbar"
import './styling/style.css'
 
// This is the Network id the frontend will use.
const HARDHAT_NETWORK_ID = '31337';

// This is an error code that indicates that the user canceled a transaction
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export class Dapp extends React.Component {
  constructor(props) {
    super(props);

    // Charity Chain Contract intial state
    this.initialState = {
      // The list of Charities
      charities: undefined,
      // The info the the selected Charity Contract
      charityData: undefined,
      // The user's address and balance
      selectedAddress: undefined,
      userBalance: undefined,
      totalBalance: undefined,
      // The ID about transactions being sent, and any possible error with them
      txBeingSent: undefined,
      transactionError: undefined,
      networkError: undefined,
      currentPage: 'Home'
    };
    this.state = this.initialState;
    this.pages = ['Home', 'Discover', 'Project']
  }

  

  render() {
    // Ethereum wallets inject the window.ethereum object. If it hasn't been
    // injected, we instruct the user to install MetaMask.
    if (window.ethereum === undefined) {
      return <NoWalletDetected />;
    }

    // The next thing we need to do, is to ask the user to connect their wallet.
    // When the wallet gets connected, we are going to save the users's address
    // in the component's state. So, if it hasn't been saved yet, we have
    // to show the ConnectWallet component.
    //
    // Note that we pass it a callback that is going to be called when the user
    // clicks a button. This callback just calls the _connectWallet method.
    if (!this.state.selectedAddress) {
      // return (
      //   <ConnectWallet 
      //     connectWallet={() => this._connectWallet()} 
      //     networkError={this.state.networkError}
      //     dismiss={() => this._dismissNetworkError()}
      //   />
      // );
      return (
        <Fragment>
          <Navbar 
            currentPage = {this.state.currentPage}
            connectWallet = {() => this._connectWallet()}
            handlePageChange={(value) => this.setState({'currentPage':value})}
            handleDisconnectWallet={() => this._disconnectWallet()}
            networkError={this.state.networkError}
            dismiss={() => this._dismissNetworkError()}
            loggedIn={this.state.tokenData}
            />
          <Homepage 
          />
      </Fragment>
      )
    }

    /*
    // If the token data or the user's balance hasn't loaded yet, we show
    // a loading component.
    if (!this.state.tokenData || !this.state.userBalance || !this.state.totalBalance) {
      return <Loading />;
    }*/

    // If everything is loaded, we render the application.
    switch(this.state.currentPage) {
      case 'Home':
        console.log('home')
        return (
          <Fragment>
            <Navbar 
            currentPage = {this.state.currentPage}
            connectWallet = {() => this._connectWallet()}
            handlePageChange={(value) => this.setState({'currentPage':value})}
            handleDisconnectWallet={() => this._disconnectWallet()}
            networkError={this.state.networkError}
            dismiss={() => this._dismissNetworkError()}
            loggedIn={this.state.tokenData}
            />
            <Homepage 
            />
        </Fragment>
        )
      case 'Discover':
        return (
          <Fragment>
            <Navbar 
            currentPage = {this.state.currentPage}
            connectWallet = {() => this._connectWallet()}
            handlePageChange={(value) => this.setState({'currentPage':value})}
            handleDisconnectWallet={() => this._disconnectWallet()}
            networkError={this.state.networkError}
            dismiss={() => this._dismissNetworkError()}
            loggedIn={this.state.tokenData}
            />,
            <Discoverpage 
            />
        </Fragment>
        )
      case 'Project':
        return (
          <Fragment>
            <Navbar 
            currentPage = {this.state.currentPage}
            connectWallet = {() => this._connectWallet()}
            handlePageChange={(value) => this.setState({'currentPage':value})}
            handleDisconnectWallet={() => this._disconnectWallet()}
            networkError={this.state.networkError}
            dismiss={() => this._dismissNetworkError()}
            loggedIn={this.state.tokenData}
            />,
            <Projectpage 
            />
        </Fragment>
        )
      default:
        return 'failed switch'
    }
    // return (
    //   <div className="container p-4">
    //     <div className="row">
    //       <div className="col-12">
    //        <h1>
    //           {this.state.tokenData.name}
    //         </h1>
    //         <h2>
    //           Beneficiary Address : {this.state.tokenData.beneficiary.toString().toLowerCase()}
    //         </h2>
    //         <h3>
    //           Time Till Close : {(this.state.tokenData.end_time / 86400).toString()} Days
    //         </h3>
    //         <h3>
    //           Donations : {ethers.utils.formatEther(this.state.totalBalance)} ETH / {ethers.utils.formatEther(this.state.tokenData.goal)} ETH
    //         </h3>
    //         <p>
    //           Welcome <b>{this.state.selectedAddress}</b>, you have donated{" "}
    //           <b>
    //             {ethers.utils.formatEther(this.state.userBalance)} ETH
    //           </b>
    //           .
    //         </p>
    //       </div>
    //     </div>

    //     <hr />

    //     <div className="row">
    //       <div className="col-12">
    //         {/* 
    //           Sending a transaction isn't an immediate action. You have to wait
    //           for it to be mined.
    //           If we are waiting for one, we show a message here.
    //         */}
    //         {this.state.txBeingSent && (
    //           <WaitingForTransactionMessage txHash={this.state.txBeingSent} />
    //         )}

    //         {/* 
    //           Sending a transaction can fail in multiple ways. 
    //           If that happened, we show a message here.
    //         */}
    //         {this.state.transactionError && (
    //           <TransactionErrorMessage
    //             message={this._getRpcErrorMessage(this.state.transactionError)}
    //             dismiss={() => this._dismissTransactionError()}
    //           />
    //         )}
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-12">
    //         <Transfer
    //           donate={(amount) =>
    //             this._donate(amount)
    //           }
    //         />
    //         {this.state.tokenData.beneficiary.toString().toLowerCase() === this.state.selectedAddress.toString() && (
    //           <Withdrawl 
    //           withdraw={ () =>
    //             this._withdraw()
    //           }
    //           />
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // );
  }

  componentWillUnmount() {
    // Stop polling CharityChain Contract when Dapp unmounted
    this._stopPollingData();
  }

  async _connectWallet() {
    // This method is run when the user clicks the Connect. It connects the dapp to the user's wallet, and initializes it.

    const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });

    // First we check the network
    if (!this._checkNetwork()) {
      return;
    }

    this._initialize(selectedAddress);

    // We reinitialize it whenever the user changes their account.
    window.ethereum.on("accountsChanged", ([newAddress]) => {
      this._stopPollingData();
      // `accountsChanged` event can be triggered with an undefined newAddress.
      // To avoid errors, we reset the dapp state 
      if (newAddress === undefined) {
        return this._resetState();
      }
      
      this._initialize(newAddress);
    });
    
    // We reset the dapp state if the network is changed
    window.ethereum.on("chainChanged", ([networkId]) => {
      this._stopPollingData();
      this._resetState();
    });

  }

  _disconnectWallet() {
    this.setState(this.initialState);
  }

  _initialize(userAddress) {
    // This method initializes the dapp

    // We first store the user's address in the component's state
    this.setState({
      selectedAddress: userAddress,
    });

    // Then, we initialize ethers, fetch the CharityChain data, and start polling

    this._initializeEthers();
    this._startPollingData();
  }

  async _initializeEthers() {
    // We first initialize ethers by creating a provider using window.ethereum
    this._provider = new ethers.providers.Web3Provider(window.ethereum);

    // Then, we initialize the contract using that provider and the Charity Chain artifact
    this._charitychain = new ethers.Contract(
      contractAddress.CharityChain,
      CharityChainArtifact.abi,
      this._provider.getSigner(0)
    );
    this._charity = undefined;
  }

  _selectCharity(index){
    const charityAddress = this.state.charities[index];
    this._initializeCharity(charityAddress);
    this._getCharityData();
  }


  // Will initalize selected charity contract
  async _initializeCharity(charityAddress){
    this._charity = new ethers.Contract(
      charityAddress,
      CharityArtifact.abi,
      this._provider.getSigner(0)
    );
  }


  // The next two methods are needed to start and stop polling data
  _startPollingData() {
    this._pollDataInterval = setInterval(() => {
      this._updateCharities()
      this._updateUserBalance()
      this._updateTotalBalance()
    }, 1000);

    // We run it once immediately so we don't have to wait for it
    this._updateCharities();
    this._updateUserBalance();
    this._updateTotalBalance();
  }

  _stopPollingData() {
    clearInterval(this._pollDataInterval);
    this._pollDataInterval = undefined;
  }

  // This reads from the Charity contract and store the results in the component state.
  async _getCharityData() {
  
    const name = await this._charity.get_name();
    const beneficiary = await this._charity.get_beneficiary();
    const goal = await this._charity.get_goal();
    const end_time = await this._charity.get_time_left();

    this.setState({ charityData: { name, beneficiary, goal, end_time} });
  }

  async _updateCharities(){
    const charities = await this._charitychain.get_charities();
    this.setState({ charities })
  }

  async _updateUserBalance() {
    const userBalance = 1
    // const userBalance = await this._token.get_user_balance();
    this.setState({ userBalance });
  }

  async _updateTotalBalance() {
    const totalBalance = 1;//await this._token.get_balance();
    this.setState({ totalBalance });
  }

  
  // Method to make a new Charity
  async _makeCharity(name, beneficiary, goal, end_time){
    try {
      this._dismissTransactionError();

      const tx = await this._charitychain.make_charity(name, beneficiary, goal, end_time)
      this.setState({ txBeingSent: tx.hash });

      const receipt = await tx.wait();

      if (receipt.status === 0) {
        throw new Error("Transaction failed");
      }

      await this._updateCharities();
    } catch (error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
      this.setState({ transactionError: error });
    } finally {
      this.setState({ txBeingSent: undefined });
    }
  }

  // Method to Withdraw from selected Charity
  async _withdraw(){
    if(!this._charity){
      return;
    }
    try{
      this._dismissTransactionError();

      const tx = await this._charity.withdrawl()

      this.setState({ txBeingSent: tx.hash });
      const receipt = await tx.wait();

      if (receipt.status === 0) {
        throw new Error("Transaction failed");
      }

      await this._updateTotalBalance();
    } catch (error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
      this.setState({ transactionError: error });
    } finally {
      this.setState({ txBeingSent: undefined });
    }
  }
  
  // Method to Donate to selected Charity
  async _donate(amount) {
    if(!this._charity){
      return;
    }
    try {
      this._dismissTransactionError();

      const tx = await this._charity.recieve({
        from: this.state.selectedAddress,
        value: ethers.utils.parseEther(amount)
      })
      this.setState({ txBeingSent: tx.hash });

      const receipt = await tx.wait();

      if (receipt.status === 0) {
        throw new Error("Transaction failed");
      }

      await this._updateUserBalance();
      await this._updateTotalBalance();
    } catch (error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
      this.setState({ transactionError: error });
    } finally {
      this.setState({ txBeingSent: undefined });
    }
  }

  // This method just clears part of the state.
  _dismissTransactionError() {
    this.setState({ transactionError: undefined });
  }

  // This method just clears part of the state.
  _dismissNetworkError() {
    this.setState({ networkError: undefined });
  }

  // This is an utility method that turns an RPC error into a human readable
  // message.
  _getRpcErrorMessage(error) {
    if (error.data) {
      return error.data.message;
    }

    return error.message;
  }

  // This method resets the state
  _resetState() {
    this.setState(this.initialState);
  }

  // This method checks if Metamask selected network is Localhost:8545 
  _checkNetwork() {
    if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
      return true;
    }

    this.setState({ 
      networkError: 'Please connect Metamask to Localhost:8545'
    });

    return false;
  }
}
