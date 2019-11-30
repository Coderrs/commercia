# Very First Steps 

#######
## Setup Ubuntu 
### Support tools for development 
  - virtual box
  - vscode ( Remote Explorer plugin to login to VirtualMachine)
https://docs.covalentx.com/article/120-install-on-ubuntu

## How is this project created 
```
npm i -g @worldsibu/convector-cli
conv new sample1-agreement -c agreement
cd sample1-agreement
ls -ltra 
```

### It will look like below
```
blockchain@hyperledger-fabric:~/sample1-agreement$ ls -ltra 
total 424
drwxr-xr-x  20 blockchain blockchain   4096 Nov 29 22:48 ..
-rw-rw-r--   1 blockchain blockchain    352 Nov 29 22:53 tsconfig.json
-rw-rw-r--   1 blockchain blockchain    128 Nov 29 22:53 lerna.json
-rw-rw-r--   1 blockchain blockchain    996 Nov 29 22:53 .gitignore
-rw-rw-r--   1 blockchain blockchain    328 Nov 29 22:53 .editorconfig
-rw-rw-r--   1 blockchain blockchain    110 Nov 29 22:53 .convector
drwxrwxr-x   3 blockchain blockchain   4096 Nov 29 22:53 packages
-rw-rw-r--   1 blockchain blockchain    202 Nov 29 22:53 agreement.config.json
-rw-rw-r--   1 blockchain blockchain   1556 Nov 29 23:11 package.json
drwxrwxr-x   9 blockchain blockchain   4096 Nov 29 23:20 .git
-rw-rw-r--   1 blockchain blockchain 357716 Nov 29 23:21 package-lock.json
drwxrwxr-x   5 blockchain blockchain   4096 Nov 29 23:21 .
-rw-rw-r--   1 blockchain blockchain   4932 Nov 29 23:23 README.md
```

### 






