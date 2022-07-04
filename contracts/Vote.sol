// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Vote {
    
    address private _owner;
    mapping(address => mapping(string => VotingData)) _voting;
    mapping(address => string[]) userVotings;
    
    constructor() {
        _owner = _msgSender();
    }
    
    modifier OnlyOwner() {
        require(
            msg.sender == _owner,
            "This function is restricted to the contract's owner"
        );
         _;
    }
    
    struct VotingData {
        string[] variantsForEachVoting;
        mapping(string => address[]) voters;  
        mapping(address => bool) isVoted;
        address[] allowedUsers;  
        uint[] result;
        mapping(address => bool) allowedUsersMapping;
    }
    
    function _createVoting(string memory _votingName, string[] memory variants, address[] memory _allowedUsers) external payable{
        require(  _exists(_votingName, userVotings[msg.sender]) == false, "Name is taken" );
        for (uint i = 0; i<variants.length; i++){
             _voting[msg.sender][_votingName].variantsForEachVoting.push(variants[i]);
        }
        userVotings[msg.sender].push(_votingName);
        
        if (_allowedUsers.length != 0) {
            _setAllowedUsers(msg.sender, _votingName, _allowedUsers);
        }
    }
    
    function _setAllowedUsers(address _sender, string memory _votingName, address[] memory _allowedUsers) internal {
        for (uint i=0; i<_allowedUsers.length;i++){
            require(_voting[_sender][_votingName].allowedUsersMapping[msg.sender] == false, "User is already allowed");
            
            _voting[_sender][_votingName].allowedUsersMapping[_allowedUsers[i]] = true;
            _voting[_sender][_votingName].allowedUsers.push(_allowedUsers[i]);
        }
    }
    
    function _vote(address votingOwner, string memory _votingName, string memory _index) external {
        require(votingOwner != msg.sender, 'Not for owner');
        require(_voting[votingOwner][_votingName].isVoted[msg.sender] == false, "Can vote only 1 time");
        require(_voting[votingOwner][_votingName].allowedUsers.length == 0 ||
        
        _voting[votingOwner][_votingName].allowedUsersMapping[msg.sender] == true, "You have no permission");
        _voting[votingOwner][_votingName].isVoted[msg.sender] = true;
        _voting[votingOwner][_votingName].voters[_index].push(msg.sender);
    }
    
    
    function getUserVotings(address ownerAddress) public view returns(string[] memory) {
        return userVotings[ownerAddress];
    }

    function getAllowedUsers(address ownerAddress, string memory votingName) view public returns( address[] memory) {
        return _voting[ownerAddress][votingName].allowedUsers;
    }
    
    function getVoters(address ownerAddress, string memory votingName, string memory index) view public returns(address[] memory) {
        return  _voting[ownerAddress][votingName].voters[index];
    }
    
    function getVotes(address ownerAddress, string memory votingName) public returns(uint[] memory) {
        uint varsCount =  _voting[ownerAddress][votingName].variantsForEachVoting.length;
        for (uint i=0;i<varsCount;i++) {
            _voting[ownerAddress][votingName].result.push(_voting[ownerAddress][votingName].voters[_voting[ownerAddress][votingName].variantsForEachVoting[i]].length);
        }
        uint[] memory _result = _voting[ownerAddress][votingName].result;
        delete _voting[ownerAddress][votingName].result;
        return _result; 
    }
    
    function getActive(address ownerAddress) public view returns(string[] memory){
        return userVotings[ownerAddress];
    }
    
    function getVariants(address ownerAddress, string memory votingName) public view returns(string[] memory) {
        return  _voting[ownerAddress][votingName].variantsForEachVoting;
    }

    function endVoting(string memory votingName) public returns(uint[] memory) {
        require(_voting[msg.sender][votingName].variantsForEachVoting.length != 0);
        uint[] memory _result = getVotes(msg.sender, votingName);
        delete _voting[msg.sender][votingName];
        for (uint i = 0; i < userVotings[msg.sender].length; i++){
            if (keccak256(abi.encodePacked(votingName)) == keccak256(abi.encodePacked(userVotings[msg.sender][i]))) {
                delete userVotings[msg.sender][i];
                break;
            }
        }

        return _result;

    }

    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }
    
    function _exists( string memory element, string[] memory array ) internal pure returns(bool) {
        for (uint i=0; i < array.length; i++) {
            if (keccak256(abi.encodePacked((element))) == keccak256(abi.encodePacked((array[i])))) {
                return true;
            }     
        }
        
        return false; 
    }
}
