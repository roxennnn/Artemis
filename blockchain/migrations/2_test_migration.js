const TestFormContract = artifacts.require("TestFormContract");

module.exports = function(deployer) {
  deployer.deploy(TestFormContract);
};
