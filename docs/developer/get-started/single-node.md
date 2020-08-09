---
title: Run a Local Testnet
---

# Run a local Testnet

## Build the node server

Before you start your journey as an IoTeX developer, you need a IoTeX [Gateway node](/introduction/node-concept) to serve as an **endpoint**, that you can use to interact with the blockchain. While IoTeX provides official gateway nodes both to interact with [Mainnet]() and [Testenet](), in this guide we will configure our own local Testnet, that will also include pre-generated accounts with some balance to start with.

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

Now that the node executable is built in the .bin/ directory, the last step is to add an initial test account preloaded with IOTX tokens. We will use our [dev-acc](ioctl-create-account) account:

```
$ ioctl account list

io1a8r9fvu6e3vthfaqvnxlhc6eavsm6t8a2cwtud - dev-acc
```

edit the genesis file `./config/standalone-genesis.yaml` and add this account to the `initBalances` section:

```yaml
account:
  initBalances:
    # overwrite with your test address
    io1a8r9fvu6e3vthfaqvnxlhc6eavsm6t8a2cwtud: "100000000000000000000000000000000000"
```

we can now start our testnet using _STANDALONE_ mode to simulate a full blockchain in a single node

```
make run
```
