---
id: guides
title: Get Started
---

## :sparkler: Introduction

Founded as an open-source project in 2017, IoTeX envisions bringing together people, process, data and things with trust and free will to create new capabilities, richer experiences, and unprecedented economic opportunity. Our platform aims to be the global trust backbone for intelligently and efficiently connecting distinct parties, where IoTeX blockchain is the root of trust for this open platform.

Over the past 2+ years, the IoTeX blockchain was built from scratch with our mission in mind. What started as a few lines of code has now blossomed into one of the most secure, performant, and decentralized blockchains in the world. IoTeX blockchain is the leading scalable and extensible blockchain with several innovative technologies in-house, including the blockchains-in-blockchain architecture for heterogeneous computing, fast and robust Roll-DPoS consensus scheme, and plug-in-play sub-protocols. More details can be found [here](https://www.iotex.io/research-paper).

IoTeX core-dev is continuously working hard to bring the community more useful features.

### The Architecture

IoTeX blockchain consists of the four-layered components:

- **Networking Layer** enables the peer-to-peer communication between IoTeX nodes, and provide blockchain services (through [grpc](https://grpc.io/)) to applications
- **Consensus Layer** runs [Roll-DPoS](iotex.io/research) to select the active block producers among a pool of block producer candidates (who are elected via staking and voting), using a decentralized randomized algorithm (DKG + BLS).
- **State Transition Layer** is composed of five sub-protocols and is responsible for transiting the states of the blockchain based on actions.
- **Programing Layer** provides programmability to implement customized business logic for state transition. Currently, it supports Ethereum Virtual Machine (EVM) with smart contracts written in Solidity. Developers could seamlessly port existing DApps onto it. [Codelabs](http://codelabs.iotex.io/) is a great place for developers to get started!

![IoTeX Blockchain Architecture](https://cdn-images-1.medium.com/max/2000/0*cPrsvVa1wIE0cqnS)

### Sub-Protocols and Actions

The state transition layer of the chain is flexible enough that any sub-protocol can be plugged in without hustling. As of now, the following five sub-protocols have been [implemented](https://godoc.org/github.com/iotexproject/iotex-core/action):

- Account sub-protocol provides the functionality for bookkeeping balances of accounts living on this blockchain.
- Execution sub-protocol manages the execution of smart contracts and roll forward/back of the states.
- Poll sub-protocol syncs with staking sub-protocol and instructs the delegates promotion/demotion on the chain.
- Rewarding sub-protocol is responsible for distributing block rewards and epoch rewards to eligible delegates and candidates.
- Staking sub-protocol manages voting and candidate registration services using bucket data units.

In the IoTeX network, transactions (the atomic operation unit to interact with the blockchain data) are referred to as **actions**, and there are five types of actions corresponding to five sub-protocols as described. More information can be found [here](https://github.com/iotexproject/iotex-proto/blob/master/proto/types/action.proto).

### Private Key and Address

IoTeX's Private Key is 64 random hex characters, e.g., `90bf89cd944df5c6d8281b132783277c1760537809c534fc54dda34c4edfb4f4`, and the corresponding Public Key is derived from the private key using ECDSA (secp256k1), which is exactly the same as Ethereum. The public key can be recovered from a signed message using [this util](https://github.com/ethereum/go-ethereum/blob/master/crypto/signature_cgo.go#L36).

IoTeX has a human readable address looks like `io1nyjs526mnqcsx4twa7nptkg08eclsw5c2dywp4`, which takes the following steps to be constructed:

1. Generating a random private key and the corresponding public key;
2. Apply keccak256 hash function to the public key, exluding the first byte (hash := keccak256(pk[1:]);
3. Take the late 20 bytes as the payload (payload := hash[12:]), which is the byte representation of the address;
4. Apply [bech32](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) encoding on the payload and adding io prefix.

Please refer to [this repo](https://github.com/iotexproject/iotex-address) for details.

### Node Types

TODO - fullnode, fullnode w/ archive-enabled, fullnode w/ API, fullnode w/ full API

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

## :ledger: Contribute

Anyone can be a contributor to the project, provided they have signed relevant Contributor License Agreements (CLAs) and follow the project’s contribution guidelines. Contributions will be reviewed by a maintainer, and must pass all applicable tests.

Reviews check for code quality and style, including documentation, and enforce other policies. Contributions may be rejected for reasons unrelated to the code in question. For example, a change may be too complex to maintain or duplicate existing functionality.

Note that contributions are not limited to code alone. Bugs, documentation, experience reports or public advocacy are all valuable ways to contribute to a project and build trust in the community.

## :globe_with_meridians: IoTeX Ecosystem

IoTeX Ecosystem consists of an increasing number of services and applications, built around IoTeX blockchain.

<img src="https://raw.githubusercontent.com/iotexproject/iotex-docs/master/ecosystem.jpeg" height="600" />

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

[Hermes](https://hermes.to/) is an [open-source](https://github.com/iotexproject/iotex-hermes) staking/voting rewards manager. The IoTeX Network utilizes Roll-DPoS consensus, where community-elected delegates manage consensus on behalf of the network. Delegates receive IOTX rewards for producing blocks, which are usually shared with their voters. With Hermes, delegates can auto-distribute rewards every day, while their voters can easily track their reward payments. Delegates that currently use Hermes have a ‘Hermes’ badge on the member portal.

### Analytics

IoTeX analytics is an [open-source](https://github.com/iotexproject/iotex-analytics) microservice that analyzes data from IoTeX blockchain to better serve applications. Currently, analytics registers five index protocols: accounts, blocks, actions, rewards, and votings, where each protocol keeps track of its relevant data and writes it into the corresponding database tables.

### DApps

Some of the DApps built on top of IoTeX can be found [here](https://iotex.io/developers/).

If you are interested in developing DApps on top of IoTeX blockchain, [codelab](http://codelabs.iotex.io/) is the best starting point for developers!

## :woman: Chat With Us

**We are radically open-minded and value open-mindedness and transparency.**

- Sensitive security-related questions, comments, and reports should be sent to support@iotex.io. You should receive a prompt response, typically within 48 hours.

- For non-urgent bugs or places that need to be improved, please file issues under https://github.com/iotexproject/iotex-core/issues for the open-source community to investigate.

- If you have ideas/proposals to make IoTeX better, please do not hesitate to let us know through [Halo Program](http://iotex.io/halo)

- If you have feedback/suggestion, please do not hesitate to contact us via [forum](https://community.iotex.io/c/research-development/protocol) or [email](support@iotex.io).
