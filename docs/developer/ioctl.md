---
title: Command-line Interface
---

## Overview

ioctl is a command-line interface for interacting with IoTeX blockchains.

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

## Account

#### Create Account(s)

`Usage: ioctl account create`

```
➜  ioctl account create
{
  "accounts": [
    {
      "address": "io12ly97a3sk94ne06qjz2vv6clv3za7mk2z2sra9",
      "privateKey": "bb59a2a2c21242831906e0c8d188c642fdc1324d27ac4ae0d8cbea373b22147b",
      "publicKey": "040780ba149d24ee5418084ee193a6be8b3b7cf5329d160fc8902270b342c4fed4b646cdd5fdaf52932eecb957297a9bf6dbb24f7faa9287a27df6b5e83781c74b"
    }
  ]
}
```

```
➜  ioctl account create -n 3
{
  "accounts": [
    {
      "address": "io1dcx2490vk2sg0f7ujv9d3gu67rpvyk5rjp854s",
      "privateKey": "a40ffd19150b4f3cbb1ca779862fc63b15d432c0be9bba81c56856d00e370b91",
      "publicKey": "04483333bf900b59a412c26a8cf287e122be5d2882d66263ce330a2c84e426fcf48dca4e189dbef15dc3511b049b7708c1e3a49e4904a6286ffcc6019bb27a4ca9"
    },
    {
      "address": "io19sypnkmj6agqqgusht07m35lvlhz4ruehetagk",
      "privateKey": "fd49783f8687379e3eb6e5778977044cc7e464dd16df8444b8643d3d636f7ebc",
      "publicKey": "04bcae59b817ec2924adef52088e9295bb040d1a34fe49e64b41ca56e2cbb3be115256975d2c1472b0a3b47bea720810de092ef4d209924ce09fa896b29588a90d"
    },
    {
      "address": "io1ehlhw6kedp5x8y04ddr7fl0cs68ns32hdxuvdl",
      "privateKey": "2c1bdc74c7ff03f08f2e2d3b65af9a54dc5addc42613670bd4bb1f0440cd9468",
      "publicKey": "04cd1ff13e20cbe83bc8759ce21404edc2a9b78c57f8d2ffc648f2213dfee98b61d9ebaffe03f32e7a13fbe319b1958c99ed701c3fa1046790f6af12f32262309b"
    }
  ]
}
```

#### Create An Account Into Wallet

`Usage: ioctl account createadd ALIAS`

```
➜  ioctl account createadd IOsenser
#IOsenser: Set password
#IOsenser: Enter password again
New account "IOsenser" is created.
Please Keep your password, or you will lose your private key.
```

#### Import An Account With Private Key

`Usage: ioctl account import [key|keystore] ALIAS`
Two options are available. If you use `key`,

```
➜  ioctl account import key whale
#whale: Enter your private key, which will not be exposed on the screen.
#whale: Set password
#whale: Enter password again
New account #whale is created. Keep your password, or your will lose your private key.
```

If you use `keystore`,

```
➜  ioctl account import keystore whale
```

#### Export Private Key From An Account

`Usage: ioctl account export (ALIAS|ADDRESS)`

```
➜  ioctl account export whale
Enter password #whale:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### Delete An Account

`Usage: ioctl account delete (ALIAS|ADDRESS)`

```
➜  ioctl account delete whale
** This is an irreversible action!
Once an account is deleted, all the assets under this account may be lost!
Type 'YES' to continue, quit for anything else.
yes
Enter password #io1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5:
Account #io1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5 has been deleted.
```

#### List Accounts

`Usage: ioctl account list`

```
➜  ioctl account list
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt - IOsenser
io17laykjt9qgafuxj58fuspuxzlv6y4qgxf82vnm - frank
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 007
```

#### Query Balance

`Usage: ioctl account balance (ALIAS|ADDRESS)`

```
➜  ioctl account balance IOsenser
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt: 0.721 IOTX
```

```
➜  ioctl account balance io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg: 4689 IOTX
```

#### Query Nonce

`Usage: ioctl account nonce (ALIAS|ADDRESS)`

```
➜  ioctl account nonce IOsenser
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt:
Nonce: 0, Pending Nonce: 1
```

#### Translate Address

`Usage: ioctl account ethaddr (ALIAS|IOTEX_ADDRESS|ETH_ADDRESS)`

```
➜  ioctl account ethaddr io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34
```

```
➜  ioctl account ethaddr 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34
```

```
➜  ioctl account ethaddr 007
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34
```

#### Export Public Key From Account

`Usage: ioctl account exportpublic (ALIAS|ADDRESS)`

```
➜  ioctl account exportpublic tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### Sign Message With Private key

`Usage: ioctl account sign MESSAGE [-s SIGNER]`

```
➜  ioctl account sign "abcd" -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:
ec280f9f95ed5774fb042e69d92bfb685443dc99350d5460ecf1067d1cb539150903ff0d18cdd5072ce72765996e80c96df7ed86c2b887ce4d41aa8cc2dd0b0001
```

