// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const CharityChain = await ethers.getContractFactory("CharityChain");
  const charitychain = await CharityChain.deploy() ;
  await charitychain.deployed();

  console.log("Token address:", charitychain.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(charitychain);
}

function saveFrontendFiles(charitychain) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ CharityChain: charitychain.address }, undefined, 2)
  );

  const CharityChainArtifact = artifacts.readArtifactSync("CharityChain");

  fs.writeFileSync(
    path.join(contractsDir, "CharityChain.json"),
    JSON.stringify(CharityChainArtifact, null, 2)
  );

  const CharityArtifact = artifacts.readArtifactSync("Charity");

  fs.writeFileSync(
    path.join(contractsDir, "Charity.json"),
    JSON.stringify(CharityArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
