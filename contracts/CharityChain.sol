pragma solidity ^0.8.9;
import "./Charity.sol";

contract CharityChain {

    address[] charitys = new address[](0);

    struct UserContribution {
        address charity;
        uint256 amount;
    }

    struct CharityInfo {
        address charity;
        string title;
        string description;
    }

    function make_charity(string memory _name, address _beneficiary, uint256 _goal, string memory _metadata, uint256 _end_time) external payable returns(address){
        Charity charity = new Charity( _name, _beneficiary, _goal, _end_time, _metadata, msg.sender);
        charitys.push(address(charity));
        return address(charity);
    }

    function get_charities() external view returns(CharityInfo[] memory){
        uint len = charitys.length;
        CharityInfo[] memory info = new CharityInfo[](len);
        for(uint i = 0; i < len; i++){
            string memory _title = Charity(charitys[i]).get_name();
            string memory _description = Charity(charitys[i]).get_metadata();
            info[i] = CharityInfo({charity:charitys[i], title:_title, description:_description});
        }
        return info;
    }

    function get_user_contributions() external view returns(UserContribution[] memory){
        uint len = charitys.length;
        UserContribution[] memory contributions = new UserContribution[](len);
        for(uint i = 0; i < len; i++){
            uint256 amount = Charity(charitys[i]).get_user_balance(msg.sender); //need to implement a secure get_balance or use user account to call?
            if(amount > 0){
                contributions[i] = UserContribution({charity:charitys[i], amount:amount});
            }
        }
        return contributions;

    }

    function get_user_creations() external view returns(address[] memory){
        uint len = charitys.length;
        address[] memory created = new address[](len);
        for(uint i = 0; i < len; i++){
            address creator = Charity(charitys[i]).get_creator(); 
            if(creator == msg.sender){
                created[i] = charitys[i];
            }
        }
        return created;

    }

    
}