#### Verify Public Key And Address By Private Key

`Usage: ioctl account verify`

```
➜  ioctl account verify
Enter private key:
Address:  io1gh439pm67d4cwxt882xpylj75klys6esepml60
Public Key: 04ac93d2fffdf488659c3f58890f6ddc55818d50f884e515aa90b2b1ca1e0fc223f85c5a0dc8b9a55b9a282a1ba8a269a3426f168591b60c921380f7d6d34c1f4f
```

#### Update Password Of An Account

`Usage: ioctl account update (ALIAS|ADDRESS)`

```
➜  ioctl account update IOsenser
#IOsenser: Enter current password
#IOsenser: Enter new password
#IOsenser: Enter new password again
Account #IOsenser has been updated.
```

## Action

#### Transfer Tokens

`Usage: ioctl action transfer (ALIAS|RECIPIENT_ADDRESS) AMOUNT_IOTX [DATA] -s SIGNER [-l GAS_LIMIT] [-p GAS_PRICE]`

```
➜  ioctl action transfer IOsenser 7 pad#3212 -s whale
Enter password #whale:

senderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)
transfer: <
  recipient: io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt (IOsenser)
  amount: 7000000000000000000
  payload: pad#3212
>
senderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88
signature: 64f9dc75b3406a009692cde669d3186bc29844ba70520e16fdafc14487d8d6be184c4a43f5f7e1f688d759c985a268d1a4b73b34b9e98d1db61adcb549a37d0101

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
iotexscan.io/action/aa56b8958d5030676876363ec054df4ac7044ea2fc09f51a1c238d22c9411c33
```

#### Query Action

`Usage: ioctl action hash ACTION_HASH`

```
→  ioctl action hash 690fb07fbb5ba3b762a7a16edea35ff1c3b02b43a6331aef88c4daa1bc933ad4

version: 1  nonce: 7  gasLimit: 122222  gasPrice: 2000000000000 Rau
senderAddress: io1znka733xefxjjw2wqddegplwtefun0mfdmz7dw (whale)
transfer: <
  recipient: io18jaldgzc8wlyfnzamgas62yu3kg5nw527czg37 (nani)
  amount: 123000000000000000000 Rau
  payload:
>
senderPubKey: 04d0fade363080b9061844ed6b1009f35595515b31295e37e870106d3201a638856db2c3f870dbbcafc559af54574f3487dbea0d318588608d7aca8e77e4ce5ade
signature: 2e10f265fdc5944fab11afaebd258292afe8f9076157fbaca6bfdd3ece9047483fb3aa10ce187fe55d2d9c591e5eda430833b744f825a6ae34c9b34461d3940f01

#This action has been written on blockchain
returnValue:
status: 1 (Success)
actHash: 690fb07fbb5ba3b762a7a16edea35ff1c3b02b43a6331aef88c4daa1bc933ad4
gasConsumed: 10000
contractAddress:
logs:0
```

#### Deploy Contract

`Usage: ioctl action deploy -s SIGNER -b BYTE_CODE -l GAS_LIMIT [-p GAS_PRICE]`

```
➜  ioctl action deploy -b 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029 -l 50000 -p 1 -s whale
Enter password #whale:

senderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)
version: 1
nonce: 3
gasLimit: 50000
gasPrice: 1000000000000
execution: <
  contract:
  amount: 0
  data: 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029
>
senderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88
signature: a0cbb205184c3153217bdd7e1d251a70bf8d9222b7ab9b8015254e5961f21602694477ea5bed2005fe21f47724130af173b7abe2b5f9304b09f188749c88c2f001

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
b49e5860c5b4154fdb6bcb808a60fbf8de2ac7807d99551ec5357d83ad2612e5
```

#### Invoke Contract

`Usage: ioctl action invoke (ALIAS|CONTRACT_ADDRESS) [AMOUNT_IOTX] -s SIGNER -b BYTE_CODE -l GAS_LIMIT [-p GAS_PRICE]`

```
➜  ioctl action invoke io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn 122 -s boss -b 60fe47b10000000000000000000000000000000000000000000000000000000000000001 -l 90000 -p 3
Enter password #boss:

senderAddress: io1ed52svvdun2qv8sf2m0xnynuxfaulv6jlww7ur
version: 1
nonce: 2
gasLimit: 90000
gasPrice: 3000000000000
execution: <
  contract: io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn
  amount: 122000000000000000000
  data: 60fe47b10000000000000000000000000000000000000000000000000000000000000001
>
senderPubKey: 04b3fe4456876ca4c904c52dc3203e06651924d6cbd5e9f545ce990ea1289f3b8ddaff3b7e104803187f87b1e375076285e7137052260b14f2f33229a671a39a0c
signature: bde6509fadfe80b707ef80e24041b4cfe7bf583c7d89a0649027090c191918b217ffae5faf1dd5f2d9e6d05f8721c8ff7a6b3b5cffb64610d3bad71c9c55e47001

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
58fc6465bd3b7e33b1508064b0342dc786247b4e18859be72fea57c993dc4950
```

