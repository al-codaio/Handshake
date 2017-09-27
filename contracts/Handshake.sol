pragma solidity ^0.4.15;

import "./LaborContract.sol";
import "./interfaces/HandshakeI.sol";
import "./Owned.sol";

contract Handshake is Owned, HandshakeI {

  address[] public laborContracts;
  mapping(address => bool) public laborContractExists;

  address[] public agencies;
  mapping(address => bool) public agencyExists;

  event LogLaborContractCreated(string indexed data, address indexed agency, address indexed atAddress);

  // Anything else needs to happen on creation?
  // Any relation to accreditation etc.via uPort?
  function Handshake() {}

  function createLaborContract(string data) public returns(address){
    require(isRegistered(msg.sender));
    LaborContract laborContract = new LaborContract(data);
    laborContracts.push(laborContract);
    laborContractExists[laborContract] = true;
    LogLaborContractCreated(data, msg.sender, laborContract);
    return laborContract;
  }

  function registerAgency(address agency) public fromOwner returns(bool){
    require(!isRegistered(agency));
    agencies.push(agency);
    agencyExists[agency] = true;
    return true;
  }

  function isRegistered(address agency) public constant returns(bool){
    return agencyExists[agency];
  }
  /*For GUI iteration*/
  function getLaborContractAt(uint index) public constant returns(address){
    return laborContracts[index];
  }
}
