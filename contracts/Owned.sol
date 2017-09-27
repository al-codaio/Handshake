pragma solidity ^0.4.17;

contract Owned {

  // uPort proxy address
  address public owner;

  modifier fromOwner() {
    require(msg.sender == owner);
    _;
  }

  function Owned(){
    owner = msg.sender;
  }


  // Given that the identity should really be tied to a near-permanent identity
  // via uPort, we shouldn't need to be transferring ownership. If we ever do
  // need to, the code is below

  /*event LogOwnerSet(address indexed previousOwner, address indexed newOwner);

  function setOwner(address newOwner)
  public
  fromOwner
  returns(bool success){
    require(newOwner != owner);
    require(newOwner != address(0));
    owner = newOwner;
    LogOwnerSet(msg.sender, newOwner);
    return true;
  }*/

}
