require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    localganache:{
      url: "http://127.0.0.1:8545",
      accounts: ["6ffc2e6b9aba06d1c381965697e207773e49ff692761a69e25fbd780cc5b6eb1"],
      chainId: 1337
    }
  }
};
