pragma solidity ^0.4.18;

contract DappPerson {
    
    address public owner;
    
    string public name;
    
    uint8 public age;
    
    string[] public hobbies;
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    function Dapp() public {
        owner = msg.sender;
    }

    function setName(string _name) public onlyOwner {
        name = _name;
    }
    
    function setAge(uint8 _age) public onlyOwner {
        age = _age;
    }
    
    function addHobby(string _hobby) public onlyOwner {
        hobbies.push(_hobby);
    }
    
    function isHappy() public view returns (bool) {
        return hobbies.length > 0;
    }
}