#### Read Smart Contract

`ioctl action read (ALIAS|CONTRACT_ADDRESS) -b BYTE_CODE [-s SIGNER]`

```
➜ ioctl action read io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn -b 60fe47b10000000000000000000000000000000000000000000000000000000000000001

```

#### Claim Reward

`Usage: ioctl action claim AMOUNT_IOTX [DATA] -s SIGNER [-l GAS_LIMIT] [-p GASPRICE]`

```
➜  ioctl action claim 321 happy -s whale
Enter password #whale:

senderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)
version: 1
nonce: 6
gasLimit: 15000
gasPrice: "1000000000000"
claimFromRewardingFund: <
  amount: "321000000000000000000"
  data: "happy"
>
senderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88
signature: 6b4022afc93901b7de420f84829e9f3e2f531a83c4c0f3a935df3694dbe09e7f068733a294207e9ee39e0d83b4fc206e9f7059592e648b8d92a0bb1eed489f4000

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
59a73e24a41385005519d1d1e7f164b36b98717f2c5649785b43c2588245502d
```

#### Deposit To Rewarding Pool

`ioctl action deposit AMOUNT_IOTX [DATA] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GAS_PRICE] [-P PASSWORD] [-y]`

```
➜ ioctl action deposit 10 -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:


version: 1  nonce: 419  gasLimit: 10000  gasPrice: 0.000001 IOTX
senderAddress: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4 (tmp2)
version: 1
nonce: 419
gasLimit: 10000
gasPrice: "1000000000000"
depositToRewardingFund: <
  amount: "10000000000000000000"
>
senderPubKey: 0422346c407294b5e37487395f193faa48dabfc2225ab33fe47b335299f46505b1689f0d96fd53bd19971fe47f310669cf6260dcdc23318454814a4fe904f4d384
signature: a3c46bae8324e5bcc498de67510b8e8dffe3d8474b7bd1f1cef7a1e01aff6722210df22a5b5c796e1820c5d091c8e49b7a7ee36d2951f90a6f8538bbcfd8f17100

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:23aee3e08f084d5090329d47e27afa8c08358967ca8d6f2b2dc26803b7491d4e
```

## Alias

#### Set Alias

`Usage: ioctl alias set ALIAS ADDRESS`

```
➜  ioctl alias set test io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg
set
```

#### Remove Alias

`Usage: ioctl alias remove ALIAS`

```
➜  ioctl alias remove frank
frank is removed
```

#### List Alias

`Usage: ioctl alias list`

```
➜  ioctl alias list
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt - IOsenser
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg - test
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - whale
```

#### Export Aliases To Either Json Or Yaml Format

`Usage: ioctl alias export`

```
➜  ioctl alias export
{"aliases":[{"name":"gas-test","address":"io15kqxz7a0r72akrgy6p7fuu88llg7cxn9rlfjdj"},{"name":"public-length","address":"io15cg78lnv54r8m8vrkrv9ktq4uyngp5aenmj5wa"},{"name":"test","address":"io1v9r84ckmccqczl00r0sdepvaunsk456pcw9rvq"},{"name":"tmp2","address":"io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4"},{"name":"daddypig","address":"io1gh439pm67d4cwxt882xpylj75klys6esepml60"},{"name":"dorothy","address":"io1x0e9jwx7yv7sk2p4lj4vt4czydwtlwkhaaczt7"},{"name":"infinite-loop","address":"io14cu7qpseelx0zg8lm2tl4a927lqmfl7dgr886q"},{"name":"max-time","address":"io1fzyv2tlfh3xkper4xln3phfr0mcklzmgans5p5"},{"name":"tmp","address":"io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4"},{"name":"cashier","address":"io1paxfkzr5kpgxjxckfydhttcg3vqtug5ehlrvrx"}]}
```

#### Import Aliases

`Usage: ioctl alias import 'DATA'`

```
➜  ioctl alias import '{"name":"max-time","address":"io1fzyv2tlfh3xkper4xln3phfr0mcklzmgans5p5"}'
0/0 aliases imported
Existed aliases:
```

## Blockchain

#### Query Blockchain Information

`Usage: ioctl bc info`

```
➜  ioctl bc info
height:50268  numActions:50852  tps:0
epochNum:140  epochStartHeight:50041  gravityChainStartHeight:7485100
```

#### Query Block

`Usage: ioctl bc block [HEIGHT|HASH]`

```
➜  ioctl bc block
Transactions: 1
Height: 122
Total Amount: 0
Timestamp: 1553238923
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 82286c69c59aaff815bb888b876eed7228ea51065027dc07ac1c04e5e082ea6b
Hash: 87f73c3a6e3312075a9aae70660656a9209bb11fb4d5fb1a2f21e020e20d3365
```

```
➜  ioctl bc block 101
Transactions: 1
Height: 101
Total Amount: 0
Timestamp: 1553238713
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 999003ad9f4ea85f45a8a3ebafcb8ad03c43852fbe8cce14aaf86bed9aed8895
Hash: c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
```