## Test this project Block Chain
- Download this repo
- cd to folder
- npm i
- 'hurl new' or 'npm run env:restart'
- Search a folder (ignore for a completely new setup) 
  1. if ~/hyperledger-fabric-network exists
  2. Perform a `docker prune all` for a docker container or chaincode-image or volume by hurl created network
  
  ```
  blockchain@hyperledger-fabric:~/sample1-agreement$ docker stop $(docker ps -a | grep -v CONTAINER | awk '{print $1}')
    450198cdb73d
    68bf26b2864a
    e4ce11986459
    afa1e98c2aed
    333312f98fe3
    ddfae015e18a
    01a87ce99195
    b380786d2e51
    8a9ac38df347
    a64755b36adf
    blockchain@hyperledger-fabric:~/sample1-agreement$ docker rm $(docker ps -a | grep -v CONTAINER | awk '{print $1}')
    450198cdb73d
    68bf26b2864a
    e4ce11986459
    afa1e98c2aed
    333312f98fe3
    ddfae015e18a
    01a87ce99195
    b380786d2e51
    8a9ac38df347
    a64755b36adf
    blockchain@hyperledger-fabric:~/sample1-agreement$ rm -rf ../
    .bash_history                         .gnupg/                               sample1-agreement/
    .bash_logout                          hyperledger-fabric-network/           .ssh/
    .bashrc                               install_nvm.sh                        supplychain/
    .cache/                               myfirstproject/                       .viminfo
    car/                                  .node-gyp/                            .vscode-server/
    commercia/                            .npm/                                 .wget-hsts
    .config/                              .npmrc                                .yarn/
    convector-example-people-attributes/  .nvm/                                 .yarnrc
    convector-example-supplychain-master/ .pm2/                                 
    .gitconfig                            .profile                              
    blockchain@hyperledger-fabric:~/sample1-agreement$ rm -rf ../hyperledger-fabric-network/
    blockchain@hyperledger-fabric:~/sample1-agreement$ docker ps 
    CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
    blockchain@hyperledger-fabric:~/sample1-agreement$ docker network prune 
    WARNING! This will remove all networks not used by at least one container.
    Are you sure you want to continue? [y/N] y
    Deleted Networks:
    net_hurley_dev_net

    blockchain@hyperledger-fabric:~/sample1-agreement$ docker volume prune 
    WARNING! This will remove all local volumes not used by at least one container.
    Are you sure you want to continue? [y/N] y
    Deleted Volumes:
    net_shared
    ab14e077022cef993d86d779e77b989a527e1b94026e2914bfe5c3cb3b21666b
    874d8657a3397654064b3580e1d357c1e70aba92b158934c0cee873718161499

    Total reclaimed space: 267.2kB
    blockchain@hyperledger-fabric:~/sample1-agreement$ docker image prune 
    WARNING! This will remove all dangling images.
    Are you sure you want to continue? [y/N] y
    Total reclaimed space: 0B
  ```
  3. npm run cc:restart
  4. export chaincode="agreement" ; npm run cc:start -- ${chaincode}
  5. export chaincode="agreement" ; npm run cc:upgrade -- ${chaincode} 1.1.2
    ```
    blockchain@hyperledger-fabric:~/sample1-agreement$ export chaincode="agreement" ; npm run cc:upgrade -- ${chaincode} 1.1.2

    > sample1-agreement@0.1.0 cc:upgrade /home/blockchain/sample1-agreement
    > f() { npm run cc:package -- $1; hurl upgrade ${3:-$1} node $2  -P ./chaincode-$1; }; f "agreement" "1.1.2"


    > sample1-agreement@0.1.0 cc:package /home/blockchain/sample1-agreement
    > f() { npm run lerna:build; chaincode-manager --update --config ./$1.config.json --output ./chaincode-$1 package; }; f "agreement"


    > sample1-agreement@0.1.0 lerna:build /home/blockchain/sample1-agreement
    > lerna run build

    lerna notice cli v3.13.4
    lerna info Executing command in 1 package: "npm run build"
    lerna info run Ran npm script 'build' in 'agreement-cc' in 2.6s:

    > agreement-cc@0.1.0 build /home/blockchain/sample1-agreement/packages/agreement-cc
    > npm run clean && tsc


    > agreement-cc@0.1.0 clean /home/blockchain/sample1-agreement/packages/agreement-cc
    > rimraf dist client

    lerna success run Ran npm script 'build' in 1 package in 2.6s:
    lerna success - agreement-cc
    Installing Chaincode agreement version 1.1.2 at org1
    2019-11-30 00:02:45.512 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
    2019-11-30 00:02:45.513 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
    2019-11-30 00:02:45.541 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" > 
    Installed Chaincode agreement version 1.1.2  at org1
    Installing Chaincode agreement version 1.1.2 at org2
    2019-11-30 00:02:45.598 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
    2019-11-30 00:02:45.598 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
    2019-11-30 00:02:45.616 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" > 
    Installed Chaincode agreement version 1.1.2  at org2
    Upgrading Chaincode agreement version 1.1.2 at org1 for channel ch1
    It may take a few minutes depending on the chaincode dependencies
    2019-11-30 00:02:55.683 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
    2019-11-30 00:02:55.684 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
    Upgraded Chaincode at org1
    blockchain@hyperledger-fabric:
    ```
  6. hurl invoke agreement agreement_create '{"id":"1", "name": "example", "created": 1000, "modified": 10000}'
    ```
    blockchain@hyperledger-fabric:~/sample1-agreement$ hurl invoke agreement agreement_create '{"id":"1", "name": "example", "created": 1000, "modified": 10000}'
    [hurley] - {"id":"1", "name": "example", "created": 1000, "modified": 10000}
    [hurley] - Sending transaction as user1 in org org1...
    [hurley] - Transaction sent! VALID  SUCCESS 6b05efe7779d51caa0829d15d42229e76962fc0170a6b32c4d28af1399a07eed
    [hurley] - Result: {"type":"Buffer","data":[]}
    Cleaning up event hubs
    ```
  7. Use https://github.com/worldsibu/convector-rest-api for api.json
  8. npm i -g @worldsibu/conv-rest-api
  9. create a api.json file # if you do any code change to model and controller . Just re-run step 10
  10. conv-rest-api generate api -c agreement -f ./agreement.config.json
  ```
  blockchain@hyperledger-fabric:~/sample1-agreement$ conv-rest-api generate api -c agreement -f ./agreement.config.json 
  [conv-rest-api] Removing previously generated app (packages/server)
  [conv-rest-api] Generating stub folder 
  [conv-rest-api] Exiting packages folder...
  /home/blockchain/sample1-agreement
  [conv-rest-api] Compiling new app...
  [conv-rest-api] Bootstrapping...
  [conv-rest-api] Adding chaincode(s)...
  ```
  11. npm install -g generator-express-no-stress-typescript
  12. 
  ```
    # Compile everything
    [npx] lerna bootstrap
  ```
  13. Update the import in file /home/blockchain/sample1-agreement/packages/server/src/convector.ts
    ```
    import { AgreementController } from '../../agreement-cc'; ## the ../../ was missing 
    ``` 
  14. blockchain@hyperledger-fabric:~/sample1-agreement/packages/server$ npx lerna run compile
  ```
  blockchain@hyperledger-fabric:~/sample1-agreement$ npx lerna run compile --scope agreement-app
  lerna notice cli v3.13.4
  lerna info filter [ 'agreement-app' ]
  lerna ERR! EFILTER No packages remain after filtering [ 'agreement-app' ]
  blockchain@hyperledger-fabric:~/sample1-agreement$ npx lerna run compile --scope agreement-cc
  lerna notice cli v3.13.4
  lerna info filter [ 'agreement-cc' ]
  lerna success run No packages found with the lifecycle script 'compile'
  blockchain@hyperledger-fabric:~/sample1-agreement$ npx lerna run compile --scope server
  lerna notice cli v3.13.4
  lerna info filter [ 'server' ]
  lerna success run No packages found with the lifecycle script 'compile'
  blockchain@hyperledger-fabric:~/sample1-agreement$ ls 
  agreement.config.json  chaincode-agreement  node_modules  package-lock.json  pysdk-client  tsconfig.json
  api.json               lerna.json           package.json  packages           README.md
  blockchain@hyperledger-fabric:~/sample1-agreement$ npx lerna run compile --scope chaincode-agreement
  lerna notice cli v3.13.4
  lerna info filter [ 'chaincode-agreement' ]
  lerna ERR! EFILTER No packages remain after filtering [ 'chaincode-agreement' ]
  blockchain@hyperledger-fabric:~/sample1-agreement$ npx lerna run compile --scope package
  package.json       package-lock.json  packages/          
  blockchain@hyperledger-fabric:~/sample1-agreement$ npx lerna run compile --scope package/
  lerna notice cli v3.13.4
  lerna info filter [ 'package/' ]
  lerna ERR! EFILTER No packages remain after filtering [ 'package/' ]
  blockchain@hyperledger-fabric:~/sample1-agreement$ npx lerna run compile --scope ^C
  blockchain@hyperledger-fabric:~/sample1-agreement$ cd package
  bash: cd: package: No such file or directory
  blockchain@hyperledger-fabric:~/sample1-agreement$ cd package^C
  blockchain@hyperledger-fabric:~/sample1-agreement$ ls 
  agreement.config.json  chaincode-agreement  node_modules  package-lock.json  pysdk-client  tsconfig.json
  api.json               lerna.json           package.json  packages           README.md
  blockchain@hyperledger-fabric:~/sample1-agreement$ cd packages/
  blockchain@hyperledger-fabric:~/sample1-agreement/packages$ ls
  agreement-cc  log  server
  blockchain@hyperledger-fabric:~/sample1-agreement/packages$ npx lerna run compile --scope agreement-cc
  lerna notice cli v3.13.4
  lerna info filter [ 'agreement-cc' ]
  lerna success run No packages found with the lifecycle script 'compile'
  blockchain@hyperledger-fabric:~/sample1-agreement/packages$ npx lerna run compile --scope agreement
  lerna notice cli v3.13.4
  lerna info filter [ 'agreement' ]
  lerna ERR! EFILTER No packages remain after filtering [ 'agreement' ]
  blockchain@hyperledger-fabric:~/sample1-agreement/packages$ npx lerna run compile --scope server
  lerna notice cli v3.13.4
  lerna info filter [ 'server' ]
  lerna success run No packages found with the lifecycle script 'compile'
  blockchain@hyperledger-fabric:~/sample1-agreement/packages$ npx lerna run compile
  lerna notice cli v3.13.4
  lerna success run No packages found with the lifecycle script 'compile'
  blockchain@hyperledger-fabric:~/sample1-agreement/packages$ cd server/
  blockchain@hyperledger-fabric:~/sample1-agreement/packages/server$ npx lerna run compile
  npx: installed 698 in 37.275s
  info cli using local version of lerna
  lerna notice cli v3.13.4
  lerna success run No packages found with the lifecycle script 'compile'
  blockchain@hyperledger-fabric:~/sample1-agreement/packages/server$ npx lerna run compile --scope server
  npx: installed 698 in 34.524s
  info cli using local version of lerna
  lerna notice cli v3.13.4
  lerna info filter [ 'server' ]
  lerna success run No packages found with the lifecycle script 'compile'
  blockchain@hyperledger-fabric:~/sample1-agreement/packages/server$ npx lerna run compile --scope agreement-app --stream
  npx: installed 698 in 21.068s
  info cli using local version of lerna
  lerna notice cli v3.13.4
  lerna info filter [ 'agreement-app' ]
  lerna ERR! EFILTER No packages remain after filtering [ 'agreement-app' ]
  blockchain@hyperledger-fabric:~/sample1-agreement/packages/server$ npx lerna run compile --scope agreement --stream
  npx: installed 698 in 20.382s
  info cli using local version of lerna
  lerna notice cli v3.13.4
  lerna info filter [ 'agreement' ]
  lerna ERR! EFILTER No packages remain after filtering [ 'agreement' ]
  ```
  15.  
  ```
    # Start the server
    [npx] lerna run start --scope server --stream
  ```
  16. re-compile and start the server 
  ``` 
     export chaincode="agreement" ; npm run cc:upgrade -- ${chaincode} 1.1.3
  ```
  17. Keep changing the chain code and testing the new function(s) using hurl
  ```
    blockchain@hyperledger-fabric:~/sample1-agreement$ hurl invoke agreement agreement_getAllAgreements 
    [hurley] - Sending transaction as user1 in org org1...
    [hurley] - Transaction sent! VALID  SUCCESS 47ff015c9c3778630d1b00e649be8c7b5f705ada3523e7dedc7676b6e49c79a6
    [hurley] - Result: [{"_created":1000,"_id":"1","_modified":10000,"_name":"example","_type":"io.worldsibu.agreement"},{"_id":"2","_type":"io.worldsibu.agreement"},{"_id":"3","_type":"io.worldsibu.agreement"},{"_id":"4","_type":"io.worldsibu.agreement"},{"_id":"5","_type":"io.worldsibu.agreement"}]
    Cleaning up event hubs
    blockchain@hyperledger-fabric:~/sample1-agreement$ 
  ```
