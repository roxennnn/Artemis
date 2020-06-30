var TestContract = artifacts.require("TestFormContract");
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));


// getGasPrice returns the gas price on the current network
TestContract.web3.eth.getGasPrice(function(error, result){ 
    var gasPrice = Number(result);
    console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"

    // Get Contract instance
    TestContract.deployed().then(function(instance) {

        // Use the keyword 'estimateGas' after the function name to get the gas estimation for this particular function 
        return instance.giveAwayDividend.estimateGas(1);

    }).then(function(result) {
        var gas = Number(result);

        console.log("gas estimation = " + gas + " units");
        console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
        console.log("gas cost estimation = " + TestContract.web3.fromWei((gas * gasPrice), 'ether') + " ether");
    });
});