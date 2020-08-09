---
title: Run a Local Testnet
---

# Run a local Testnet

## Build the node server

Before you start your journey as an IoTeX developer, you need a IoTeX [Gateway node](/introduction/node-concept) to serve as an **endpoint**, that you can use to interact with the blockchain. While IoTeX provides official gateway nodes both to interact with official [Mainnet]() and [Testenet](), in this guide we will configure our own local Testnet, that will also include pre-generated accounts with some balance to start with.

::: warning
To configure a single-node blockchain locally on your computer, you will need git and golang installed: find [more isnstructions on GitHub](https://github.com/iotexproject/iotex-core#iotex-core).
:::

Clone and build the IoTeX Full-Node code (iotex-core)

```
git clone https://github.com/iotexproject/iotex-core.git
cd iotex-core
make
```

## Add a test account with initial balance

Now that you have the node executable built in the .bin/ directory, the last step is to add some initial test accounts preloaded with a positive balance of IOTX. So let's generate a new IoTeX Account, so let's list our available accounts:

```
$ ioctl account list

io1a8r9fvu6e3vthfaqvnxlhc6eavsm6t8a2cwtud - devaccount
```

edit the genesis file `./config/standalone-genesis.yaml` and add this account to the `initBalances` section:

```yaml
account:
  initBalances:
    # overwrite with your test address
    io1a8r9fvu6e3vthfaqvnxlhc6eavsm6t8a2cwtud: "100000000000000000000000000000000000"
```

we can now start our testnet using _STANDALONE_ mode to simulate a full blockchain in a single node, and also enabling it as a _Gateway_ so that we can interact with it. To do that, just run the server specifying the configuration file for standalone mode, and enable the gateway plugin:

```
bin/server -plugin=gateway -config-path=./config/standalone-config.yaml
```

or as a quick alternative:

```
make run
```
