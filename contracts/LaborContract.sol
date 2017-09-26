pragma solidity ^0.4.4;

contract LaborContract {

	bytes32 public uwcLocation;
	address[] public signees;
	mapping(address => bool) public isSignee;

	function LaborContract(bytes32 contractLocation){
		uwcLocation = contractLocation;
	}

	// To be completed by the potential future employee, from their uPort identity.
	function signContract()
	public
	returns (bool){
		throw; // TODO: Implement
	}
}
