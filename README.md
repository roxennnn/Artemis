# A R T E M I S

_Here goes the description_

_Here, embed the video_

## Setup for the development environment

In order to run the development environment, the following are needed:
  * [Node.js](https://nodejs.org/en/)
  * [mongoDB](https://www.mongodb.com/)
  * [React](https://reactjs.org/)
  * [TRUFFLE](https://www.trufflesuite.com/)

### Setup the environment
#### Install package dependencies
At first, following command is needed to install all the package dependencies for the back-end:
```bash
  npm install
```
Then, the following two commands are needed to install all the package dependencies for the front-end:
```bash
  cd client/
  npm install
```

#### mongoDB setup
At first, _mongoDB_ is needed to be started issuing the following command:
```bash
  mongod
```

Then, in order to import the dumped database containing all the occupations data, run:
```bash
  mongorestore
```

Now, _mongoDB_ is started and the database is populated.

#### Blockchain setup
In order to start the blockchain development environment, the following commands are needed:
```bash
  cd blockchain/
  truffle develop
```

Then, on a new terminal and in the same directory, run the follwing command in order to compile and deploy the smart contract on the local blockchain:
```bash
  truffle migrate --reset --network development
```

#### Start the full-stack project
Finally, on a new terminal run the following command to start both the back-end and the front-end:
```bash
  npm run dev
```

## About us

## License