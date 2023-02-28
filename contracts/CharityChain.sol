pragma solidity ^0.8.9;
import "./Charity.sol";

contract CharityChain {

    address charitys [] = new address[](0);
    

    function make_charity(string memory _name, address _beneficiary, uint256 _goal, uint256 _end_time) external payable returns(address){
        address charity = new Charity( _name, _beneficiary, _goal, _end_time, msg.sender);
        charitys.push(charity)
        return address;
    }

    function get_charities() external view returns(address[]){
        return charitys;
    }

    function get_user_contributions() external view returns(mapping(address => uint256)){
        mapping(address => uint256) contributions;
        len = charitys.length;
        for(uint i = 0; i < len; i++){
            uint256 amount = Charity(charitys[i]).get_user_balance(msg.sender); //need to implement a secure get_balance or use user account to call?
            if(amount > 0){
                contributions[charitys[i]] = amount;
            }
        }
        return contributions;

    }

    function get_user_creations() external view returns(address[]){
        address created [] = new address[](0);
        len = charitys.length;
        for(uint i = 0; i < len; i++){
            address creator = Charity(charitys[i]).get_creator(); 
            if(creator == msg.sender){
                created.push(charitys[i]);
            }
        }
        return created;

    }

    
}