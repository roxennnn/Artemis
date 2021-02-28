const ArtemisContract = artifacts.require("ArtemisContract");

module.exports = function(deployer) {
  deployer.deploy(ArtemisContract);
};
