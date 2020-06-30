// SPDX-License-Identifier: UNLICENSED ( to remove the warning )
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

// Notes:
// Solidity triggers a require-type of exception: 
// - when you call require with arguments that result in false.

contract FormContractWithOwner {
    struct FormData {
        string name;
        string email;
    }

    address private owner = 0x55958fADDF67d6051FE7F5F9bfF015531C09d4eD;
    //address private owner = 0xA2696205AF6963343dBb30dc04ED55B0de2D0dd8;
    mapping (address => FormData) private testStorage;
    // msg.sender will be the person who's currently connecting with the contract.
    uint private usersNum = 0;

    address[] private addressesList;    // not sure about it

    // Utility functions

    // check if the storage is empty
    function isEmpty() public view returns(bool) {
        return usersNum == 0;
    }
    // check if the address is the owner
    function isOwner(address addr) private view returns(bool) {
        return owner == addr;
    }
    // check if the FormData arg is default (not initialized)
    function isDefault(FormData memory formData) private pure returns(bool) {
        if (keccak256(abi.encodePacked(formData.name)) == keccak256(abi.encodePacked("")) &&
            keccak256(abi.encodePacked(formData.email)) == keccak256(abi.encodePacked(""))) {
            return true;
        }
        return false; // no default value
    }

    // Operations

    // Transaction: add a new user data into the storage
    function addNewUser(string memory name, string memory email, address userAddr) public {

        // Check if the sender of this transaction is the owner
        require(isOwner(msg.sender), "Permission Denied! Only the owner can perform this operation");

        // Check if that address already in the map
        require(isDefault(testStorage[userAddr]), "User already exists..."); // not default == empty

        // Else
        FormData memory newUser = FormData(name, email);
        testStorage[userAddr] = newUser;
        addressesList.push(userAddr);
        usersNum++;
    }

    // Call: get the number of users saved into the storage
    function getUsersNum() public view returns(uint) {
        return usersNum;
    }

    // Call: get the user's data; user's data can be read only by the user itself
    function getUserData() public view returns(FormData memory) {

        // Check if the address is stored in the map
        require(!isDefault(testStorage[msg.sender]), "User does not exist...");

        // Else
        return testStorage[msg.sender];
    }

    // Call: allows the owner to read off all the data stored
    // Maybe, in the future create a whitelist of organization addrs which can read off the stored data
    function getUsersData() public view returns(FormData[] memory) {

        // Check if the sender of this call is the owner
        require(isOwner(msg.sender), "Permission Denied! Only the owner can perform this operation");

        FormData[] memory ret = new FormData[](usersNum);
        for (uint i = 0; i < usersNum; i++) {
            ret[i] = testStorage[addressesList[i]];
        }

        return ret;

    }

}