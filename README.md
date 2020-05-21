---
id: guides
title: Get Started
---

## :sparkler: Introduction

Founded as an open-source project in 2017, IoTeX envisions bringing together people, process, data and things with trust and free will to create new capabilities, richer experiences, and unprecedented economic opportunity. Our platform aims to be the global trust backbone for intelligently and efficiently connecting distinct parties, where IoTeX blockchain is the root of trust for this open platform. 

Over the past 2+ years, the IoTeX blockchain was built from scratch with our mission in mind. What started as a few lines of code has now blossomed into one of the most secure, performant, and decentralized blockchains in the world. IoTeX blockchain is the leading scalable and extensible blockchain with several innovative technologies in-house, including the blockchains-in-blockchain architecture for heterogeneous computing, fast and robust Roll-DPoS consensus scheme, and plug-in-play sub-protocols. More details can be found [here](https://www.iotex.io/research-paper). 

IoTeX core team is continuously working hard to bring the community more cool features.


### The Architecture
IoTeX blockchain consists of the four-layered components:
- Networking layer enables the peer-to-peer communication between IoTex nodes, and provide blockchain services (through [grpc](https://grpc.io/)) to other applications and users
- Consensus layer runs Roll-DPoS to select the active block producers among a pool of block producer candidates (who are elected via staking and voting), using a decentralized randomized algorithm (DKG + BLS).
- The state transition layer is composed of five subprotocols and is responsible for transiting the states of the blockchain from one to the other.
- The programing layer implements the business logic for state transition. Currently, it supports Ethereum virtual machine (EVM) with smart contracts written in Solidity. Developers could seamlessly port existing DApps onto it.

![IoTeX Blockchain Architecture](https://cdn-images-1.medium.com/max/2000/0*cPrsvVa1wIE0cqnS)


### Sub-Protocols and Actions

The state transition layer of the chain is flexible enough that any subprotocol can be plugged in without hustling.

- Account subprotocol provides the functionality for bookkeeping balances of accounts living on this blockchain.
- Execution subprotocol manages the execution of smart contracts and roll forward/back of the states.
- Poll subprotocol syncs with staking subprotocol and instructs the delegates promotion/demotion on the chain.
- Rewarding subprotocol is responsible for distributing block rewards and epoch rewards to eligible delegates and candidates.
- Staking subprotocol manages voting and candidate registration services using bucket data units.
- Multichain subprotocol manages sub-chain management and cross-chain communication which is a work-in-progress.

In the IoTeX network, transactions (the atomic operation unit to interact with the blockchain data) are referred to as "actions", and there are six types of actions corresponding to the six subprotocols as described. More information can be found [here](https://github.com/iotexproject/iotex-proto/blob/master/proto/types/action.proto).

## :runner: Build and Run

### Standalone Mode
The simplest way to get started is to run it in stand-alone mode for demonstration and testing purposes. "Stand-alone" indicates a single node comprises the entire blockchain by itself, which generates a new block, validates the block, and adds the block to the blockchain. This simple mode allows user to quickly launch and test a blockchain with a single computer/node, without requiring much hardware resources.

#### From the Source

1. setup golang environment, e.g., [on Linux](https://medium.com/@RidhamTarpara/install-go-1-11-on-ubuntu-18-04-16-04-lts-8c098c503c5f), [on MacOS](https://medium.com/golang-learn/quick-go-setup-guide-on-mac-os-x-956b327222b8)
2. `git clone git@github.com:iotexproject/iotex-core.git`
3. `make run`

#### Use Docker Image

1. Install docker on your host machine at https://docs.docker.com/install/. Once docker is properly installed and started, download the IoTeX docker image: `docker pull iotex/iotex-core:latest`

2. Download the config file standalone-config.yaml from [iotex-core](https://github.com/iotexproject/iotex-core/blob/master/config/standalone-config.yaml). Open the file and change certain parameters of the stand-alone node as you need. 

3. `sudo docker run -d -p 30100:14004 --mount type=bind,source=$PWD/standalone-config.yaml,target=/etc/iotex/config_local_delegate.yaml iotex/iotex-core:latest iotex-server -config-path=/etc/iotex/config_local_delegate.yaml`

### Run A Full Node on Testnet/Mainnet

Please follow instructions [here](https://github.com/iotexproject/iotex-bootstrap/blob/master/README.md) to run a full node on the testnet or mainnet. 

## :globe_with_meridians: IoTeX Ecosystem
IoTeX Ecosystem consists of an increasing number of services and applications, built around IoTeX blockchain.

### Explorer
IoTeX users can easily track their transactions using the explorer.
- [Source Code](https://github.com/iotexproject/iotex-explorer)
- [Mainnnet](https://iotexscan.io)
- [Testnet](https://testnet.iotexscan.io)

### Wallet
[ioPay](https://iopay.iotex.io/) is the wallet built by core-dev for our users to manage their digital assets. 

### Member Portal
[Member portal](https://member.iotex.io/) is the portal for staking of IOTX, voting for delegates, and governance of the operation of IoTeX blockchain. You will need to install ioPay to use it.

### Hermes
[Hermes](https://hermes.to/) is an [open-source](https://github.com/iotexproject/web-hermes) staking/voting rewards manager. The IoTeX Network utilizes Roll-DPoS consensus, where community-elected delegates manage consensus on behalf of the network. Delegates receive IOTX rewards for producing blocks, which are usually shared with their voters. With Hermes, delegates can auto-distribute rewards every day, while their voters can easily track their reward payments. Delegates that currently use Hermes have a ‘Hermes’ badge on the member portal.

### Analytics
IoTeX analytics is an [open-source](https://github.com/iotexproject/iotex-analytics) microservice that analyzes data from IoTeX blockchain to better serve applications. Currently, analytics registers five index protocols: accounts, blocks, actions, rewards, and votings, where each protocol keeps track of its relevant data and writes it into the corresponding database tables.

### DApps
Some of the DApps built on top of IoTeX can be found [here](https://iotex.io/developers/). 

If you are interested in developing DApps on top of IoTeX blockchain, [codelab](http://codelabs.iotex.io/) is the best starting point for developers!

## :woman: Chat With Us

**We are radically open-minded and value open-mindedness and transparency.**

- If you found bugs and places that need to be improved, please file issues under https://github.com/iotexproject/iotex-core/issues for the open-source community to investigate.

- If you have ideas/proposals to make IoTeX better, please do not hesitate to let us know through [Halo Program](http://iotex.io/halo)

- If you have feedback/suggestion, please do not hesitate to contact us via [forum](https://community.iotex.io/c/research-development/protocol) or [email](support@iotex.io). 
