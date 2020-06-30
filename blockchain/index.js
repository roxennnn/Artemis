import Web3 from 'web3';
import TestFormContract from '../build/contracts/TestSC.json';

let web3;
let testFormContract;

const initWeb3 = () => {
  return new Promise((resolve, reject) => {
    if(typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      window.ethereum.enable()
        .then(() => {
          resolve(
            new Web3(window.ethereum)
          );
        })
        .catch(e => {
          reject(e);
        });
      return;
    }
    if(typeof window.web3 !== 'undefined') {
      return resolve(
        new Web3(window.web3.currentProvider)
      );
    }
    resolve(new Web3('http://localhost:9545'));
  });
};

const initContract = () => {
  const deploymentKey = Object.keys(TestFormContract.networks)[0];
  return new web3.eth.Contract(
    TestFormContract.abi, 
    TestFormContract
      .networks[deploymentKey]
      .address
  );
};

const initApp = () => {
  const $addData = document.getElementById('addData');
  const $data = document.getElementById('data');
  let accounts = [];

  web3.eth.getAccounts()
  .then(_accounts => {
    accounts = _accounts;
    return testFormContract.methods
      .getAll()
      .call();
  })
  .then(result => {
    $data.innerHTML = result.join(', ');
  });

  $addData.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = e.target.elements[0].value;
    testFormContract.methods
      .add(data)
      .send({from: accounts[0]})
      .then(result => {
        return testFormContract.methods
          .getAll()
          .call();
      })
      .then(result => {
        $data.innerHTML = result.join(', ');
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initWeb3()
    .then(_web3 => {
      web3 = _web3;
      testFormContract = initContract();
      initApp(); 
    })
    .catch(e => console.log(e.message));
});
