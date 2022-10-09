### *** ATTENTION: THIS PROJECT HAS BEEN DEVELOPED TO TACKLE THE BLOCKCHANGEL CHALLENGE AND ITS DEVELOPMENT IS CURRENTLY PAUSED! ***

<div style="text-align: center">
  <image src="media/logo.png" style="width: 500px;" />
</div>

**Artemis** is an online platform that helps uneducated or poorly educated women find a job that matches their skills. The website uses ESCO (European Classification of Skills Knowledge and Occupations, available [here](https://ec.europa.eu/esco/portal/home)) to create a match between the women’s skills and the most suitable occupations they can apply for in the formal labour market.

_The purpose of this platform is to fight domestic violence against women in Latin America and the Caribbean_ through two mechanisms:
1. Facilitate women’s employment in the formal market, so that they can have access to a stable income that gives them the possibility to exit a violent relationship, without fearing for their children’s and their own economic sustenance. 
2. Provide real data on domestic violence and employment to organisations, policymakers and researchers involved in the issue. This allows evidence-based policies and projects to approach the problem from a systemic perspective.

The web application has two main sections, one for the women and one for the organisations. In the first section every woman can fill in three surveys: demographic, skills, and domestic situation experienced. The information collected from the skills survey is then elaborated and through the use of ESCO the profile of the woman is matched with the 5 jobs that fit her the most, according to the skills she has. The information is anonymously stored in Ethereum using the Blockchain technology to ensure the privacy and safety of the respondents. Once they have completed the surveys, the users can visualise their skills profiles and the occupations they have been matched with.
The second section is designed for the organisations to download the datasets containing the information collected through the women’s survey. The data is completely anonymous, and it is impossible to associate it with the respondents.

Currently, the web application is in three languages (Spanish, English, and Portuguese) and it is completely free.

# Video Presentantion and Demo

<div style="text-align: center;">
 <a href="http://www.youtube.com/watch?v=UznF15Q91OY">
  <image src="media/artemisthumbnail.png" />
 </a>
</div>

# Development environment setup

In order to run the development environment, the followings are needed:
  * [Node.js](https://nodejs.org/en/)
  * [mongoDB](https://www.mongodb.com/)
  * [React](https://reactjs.org/)
  * [TRUFFLE](https://www.trufflesuite.com/)

## Install package dependencies
At first, following command is needed to install all the package dependencies for the back-end:
```bash
  npm install
```
Then, the following two commands are needed to install all the package dependencies for the front-end:
```bash
  cd client/
  npm install
```

## mongoDB setup
At first, _mongoDB_ is needed to be started issuing the following command:
```bash
  mongod
```

Then, in order to import the dumped database containing all the occupations data, run:
```bash
  mongorestore
```

Now, _mongoDB_ is started and the database is populated.

## Blockchain setup
In order to start the blockchain development environment, the following commands are needed:
```bash
  cd blockchain/
  truffle develop
```

Then, on a new terminal and in the same directory, run the follwing command in order to compile and deploy the smart contract on the local blockchain:
```bash
  truffle migrate --reset --network development
```

## Start the full-stack project
Finally, on a new terminal run the following command to start both the back-end and the front-end:
```bash
  npm run dev
```
