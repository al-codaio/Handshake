pragma solidity ^0.4.15;

contract LaborContract {

	string contractData;
	address[] public signees;
	mapping(address => bool) public isSignee;

	event LogContractSigned(address indexed signee);

	function LaborContract(string data){
		contractData = data;
	}

	// To be completed by the potential future employee, from their uPort identity.
	function signContract()
	public
	returns (bool){
		require(!isSignee[msg.sender]);
		signees.push(msg.sender);
		isSignee[msg.sender] = true;
		LogContractSigned(msg.sender);
		return true;
	}
}
