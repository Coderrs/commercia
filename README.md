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
  2. Perform a `docker prune all` for a docker container/chaincode-image/volume/hurly created network
  3. 

 

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