```
➜  ioctl bc block c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
Transactions: 1
Height: 101
Total Amount: 0
Timestamp: 1553238713
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 999003ad9f4ea85f45a8a3ebafcb8ad03c43852fbe8cce14aaf86bed9aed8895
Hash: c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
```

#### Query Staking Bucket Information

`Usage: ioctl bc bucketlist [ALIAS|ADDRESS]`

```
➜  ioctl bc bucketlist daddypig
Blockchain Node: api.testnet.iotex.one:443
{
index: 56
owner: io1gh439pm67d4cwxt882xpylj75klys6esepml60
candidate: io1q2whygmmzphr22fh5703l04jz5kh9thj9dgs99
stakedAmount: 232 IOTX
stakedDuration: 7 days
autoStake: false
createTime: 2020-05-21T13:10:10Z
stakeStartTime: 2020-05-21T13:28:25Z
unstakeStartTime: none
}
```

#### Query Staking BucketList By Address

`Usage: ioctl bc bucketlist [ALIAS|ADDRESS]`

```
➜  ioctl bc bucketlist tmp2
Blockchain Node: api.testnet.iotex.one:443
{
index: 34
owner: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4
candidate: io1t56twy23yjuqscljpjc869hyqw3gpswwj0g228
stakedAmount: 100 IOTX
stakedDuration: 7 days
autoStake: false
createTime: 2020-05-11T06:41:20Z
stakeStartTime: 2020-05-11T06:41:20Z
unstakeStartTime: none
}
{
index: 43
owner: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4
candidate: io1l40dc4q95fsjdprhcga5qrpdsj46q3wpzr27n9
stakedAmount: 170 IOTX
stakedDuration: 14 days
autoStake: false
createTime: 2020-05-14T02:42:15Z
stakeStartTime: 2020-05-14T02:42:15Z
unstakeStartTime: none
}
```

#### Query Staking Bucket By Index

`Usage: ioctl bc bucket [BUCKET_INDEX]`

```
➜  ioctl bc bucketlist daddypig
Blockchain Node: api.testnet.iotex.one:443
{
index: 56
owner: io1gh439pm67d4cwxt882xpylj75klys6esepml60
candidate: io1q2whygmmzphr22fh5703l04jz5kh9thj9dgs99
stakedAmount: 232 IOTX
stakedDuration: 7 days
autoStake: false
createTime: 2020-05-21T13:10:10Z
stakeStartTime: 2020-05-21T13:28:25Z
unstakeStartTime: none
}
```

## Config

`Variables: [endpoint, wallet, explorer, defaultacc, language, nsv2height]`\
`Explorers: [iotexscan (default), iotxplorer, custom]`

#### Set Config

`Usage: ioctl config set VARIABLE VALUE`

```
➜  ioctl config set endpoint api.iotex.one:443
endpoint is set to api.iotex.one:443
```

#### Get Config

`Usage: ioctl config get VARIABLE | all`

```
➜  ioctl config get wallet
/Users/IoTeX/.config/ioctl/default
```

#### Reset Config

`Usage: ioctl config reset`

```
➜  ioctl config reset
Config reset to default values
```

## Node

#### Query Delegates

`Usage: ioctl node delegate [-e epoch-num]`

```
➜  ioctl node delegate
Epoch: 140,  Start block height: 50041,  Total blocks in epoch: 238

Address                                     Rank   Alias   Status   Blocks   Votes
io1kr8c6krd7dhxaaqwdkr6erqgu4z0scug3drgja      1           active   10       55001936.845735597412152533
io108h7sa5sap44e244hz649zyk5y4rqzsvnpzxh5      2                             48735653.694155983836182304
io1f0rh94m3ctkwep3rlsswwq5vxwlntx4s574l3q      3                             46160987.404981007320038095
io14u5d66rt465ykm7t2847qllj0reml27q30kr75      4                             45709929.504998607776485547
io1wl83n3up9w8nedf30lnyxzple0gu5pme0dyrds      5           active   10       38555248.666748708397999935
io1qqaswtu7rcevahucpfxc0zxx088pylwtxnkrrl      6                             32708257.835646444877501838
io1nf0rvzgq3tqym6n3trttsrt7d4gqqsmqfzy0da      7                             29712098.816122003636349154
...
```

```
➜  ioctl node delegate -e 96
Epoch: 96,  Start block height: 34201,  Total blocks in epoch: 360

Address                                     Rank   Alias   Status   Blocks   Votes
io1kr8c6krd7dhxaaqwdkr6erqgu4z0scug3drgja      1           active   15       54541792.307642085450786008
io108h7sa5sap44e244hz649zyk5y4rqzsvnpzxh5      2           active   15       48737756.399894630566687188
io1f0rh94m3ctkwep3rlsswwq5vxwlntx4s574l3q      3           active   15       46190928.658730546519935761
io14u5d66rt465ykm7t2847qllj0reml27q30kr75      4                             46085297.487903898159647528
io1wl83n3up9w8nedf30lnyxzple0gu5pme0dyrds      5           active   15       38572640.296620127370097465
io1qqaswtu7rcevahucpfxc0zxx088pylwtxnkrrl      6           active   16       32953849.701042695805874862
io1nf0rvzgq3tqym6n3trttsrt7d4gqqsmqfzy0da      7           active   15       29482829.876487336517790368
...
```

