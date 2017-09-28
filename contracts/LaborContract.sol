pragma solidity ^0.4.15;

import "./interfaces/LaborContractI.sol";

contract LaborContract is LaborContractI {

	string contractData;
	address[] public signees;
	mapping(address => bool) public signeeExists;

	event LogContractSigned(address indexed signee);

	function LaborContract(string data){
		contractData = data;
	}

	// To be completed by the potential future employee, from their uPort identity.
	function sign()
	public
	returns (bool){
		require(!hasSigned(msg.sender));
		signees.push(msg.sender);
		signeeExists[msg.sender] = true;
		LogContractSigned(msg.sender);
		return true;
	}

	function getContractData() public constant returns(string){
		return contractData;
	}

	function hasSigned(address signee) public returns (bool){
		return signeeExists[signee];
	}

	function getSigneeAt(uint index) public returns (address){
		return signees[index];
	}
}
