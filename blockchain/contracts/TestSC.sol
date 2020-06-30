// SPDX-License-Identifier: UNLICENSED ( to remove the warning )
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract TestFormContract {
    struct FormData {
        string name;
        string email;
    }

    mapping (address => FormData) private testStorage;
    // msg.sender will be the person who currently connecting with the contract.
    uint private usersNum = 0;

    function isEmpty() public view returns(bool) {
        return usersNum == 0;
    }

    function isDefault(FormData memory formData) private pure returns(bool) {
        if (keccak256(abi.encodePacked(formData.name)) == keccak256(abi.encodePacked("")) &&
            keccak256(abi.encodePacked(formData.email)) == keccak256(abi.encodePacked(""))) {
            return true;
        }
        return false; // no default value
    }

    // Transaction
    function addNewUser(string memory name, string memory email) public {
        // Check if that address already in the map
        require(isDefault(testStorage[msg.sender]), "User already exists..."); // not default == empty

        // Else
        FormData memory newUser = FormData(name, email);
        testStorage[msg.sender] = newUser;
        usersNum++;
    }

    function getUsersNum() public view returns(uint) {
        return usersNum;
    }

    function getUserData() public view returns(FormData memory) {
        // Check if the address is stored in the map
        require(!isDefault(testStorage[msg.sender]), "User does not exist...");

        // Else
        return testStorage[msg.sender];
    }

}