#### Query ProbationList By Epoch Number

`Usage: ioctl node probationlist [-e epoch-num]`

```
➜  ioctl node probationlist
EpochNumber : 4985, IntensityRate : 90%
ProbationList : [
  "io1gh439pm67d4cwxt882xpylj75klys6esepml60"
]

```

```
➜  ioctl node probationlist -e 4500
EpochNumber : 4500, IntensityRate : 90%
ProbationList : [
  "io13n3382cjhaawmqfk4vmvvgllnryw4tf56qdtks",
  "io1gh439pm67d4cwxt882xpylj75klys6esepml60"
]
```

#### Query Reward

`Usage: ioctl node reward (ALIAS|DELEGATE_ADDRESS)`

```
➜  ioctl node reward whale
io1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5: 45819 IOTX
```

## Smart Contract

#### Prepare solidity compiler

`Usage: ioctl contract prepare`

```
➜  ioctl contract prepare

...
Solidity compiler is ready now.
```

This process installs `solc` to you env. You can also install it by using the following commands.

On Ubuntu, you can use the following command

```
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install solc
```

On macOS, you can use the following command

```
brew update
brew upgrade
brew tap ethereum/ethereum
brew install solidity@5
```

For more detailed instruction of installing `solc`, please refer to https://solidity.readthedocs.io/en/v0.5.0/installing-solidity.html.

Please note that `ioctl` currently supports `solc` `4.x` and `5.x`. Please make sure you install the current version.

#### Compile smart contract

`Usage: ioctl contract compile CONTRACT_NAME [CODE_FILES...] [--abi-out ABI_PATH] [--bin-out BIN_PATH]`

```
➜  ioctl contract compile Multisend
Output:
======= multisend2.sol:Multisend =======
Binary:
0x608060405234801561001057600080fd5b5060405160408061096483398101604052805160209091015160008054600160a060020a03191633179055600191909155600255610911806100536000396000f30060806...
Contract JSON ABI
[{"constant":false,"inputs":[{"name":"recipients","type":"address[]"},{"name":"amounts","type":"uint256[]"},{"name":"payload","type":"string"}],"name":"sendCoin","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},
...
```

#### Deploy smart contract from sol file

`Usage: ioctl contract deploy sol CONTRACT_NAME [CODE_FILES...] [--with-arguments INIT_INPUT]`

```
➜  ioctl contract deploy sol Multisend --with-arguments '{"_minTips":1,"_limit":20}' -s yqr
Output:
...
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...
```

#### Deploy smart contract from bytecode

`Usage: ioctl contract deploy bytecode BYTECODE [ABI_PATH INIT_INPUT]`

```
➜  ioctl contract deploy bytecode 0x1bfc56c6... -s yqr
Output:
...
version: 1  nonce: 144  gasLimit: 745466  gasPrice: 0.000001 IOTX
senderAddress: io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng (yqr)
execution: <
  contract:
  data: 608060405234801561001057600080fd5b5060405160408061096483398101604052805160209091015160008054600160a060020a03191633179055600191909155600255610911806100536000396000f300608060405260043610
...
>
senderPubKey: 046d89e514d67b702d0a4bf15bfa32f2ffac43ab56f9c9a3a0020b3cd02c426267dd8a5a03bca5c2fe2487fd0e1539b8d25053ba1fc9db83684ea7a33b70f936f7
signature: f436c1ffadd63bf67308d8416529aac04deeb0761022aa5d75a60869e91dc5ab4dd64576d82ffe1a40e569450c6463accbbe2b9cf9251b0577419f6a6995e48800

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...
```

#### Deploy smart contract from bin file

`Usage: ioctl contract deploy bin BIN_PATH [ABI_PATH INIT_INPUT]`

```
➜  ioctl contract deploy bin a.bin a.abi '{"_minTips":1,"_limit":20}' -s yqr
Output:
...
version: 1  nonce: 143  gasLimit: 781866  gasPrice: 0.000001 IOTX
senderAddress: io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng (yqr)
execution: <
  contract:
  data: 608060405234801561001057600080fd5b5060405160408061096483398101604052805160209091015160008054600160a060020a03191633179055600191909155600255610911806100536000396000f300608060405260043610
...
>
senderPubKey: 046d89e514d67b702d0a4bf15bfa32f2ffac43ab56f9c9a3a0020b3cd02c426267dd8a5a03bca5c2fe2487fd0e1539b8d25053ba1fc9db83684ea7a33b70f936f7
signature: 310b186c59563eb1e261465b9e28a325149267e10afed988e697272f5411defc7c1cc419f01c6fbb45e4fbb2f50bcdbfb63fec7bd5e1a0f9ec43d6fcc286462a01

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...
```

