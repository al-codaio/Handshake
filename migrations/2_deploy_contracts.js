var Owned = artifacts.require("./Owned.sol");
var LaborContract = artifacts.require("./LaborContract.sol");
var Handshake = artifacts.require("./Handshake.sol");

module.exports = function(deployer) {
  deployer.deploy(Owned);
  deployer.deploy(LaborContract);
  deployer.deploy(Handshake);
};
