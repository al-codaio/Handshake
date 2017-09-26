pragma solidity ^0.4.15;

import "./LaborContract.sol";
import "./Owned.sol";

contract RecruitmentAgency is Owned {

  address[] public laborContracts;
  mapping(address => bool) public laborContractExists;

  // Emitted on creation of contracts - could be listened to by a regulating body
  event LaborContractCreated(bytes32 indexed uwcLocation, address indexed atAddress);

  // Anything else needs to happen on creation?
  // Any relation to accreditation etc.via uPort?
  function RecruitmentAgency() {}

  // Should we check that uwcLocation hasn't been used by other contracts?
  function newLaborContract(bytes32 uwcLocation)
  public
  fromOwner
  returns (address) {
    LaborContract laborContract = new LaborContract(uwcLocation);
    laborContracts.push(laborContract);
    laborContractExists[laborContract] = true;
    LaborContractCreated(uwcLocation, laborContract); 
    return laborContract;
  }


}
