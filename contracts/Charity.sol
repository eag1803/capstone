pragma solidity ^0.8.9;

contract Charity {

    string name;
    mapping (address => uint256) contributors;
    address creator;
    uint256 goal;
    address beneficiary;
    uint256 end_time;
    bool lock = false;

    event ContributionReceived(address indexed fromAddress, uint256 amount);
    event WithdrawlSent(uint amount);

    constructor(string memory _name, address _beneficiary, uint256 _goal, uint256 _end_time, address _creator) {

        name = _name;
        beneficiary = _beneficiary;
        goal = _goal;
        end_time = _end_time + block.timestamp;
        creator = _creator;
        
    }

    function recieve() external payable{
        require(block.timestamp < end_time, "The live period for this charity has ended");
        contributors[msg.sender] += msg.value;
        emit ContributionReceived(msg.sender, msg.value);
    }

    function withdrawl() external {
        require(msg.sender == beneficiary, "Only the benificiary can withdrawl from the charity");
        require(block.timestamp >= end_time || goal < address(this).balance, "The time or money goals for the charity have not been satisfied");
        require(!lock, "Cannot withdraw while another withdrawal is processing");
        lock = true;
        uint bal = address(this).balance;
        require(bal > 0);
        (bool send, ) = msg.sender.call{value: bal}("");
        require(send, "Failed to send");
        emit WithdrawlSent(bal);
        lock = false;
    }

    function get_balance() external view returns(uint256){
        return address(this).balance;
    }

    function get_user_balance() external view returns(uint256){
        return contributors[msg.sender];
    }

    function get_name() external view returns(string memory){
        return name;
    }

    function get_goal() external view returns(uint256){
        return goal;
    }
    
    function get_beneficiary() external view returns(address){
        return beneficiary;
    }

    function get_creator() external view returns(address){
        return creator;
    }

    function get_time_left() external view returns(uint256){
        if(block.timestamp < end_time) return end_time - block.timestamp;
        return 0;
    }
}