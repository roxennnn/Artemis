// SPDX-License-Identifier: UNLICENSED ( to remove the warning )
pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

// Notes:
// Solidity triggers a require-type of exception:
// - when you call require with arguments that result in false.

contract ArtemisContract {

    address private owner = 0x55958fADDF67d6051FE7F5F9bfF015531C09d4eD; // in Truffle
    // address private owner = 0x849f9Bd5869E436688F3BaeAbB552B548aC091b2; // in Remix

    mapping (address => uint[79]) private userData;
    // 0:       existance
    // 1-9:     demographics    // 9 questions
    // 10-18:   experience      // 9 questions
    // 19-78:   skills          // 60 skills

    // msg.sender will be the person who's currently connecting with the contract.
    uint private usersNum = 0;

    address[] private addressesList;    // this is used ONLY to allow the owner to get all the user's data

    // Utility functions

    // check if the storage is empty
    function isEmpty() public view returns(bool) {
        return usersNum == 0;
    }
    // check if the address is the owner
    function isOwner(address addr) private view returns(bool) {
        return owner == addr;
    }
    // check if the address is already present in the mapping --> the first elemement in the array states if it exists or not
    function exists(uint[79] memory arr) private pure returns(bool) {
        if (arr[0] == 1) {
            return true;
        }
        return false;
    }


    ///////////////////////////
    //      OPERATIONS       //
    ///////////////////////////

    // Transactions:

    // Transaction: add (or update) demographic answers of userAddr; only the ownerAddr can perform this transaction
    function addDemographicsAnwsers(address userAddr, uint[9] memory answers) public {
        // Check if the sender of this transaction is the owner
        require(isOwner(msg.sender), "Permission Denied! Only the owner can perform this operation");

        // Check if the user already exists: else, we are adding it so we need to set the first index to 1
        if (!exists(userData[userAddr])) {
            userData[userAddr][0] = 1;
            usersNum++; // keeping track of the number of users
            addressesList.push(userAddr);
        }

        // Store answers
        for (uint i = 0; i < 9; i++) {
            userData[userAddr][i+1] = answers[i];
        }

    }

    // Transaction: add (or update) experience answers of userAddr; only the ownerAddr can perform this transaction
    function addExperienceAnwsers(address userAddr, uint[9] memory answers) public {
        // Check if the sender of this transaction is the owner
        require(isOwner(msg.sender), "Permission Denied! Only the owner can perform this operation");

        // Check if the user already exists: else, we are adding it so we need to set the first index to 1
        if (!exists(userData[userAddr])) {
            userData[userAddr][0] = 1;
            usersNum++; // keeping track of the number of users
            addressesList.push(userAddr);
        }

        // Store answers
        for (uint i = 0; i < 9; i++) {
            userData[userAddr][i+10] = answers[i];
        }
    }

    // Transaction: add (or update) skills answers of userAddr; only the ownerAddr can perform this transaction
    function addSkillsAnwsers(address userAddr, uint[60] memory answers) public {
        // Check if the sender of this transaction is the owner
        require(isOwner(msg.sender), "Permission Denied! Only the owner can perform this operation");

        // Check if the user already exists: else, we are adding it so we need to set the first index to 1
        if (!exists(userData[userAddr])) {
            userData[userAddr][0] = 1;
            usersNum++; // keeping track of the number of users
            addressesList.push(userAddr);
        }

        // Store answers
        for (uint i = 0; i < 60; i++) {
            userData[userAddr][i+19] = answers[i];
        }
    }

    // Transaction: add (or update) all the answers of userAddr; only the ownerAddr can perform this transaction
    function addUserData(address userAddr, uint[78] memory answers) public {
        // Check if the sender of this transaction is the owner
        require(isOwner(msg.sender), "Permission Denied! Only the owner can perform this operation");

        // Check if the user already exists: else, we are adding it so we need to set the first index to 1
        if (!exists(userData[userAddr])) {
            userData[userAddr][0] = 1;
            usersNum++; // keeping track of the number of users
            addressesList.push(userAddr);
        }

        // Store answers
        for (uint i = 0; i < 78; i++) {
            userData[userAddr][i+1] = answers[i];
        }
    }

    // Transaction: reset all the data from userAddr; only the ownerAddr can perform this transaction
    function resetUserData(address userAddr) public {
        // Check if the sender of this transaction is the owner
        require(isOwner(msg.sender), "Permission Denied! Only the owner can perform this operation");

        // This function should also remove the address from addressesList

        // Set all elements to 0
        for (uint i = 0; i < 79; i++) {
            userData[userAddr][i] = 0;
        }

        usersNum--;
    }


    // Calls:

    // Call: get the number of users saved into the storage
    function getUsersNum() public view returns(uint) {
        return usersNum;
    }

    // Call: get the user's answers to the demographic survey; user's data can be read only by the user itself
    function getDemographicsData() public view returns(uint[9] memory) {

        // Check if the address is stored in the map
        require(exists(userData[msg.sender]), "User does not exist...");

        // Else
        uint[9] memory returnArr;
        for (uint i = 1; i < 10; i++) {
            returnArr[i-1] = userData[msg.sender][i];
        }

        return returnArr;
    }

    // Call: get the user's answers to the experience survey; user's data can be read only by the user itself
    function getExperienceData() public view returns(uint[9] memory) {

        // Check if the address is stored in the map
        require(exists(userData[msg.sender]), "User does not exist...");

        // Else
        uint[9] memory returnArr;
        for (uint i = 10; i < 19; i++) {
            returnArr[i-10] = userData[msg.sender][i];
        }

        return returnArr;
    }

    // Call: get the user's answers to the skills survey; user's data can be read only by the user itself
    function getSkillsData() public view returns(uint[60] memory) {

        // Check if the address is stored in the map
        require(exists(userData[msg.sender]), "User does not exist...");

        // Else
        uint[60] memory returnArr;
        for (uint i = 19; i < 79; i++) {
            returnArr[i-19] = userData[msg.sender][i];
        }

        return returnArr;
    }

    // Call: get the user's data; user's data can be read only by the user itself
    function getUserData() public view returns(uint[79] memory) {

        // Check if the address is stored in the map
        require(exists(userData[msg.sender]), "User does not exist...");

        // Else
        return userData[msg.sender];
    }

    // Call: allows the owner to read off all the data stored
    // Maybe, in the future create a whitelist of organization addrs which can read off the stored data
    function getUsersData() public view returns(uint[79][] memory) {

       // Check if the sender of this call is the owner
        require(isOwner(msg.sender), "Permission Denied! Only the owner can perform this operation");

        uint[79][] memory ret = new uint[79][](usersNum);
        for (uint i = 0; i < usersNum; i++) {
            ret[i] = userData[addressesList[i]];
        }

        return ret;

    }

}