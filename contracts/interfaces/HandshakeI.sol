pragma solidity ^0.4.15;

import "./LaborContractI.sol";

contract HandshakeI {
    /*Registered agencies can create labor contracts here*/
    function createLaborContract(string data) public returns(address);
    function registerAgency(address agency, string data) public returns(bool);
    function isRegistered(address agency) public constant returns(bool);

    function getAgencyData(address agency) public constant returns(string);
    /*For GUI iteration*/
    function getLaborContractAt(uint index) public constant returns(address);
}
