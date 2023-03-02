require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    localganache:{
      url: "http://127.0.0.1:8545",
      accounts: ["80a249b2bb13ad7248e5520edfaf2ad60c42030a9a4a164e926e0db52c09ad70"],
      chainId: 1337
    }
  }
};
