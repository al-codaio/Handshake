pragma solidity ^0.4.15;

import "./interfaces/LaborContractI.sol";

contract LaborContract is LaborContractI {

	string contractData;
	address[] public signees;
	mapping(address => string) public signeeData;

	event LogContractSigned(address indexed signee, string data);

	function LaborContract(string data){
		contractData = data;
	}

	// To be completed by the potential future employee, from their uPort identity.
	function sign(string data)
	public
	returns (bool){
		require(!hasSigned(msg.sender));
		signees.push(msg.sender);
		signeeData[msg.sender] = data;
		LogContractSigned(msg.sender, data);
		return true;
	}

	function getContractData() public constant returns(string){
		return contractData;
	}

	function hasSigned(address signee) public returns (bool){
		return bytes(signeeData[signee]).length > 0;
	}

	function getSigneeAt(uint index) public returns (address){
		return signees[index];
	}
}