## References 
https://docs.covalentx.com/article/73-code-samples
https://hackernoon.com/before-you-quit-hyperledger-fabric-start-your-network-without-scripts-under-10-minutes-3xfza30cd
```
# Install a tool to bootstrap your project
npm i -g @worldsibu/convector-cli

# Create a new smart contract code project
conv new example -c mychaincode

# get to the project to see the source code
cd example

# Resolve dependencies
npm i

# Package the project
npm run cc:package -- example org1

# Start your blockchain network
hurl new

# Install the smart contract
hurl install example node -P ./chaincode-example

# Wait a few seconds

# Send the first transaction
hurl invoke example example_create '{"id":"1", "name": "example", "created": 1000, "modified": 10000}'
```

####### 



# sample1-agreement - agreement

This awesome project was created automatically with <a href="https://github.com/worldsibu/convector-cli" target="_blank">Convector CLI</a>.
By default new Convector projects locally include <a href="https://github.com/worldsibu/hurley">Hurley</a> to manage your development environment seamlessly, so you don't have to worry about setting up the network and hard ways to install  and upgrade your chaincodes.

## Start

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
npm run env:restart
# Install your smart contract
npm run cc:start -- agreement
# Make a testing call to create a record in the ledger
# Beware that the first call may fail with a timeout! Just happens the first time
hurl invoke agreement agreement_create "{\"name\":\"my first request\",\"id\":\"0001\",\"created\":0,\"modified\":0}"
```

## About Hurley

You may as well install **Hurley** globally for easier and more flexible management. 

`npm i -g @worldsibu/hurley`

Since with Hurley globally you have control over everything, some things that you can do, for example, is installing a Convector Smart Contract with a different name than the one you used for your project.

```
# Use the same package
# Install a new chaincode with the same source code but the name 'anothernameforyourcc'
hurl install anothernameforyourcc node
```

Other complex tasks you may need is installing to a different channel.

```
# Use the same package
# Be sure you started your environment with more than one channel running 'hurl new --channels 2'. Otherwise this will throw an error.
hurl install anothernameforyourcc node --channel ch2
```

---

If you don't want to, don't worries! This project works right away.

## Start - if you have Hurley globally

### Bring your project to life 

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
hurl new
```

###  Install and upgrade chaincodes

```
# Package your smart contract's code  - From the root of your project
npm run cc:package -- agreement org1
# Install to your blockchain - From the root of your project
hurl install agreement node -P ./chaincode-agreement
# Install in debug mode, this will run the chaincode server locally so you can debug
hurl install agreement node -P ./chaincode-agreement --debug

# Upgrade your existing chaincode - From the root of your project
hurl upgrade agreement node 1.2 -P ./chaincode-agreement
```

## Start - if you don't have Hurley globally

### Bring your project to life 

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
npm run env:restart
```

###  Install and upgrade chaincodes

```
# Install to your blockchain - From the root of your project
npm run cc:start -- agreement

# Upgrade your existing chaincode - From the root of your project
npm run cc:upgrade -- agreement 1.2
```

## Tests

```
npm run test
```

> Check all the information to work with Convector <a href="https://docs.covalentx.com/convector" target="_blank">in the DOCS site</a>.

## Collaborate to the Convector Suite projects

* <a href="https://community.covalentx.com" target="_blank">Discord chat with the community</a>
* <a href="https://github.com/worldsibu" target="_blank">Convector projects</a>



### 

