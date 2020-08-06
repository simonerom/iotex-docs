---
title: Command line client
---

### The command line Client

The most basic tool for a IoTeX developer is **ioctl**: a command-line interface that can be pointed to a [gateway](introduction/node-concept) node in the IoTeX network to query the blockchain and send [actions]

:::: tabs :options="{ useUrlFragment: false }"
::: tab bash

```bash
Usage:
  ioctl [command]

Available Commands:
  account     Manage accounts of IoTeX blockchain
  action      Manage actions of IoTeX blockchain
  alias       Manage aliases of IoTeX addresses
  bc          Deal with block chain of IoTeX blockchain
  config      Get, set, or reset configuration for ioctl
  contract    Deal with smart contract of IoTeX blockchain
  help        Help about any command
  node        Deal with nodes of IoTeX blockchain
  stake2      Support native staking of IoTeX blockchain
  update      Update ioctl with latest version
  version     Print the version of ioctl and node
  xrc20       Support ERC20 standard command-line

Flags:
  -h, --help                   help for ioctl
  -o, --output-format string   output format

Use "ioctl [command] --help" for more information about a command.
```

:::
::::

### Install Release Build

```
curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh
```

### Install Latest/Unstable Build

```
curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh -s "unstable"
```
