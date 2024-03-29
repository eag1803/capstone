require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const INFURA_API_KEY = "782839cc2f32403aa8a6f398544871a0"

const GOERLI_PRIVATE_KEY = "53f22ddba791f90e26588b1f8aa4ed3f9a6b13f5c4686cbf6da61907120284c9"
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    ganache:{
      url: "http://127.0.0.1:8545",
      accounts: ["4c03691924e0faf7375a968c49e3664bae86a19a739892aecf1ecc2adca11326"],
      chainId: 1337
    }
  }
};