#### Invoke smart contract by function

`Usage: ioctl contract invoke function (CONTRACT_ADDRESS|ALIAS) ABI_PATH FUNCTION_NAME [AMOUNT_IOTX] [--with-arguments INVOKE_INPUT]`

```
→  ioctl contract invoke function io1h8z... a.abi sendCoin 2 --with-arguments {"recipients":["io1h8zxmdacge966wp6t90a02ncghaa6eptnftfqr","io14fmlh7zedcx7tn3k9k744v54nxnv8zky86tjhj"],"amounts":["312","123"],"payload":"PLEASE!!!"}
Output:
version: 1  nonce: 146  gasLimit: 45600  gasPrice: 0.000001 IOTX
senderAddress: io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng (yqr)
execution: <
  contract: io1h8zxmdacge966wp6t90a02ncghaa6eptnftfqr (m)
  amount: 2 IOTX
  data: 02c4bc47000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000
...
```

#### Invoke smart contract by bytecode

`Usage: ioctl contract invoke bytecode (CONTRACT_ADDRESS|ALIAS) PACKED_ARGUMENTS [AMOUNT_IOTX]`

```
→  ioctl contract deploy bytecode 0x1bfc56c6... -s yqr
Output:
version: 1  nonce: 147  gasLimit: 45600  gasPrice: 0.000001 IOTX
senderAddress: io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng (yqr)
execution: <
  contract: io1h8zxmdacge966wp6t90a02ncghaa6eptnftfqr (m)
  amount: 2 IOTX
  data: 02c4bc47000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000
...
```

#### Test smart contract by bytecode

`Usage: ioctl contract test bytecode (CONTRACT_ADDRESS|ALIAS) PACKED_ARGUMENTS [AMOUNT_IOTX]`

```
→  ioctl contract test bytecode io18qq... a4d66daf
Output:
return 0000000000000000000000000000000000000000000000000000000000000000
```

#### Test smart contract by function

`Usage: ioctl contract test function (CONTRACT_ADDRESS|ALIAS) ABI_PATH FUNCTION_NAME [AMOUNT_IOTX] [--with-arguments INVOKE_INPUT]`

```
→  ioctl contract test function io18qq... a.abi owner
Output:
return 000000000000000000000000c7f43fab2ca353d29ce0da04851ab74f45b09593
```

## Stake/Vote

#### Create Bucket for Voting

`Usage: ioctl stake2 create AMOUNT_IOTX CANDIDATE_NAME STAKE_DURATION [DATA] [--auto-stake] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GASP_RICE] [-P PASSWORD] [-y]`

```
➜  ioctl stake2 create 130 robotbp00000 7 --auto-stake -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:


version: 1  nonce: 420  gasLimit: 10000  gasPrice: 0.000001 IOTX
senderAddress: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4 (tmp)
version: 1
nonce: 420
gasLimit: 10000
gasPrice: "1000000000000"
stakeCreate: <
  candidateName: "robotbp00000"
  stakedAmount: "130000000000000000000"
  stakedDuration: 7
  autoStake: true
>
senderPubKey: 0422346c407294b5e37487395f193faa48dabfc2225ab33fe47b335299f46505b1689f0d96fd53bd19971fe47f310669cf6260dcdc23318454814a4fe904f4d384
signature: 64cb75de95732ab1f3bf04fbfa8449d05a4d7a1115f8aad07b369316dbff75c54ba1d3c66ead9ac26e57c9212f73c9009eba11260d5c2f89ed51ff68b56e54b000

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:30aa10f565f425b0d7b34b57cbf4b22a164b8eb391c1c24bcdc012cabc09a513
```

#### Add IOTX to Certain Bucket

`Usage: ioctl stake2 add BUCKET_INDEX AMOUNT_IOTX [DATA] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GAS_PRICE] [-P PASSWORD] [-y]`

```
➜  ioctl stake2 add 56 102 -s tmp2 -y
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:a51805dbca3046c62f3dd14366594bdd9aabdbe02aa394712556c801bc206359
```

#### Renew a Bucket

`Usage: ioctl stake2 renew BUCKET_INDEX STAKE_DURATION [DATA] [--auto-stake] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GAS_PRICE] [-P PASSWORD] [-y]`

```
➜   ioctl stake2 renew 56 7 -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:


version: 1  nonce: 424  gasLimit: 10000  gasPrice: 0.000001 IOTX
senderAddress: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4 (tmp)
version: 1
nonce: 424
gasLimit: 10000
gasPrice: "1000000000000"
stakeRestake: <
  bucketIndex: 56
  stakedDuration: 7
>
senderPubKey: 0422346c407294b5e37487395f193faa48dabfc2225ab33fe47b335299f46505b1689f0d96fd53bd19971fe47f310669cf6260dcdc23318454814a4fe904f4d384
signature: 1e8683119f9ccb041f53f4da8cdc16681fc1e542825e44a0e576f6783600176a1eb106b1eed500694cc3bff88b19fbd8cfd6c921faabb99440c15dc0272a09d400

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:c6acfec04e0a6a623713f928bdbe94eb573a6d52227241e0595509cea44728ab
```

