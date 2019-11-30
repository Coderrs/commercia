
def yaml_to_json(file="/bla/bla/file.yaml"):

# blockchain@hyperledger-fabric:~/hyperledger-fabric-network/network-profiles$ pwd
# /home/blockchain/hyperledger-fabric-network/network-profiles
#
#


from hfc.fabric import Client
import yaml 
file = "/home/blockchain/hyperledger-fabric-network/network-profiles/org1.network-profile.yaml" 
cli = Client(net_profile="test/fixtures/network.json")
/home/blockchain/hyperledger-fabric-network/network-profiles/org1.network-profile.yaml