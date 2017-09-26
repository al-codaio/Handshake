var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Owned = artifacts.require("./Owned.sol");
var LaborContract = artifacts.require("./LaborContract.sol");
var RecruitmentAgency = artifacts.require("./RecruitmentAgency.sol");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  deployer.deploy(Owned);
  deployer.deploy(LaborContract);
  deployer.deploy(RecruitmentAgency);
};
