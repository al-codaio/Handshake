pragma solidity ^0.4.17;

import "./LaborContractI.sol";

contract Handshake {
    /*Registered agencies can create labor contracts here*/
    function createLaborContract(string data) public returns(address);
    function registerAgency(address agency) public returns(bool);
    function isRegistered(address agency) public returns(bool);
    /*For GUI iteration*/
    function getLaborContractAt(uint index) public returns(address);
}
