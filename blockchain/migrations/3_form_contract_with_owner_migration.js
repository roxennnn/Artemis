const FormContractWithOwner = artifacts.require("FormContractWithOwner");

module.exports = function(deployer) {
  deployer.deploy(FormContractWithOwner);
};
