@startuml

class CharityChain {
    - charitys: address[]
    + make_charity(_name: string, _beneficiary: address, _goal: uint256, _metadata: string, _end_time: uint256) external payable: address
    + get_charities() external view: CharityInfo[]
    + get_user_contributions() external view: UserContribution[]
    + get_user_creations() external view: address[]
}

class Charity {
    - name: string
    - metadata: string
    - contributors: mapping(address => uint256)
    - creator: address
    - goal: uint256
    - beneficiary: address
    - end_time: uint256
    - lock: bool
    - charityChain: address
    - total_benificiaries: uint256
    + ContributionReceived(fromAddress: address, amount: uint256) event
    + WithdrawlSent(amount: uint256) event
    + recieve() external payable
    + withdrawl() external
    + get_user_balance(_user: address) external view returns (uint256)
    + get_total_benificiaries() external view returns (uint256)
    + get_balance() external view returns (uint256)
    + get_user_balance() external view returns (uint256)
    + get_name() external view returns (string)
    + get_metadata() external view returns (string)
    + get_goal() external view returns (uint256)
    + get_beneficiary() external view returns (address)
    + get_creator() external view returns (address)
    + get_time_left() external view returns (uint256)
}

class CharityInfo {
    - charity: address
    - title: string
}

class UserContribution {
    - charity: address
    - amount: uint256
}

CharityChain --> Charity
Charity --> CharityInfo
CharityChain --> UserContribution

@enduml
