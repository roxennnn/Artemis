#!/bin/bash

# startmongo
echo "START mongod..."
sudo service mongod start

sudo service mongod status

echo "START truffle develop..."
cd blockchain/
truffle develop

# truffle migrate --reset --network development