#### Change Candidate Of Bucket

`Usage: ioctl stake2 change CANDIDATE_NAME BUCKET_INDEX [DATA] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GAS_PRICE] [-P PASSWORD] [-y]`

```
➜   ioctl stake2 change robotbp00001 56 -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:


version: 1  nonce: 425  gasLimit: 10000  gasPrice: 0.000001 IOTX
senderAddress: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4 (tmp2)
version: 1
nonce: 425
gasLimit: 10000
gasPrice: "1000000000000"
stakeChangeCandidate: <
  bucketIndex: 56
  candidateName: "robotbp00001"
>
senderPubKey: 0422346c407294b5e37487395f193faa48dabfc2225ab33fe47b335299f46505b1689f0d96fd53bd19971fe47f310669cf6260dcdc23318454814a4fe904f4d384
signature: 03cd6ccc8c7adf739ea34666ef87cde19d35f3a1938d3aba921a713f8d7b26a90f7e07c3557aec67cc81c82ddf2b2e5d316016da4fcda46e4c93920e53a5ca5701

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:2ee5a6bb764c502d9a8a016d71d83e8b610f4bade1bb0207ec97108a2934a1f6
```

#### Transfer Ownership Of Bucket

`Usage: ioctl stake2 transfer (ALIAS|VOTE_ADDRESS) BUCKET_INDEX [DATA] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GAS_PRICE] [-P PASSWORD] [-y]`

```
➜  ioctl stake2 transfer daddypig 56 -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:


version: 1  nonce: 426  gasLimit: 10000  gasPrice: 0.000001 IOTX
senderAddress: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4 (tmp)
version: 1
nonce: 426
gasLimit: 10000
gasPrice: "1000000000000"
stakeTransferOwnership: <
  bucketIndex: 56
  voterAddress: "io1gh439pm67d4cwxt882xpylj75klys6esepml60"
>
senderPubKey: 0422346c407294b5e37487395f193faa48dabfc2225ab33fe47b335299f46505b1689f0d96fd53bd19971fe47f310669cf6260dcdc23318454814a4fe904f4d384
signature: 7ff14a55d71307b221675f8c5b21ca0a3390bace47c855cdaa5d8fca00287601714d2076a270e74fcef235571bd2bd97d85e06ee3cc46473ca94c7ad34702cc200

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:f23774c081a0a66c3f3830ca64e1efe669bb0cc7ea7815774294824f9c1b4c15
```

#### Release a Over-Time Bucket

`Usage: ioctl stake2 release BUCKET_INDEX [DATA] [-c ALIAS|CONTRACT_ADDRESS] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GASPRICE] [-P PASSWORD] [-y]`

```
➜   ioctl stake2 release 1
Enter password #ioxxx...xxx:
...
...
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx
```

#### Withdraw IOTX From a Released Bucket

`Usage: ioctl stake2 withdraw BUCKET_INDEX [DATA] [-c ALIAS|CONTRACT_ADDRESS] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GASPRICE] [-P PASSWORD] [-y]`

```
➜   ioctl stake2 withdraw 1
Enter password #ioxxx...xxx:
...
...
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx
```

#### Register Candidate

`Usage: ioctl stake2 register NAME (ALIAS|OPERATO_ADDRESS) (ALIAS|REWARD_ADDRESS) (ALIAS|OWNER_ADDRESS) AMOUNT_IOTX STAKE_DURATION [DATA] [--auto-stake] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GAS_PRICE] [-P PASSWORD] [-y]`

```
➜   ioctl stake2 register pig tmp2 tmp2 tmp2 1000000 7 -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:


version: 1  nonce: 428  gasLimit: 10000  gasPrice: 0.000001 IOTX
senderAddress: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4 (tmp)
version: 1
nonce: 428
gasLimit: 10000
gasPrice: "1000000000000"
candidateRegister: <
  candidate: <
    name: "pig"
    operatorAddress: "io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4"
    rewardAddress: "io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4"
  >
  stakedAmount: "1000000000000000000000000"
  stakedDuration: 7
  ownerAddress: "io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4"
>
senderPubKey: 0422346c407294b5e37487395f193faa48dabfc2225ab33fe47b335299f46505b1689f0d96fd53bd19971fe47f310669cf6260dcdc23318454814a4fe904f4d384
signature: 3839e559a155e34900e2fc7b9cb45c772c1eac16ce9b2a84d4c033de054c8841062825fe368c984c1a367c1e16c16cfe4518335db346b3ab47277378fc0aa29c00

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:9571ad35b0184ad75eaabe539d57513f37fac74b9f605c172fbc28b760d256df
```

