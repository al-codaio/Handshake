pragma solidity ^0.4.15;

import "./LaborContract.sol";
import "./interfaces/HandshakeI.sol";
import "./Owned.sol";

contract Handshake is Owned, HandshakeI {

  address[] public laborContracts;
  mapping(address => bool) public laborContractExists;

  address[] public agencies;
  mapping(address => bool) public agencyExists;
  mapping(address => string) public agencyData;

  event LogLaborContractCreated(address indexed agency, address indexed atAddress, string data);
  event LogRegistration(address indexed sender, address indexed agency);

  // nothing special here for now
  function Handshake() {}

  function createLaborContract(string data) public returns(address){
    require(isRegistered(msg.sender));
    LaborContract laborContract = new LaborContract(data);
    laborContracts.push(laborContract);
    laborContractExists[laborContract] = true;
    LogLaborContractCreated(msg.sender, laborContract, data);
    return laborContract;
  }

  function registerAgency(address agency, string data) public returns(bool){
    require(!isRegistered(agency));
    agencies.push(agency);
    agencyExists[agency] = true;
    agencyData[agency] = data;
    LogRegistration(msg.sender, agency);
    return true;
  }

  function getAgencyData(address agency) public constant returns(string){
    return agencyData[agency];
  }

  function isRegistered(address agency) public constant returns(bool){
    return agencyExists[agency];
  }
  /*For GUI iteration*/
  function getLaborContractAt(uint index) public constant returns(address){
    return laborContracts[index];
  }
}
