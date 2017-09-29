var Handshake = artifacts.require("./Handshake.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Handshake, {from: accounts[0]});
};
