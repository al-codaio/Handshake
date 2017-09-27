pragma solidity ^0.4.15;

contract LaborContractI {
	function sign() public returns (bool);
	function getContractData() public constant returns(string);
    function hasSigned(address signee) public returns (bool);
	/*Support iteration*/
    function getSigneeAt(uint index) public returns (address);
}
