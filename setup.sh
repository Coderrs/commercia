echo "npx lerna run start --scope server --stream & " | bash - 
cd react-app-agreement/react-ui-agreement && echo "yarn start &" | bash - 






###############################################################################################

##! /bin/bash
#
#sudo apt update -y 
#sudo apt install apt-transport-https ca-certificates curl software-properties-common git -y
#curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
#sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
#apt-cache policy docker-ce
#sudo apt install docker-ce -y
#
## check if docker version is Docker version 17.06.2-ce or greater is required
#sudo systemctl restart docker
#sudo systemctl enable docker
#sudo usermod -aG docker ${USER}
#
##-----------------------
#sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
#docker-compose --version
#sudo chmod +x /usr/local/bin/docker-compose
#sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
#
#
## GO version required Go version 1.12.x is required and add go path
#GOFILETAR="go1.12.5.linux-amd64.tar.gz"
#wget https://dl.google.com/go/${GOFILETAR}
#tar -xzvf ${GOFILETAR}
#sudo mv go/ /usr/local
#rm ${GOFILETAR}
#echo "export GOPATH=/usr/local/go" >> ~/.bashrc
#echo "export PATH=$PATH:$GOPATH/bin" >> ~/.bashrc
## GO
#
#source ~/.bashrc
#
## Fabric leveraging the Hyperledger Fabric SDK for Node.js, version 8 is supported from 8.9.4 and higher. Node.js version 10 is supported from 10.15.3 and higher.
#curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh  | bash - 
#source ~/.profile
#nvm install 8.11.4
## should output v8.11.4
#node -v
# nvm alias default 8.11.4
# start the react app and the hyperledger client
apt install build-essential
npm install -g node-gyp
npm i -g @worldsibu/hurley
npm i -g @worldsibu/convector-cli

# if node fails try rm -rf  $HOME/.node-gyp

npm i 
cd packages 
npm i 
cd ../react-app-agreement

npm run env:restart

npm run cc:start


echo "npx lerna run start --scope server --stream & " | bash - 
cd react-app-agreement/react-ui-agreement && echo "yarn start &" | bash - 

# https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198
sudo apt-get install postgresql-client
docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres

# 
get docker 
https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198
# create the db per the required config for hyperledger explorer
https://www.guru99.com/postgresql-create-database.html

# psql -h localhost -U postgres -d ""
	export DATABASE_HOST=127.0.0.1
	export DATABASE_PORT=5432
	export DATABASE_DATABASE=fabricexplorer
	export DATABASE_USERNAME=postgres
	export DATABASE_PASSWD=docker

# https://tecadmin.net/install-postgresql-server-on-ubuntu/

	export DATABASE_HOST=127.0.0.1
	export DATABASE_PORT=5432
	export DATABASE_DATABASE=fabricexplorer
	export DATABASE_USERNAME=hppoc
	export DATABASE_PASSWD=pass12345