#### Update Candidate Information

`Usage: ioctl stake2 update NAME (ALIAS|OPERATOR_ADDRESS) (ALIAS|REWARD_ADDRESS) [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GAS_PRICE] [-P PASSWORD] [-y]`

```
➜   ioctl stake2 update pig tmp2 tmp2 -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:


version: 1  nonce: 429  gasLimit: 10000  gasPrice: 0.000001 IOTX
senderAddress: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4 (tmp)
version: 1
nonce: 429
gasLimit: 10000
gasPrice: "1000000000000"
candidateUpdate: <
  name: "pig"
  operatorAddress: "io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4"
  rewardAddress: "io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4"
>
senderPubKey: 0422346c407294b5e37487395f193faa48dabfc2225ab33fe47b335299f46505b1689f0d96fd53bd19971fe47f310669cf6260dcdc23318454814a4fe904f4d384
signature: e403da0e9c928cbedbbba4ab97d9cc57a1f207a4c72c8e44bbfdf0a90a3ee01e48a2ca1d9e6bc15f6d9b4230d592f1577bb8ad8a1c9529ada986edfec6662c1801

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:c6daaedee325d339e2eba15b76646329c940c0f07ebe9c13cd1f3288ee319a5d
```

## Version/Update

#### Version

`Usage: ioctl version`

```
→  ioctl version
Client:
packageVersion:"v0.5.0" packageCommitID:"a4308fc82bea22cfaa45addef679a09f41f3a998" gitStatus:"clean" goVersion:"go version go1.11.5 darwin/amd64" buildTime:"2019-04-20-PDT/18:04:37"

Server: api.iotex.one:443
packageVersion:"v0.5.0" packageCommitID:"a4308fc82bea22cfaa45addef679a09f41f3a998" gitStatus:"clean" goVersion:"go version go1.11.5 linux/amd64" buildTime:"2019-04-21-UTC/01:04:11"
```

#### Update ioctl

`Usage: ioctl update [-t version-type]`

```
➜  ioctl update
Downloading the latest stable version ...
Password:
ioctl is up-to-date now.
```

```
➜  ioctl update -t unstable
Downloading the latest unstable version ...
Password:
ioctl is up-to-date now.
```

## XRC20 Tokens

#### Query Total Token Supply On Erc20 Contract

`Usage: ioctl xrc20 totalSupply -c ALIAS|CONTRACT_ADDRESS`

```
➜   ioctl xrc20 totalSupply -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw
Raw output: 0000000000000000000000000000000000000000010f73e141e95768f6bfacac
Output in decimal: 328166124527934490560933036
```

#### Query Account Balance On Erc20 Contract

`Usage: ioctl xrc20 balanceOf ALIAS|ACCOUNT_ADDRESS -c ALIAS|CONTRACT_ADDRESS`

```
➜   ioctl xrc20 balanceOf io1q4enhh0tp5pqpa6s4urhwrx32529pmyyzdgu3q -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw
Raw output: 000000000000000000000000000000000000000000000000b469471f80170d33
Output in decimal: 13000000000000199987
```

#### Transfer Token On Erc20 Contract

`Usage: ioctl xrc20 transfer ALIAS|TARGET_ADDRESS AMOUNT -c ALIAS|CONTRACT_ADDRESS [-l GAS_LIMIT] -s SIGNER [-p GAS_PRICE]`

```
➜   ioctl xrc20 transfer io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd 4 -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw -s ALIAS -l 50000
Enter password #ioxxx...xxx:
...
...
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx
```

#### Transfer Token From Another Address On Erc20 Contract

`Usage: ioctl xrc20 transferFrom ALIAS|OWNER_ADDRESS ALIAS|TARGET_ADDRESS AMOUNT -c ALIAS|CONTRACT_ADDRESS [-l GAS_LIMIT] -s SIGNER [-p GAS_PRICE]`

```
➜   ioctl xrc20 transferFrom io1q4enhh0tp5pqpa6s4urhwrx32529pmyyzdgu3q io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd 4 -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw -s ALIAS -l 50000
Enter password #ioxxx...xxx:
...
...
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx
```

#### Allow Spender Withdraw From Account With Limitation

`Usage: ioctl approve ALIAS|SPENDER_ADDRESS XRC20_AMOUNT -c ALIAS|CONTRACT_ADDRESS -s SIGNER [-l GAS_LIMIT]`

```
➜   ioctl xrc20 approve io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd 4 -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw -s ALIAS -l 50000
Enter password #ioxxx...xxx:
...
...
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx
```

#### Query Remaining Withdraw Amount For Spender

`Usage: ioctl allowance ALIAS|OWNER_ADDRESS ALIAS|SPENDER_ADDRESS -c ALIAS|CONTRACT_ADDRESS`

```
➜   ioctl xrc20 allowance io1q4enhh0tp5pqpa6s4urhwrx32529pmyyzdgu3q io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw
Raw output: 0000000000000000000000000000000000000000000000000000000000000004
Output in decimal: 4
```
