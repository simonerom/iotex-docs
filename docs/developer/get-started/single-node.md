---
title: Local Testnet
---

### Get started with a local Testnet

Before you start your journey as an IoTeX developer, you will need a IoTeX [Gateway node](/introduction/node-concept) to serve as an **endpoint** to interact with the blockchain. While you can use the official the official gateway node provided by IoTeX, this would require you to obtain and consume some real IOTX tokens as you would be using the actual IoTeX Mainnet.
You will be using the IoTeX Mainnet later, when your Dapps are deployed, meanwhile you can configure a local testnet that is made of one single node and has some pre-generated accounts owning test-IOTX tokens.

::: warning
To configure a single-node blockchain locally on your computer, you will need golang installed: find [more isnstructions on GitHub](https://github.com/iotexproject/iotex-core#iotex-core).
:::

Clone and build the IoTeX Full-Node code (iotex-core)

```
git clone https://github.com/iotexproject/iotex-core.git
cd iotex-core
make
```

Now that you have the node executable built in the .bin/ directory, you can start it using the _single-node_ configuration file and enable it as a _Gateway_ node with the following command:

```
bin/server -plugin=gateway -config-path=./config/standalone-config.yaml
```

or as a quick alternative:

```
make run
```
