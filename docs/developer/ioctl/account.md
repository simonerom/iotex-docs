---
title: Manage Accounts
---

# Manage Accounts

[[toc]]

### Create Account(s)

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

### Create An Account Into Wallet

`Usage: ioctl account createadd ALIAS`

```
➜  ioctl account createadd IOsenser
#IOsenser: Set password
#IOsenser: Enter password again
New account "IOsenser" is created.
Please Keep your password, or you will lose your private key.
```

### Import An Account With Private Key

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

### Export Private Key From An Account

`Usage: ioctl account export (ALIAS|ADDRESS)`

```
➜  ioctl account export whale
Enter password #whale:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Delete An Account

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

### List Accounts

`Usage: ioctl account list`

```
➜  ioctl account list
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt - IOsenser
io17laykjt9qgafuxj58fuspuxzlv6y4qgxf82vnm - frank
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 007
```

### Query Balance

`Usage: ioctl account balance (ALIAS|ADDRESS)`

```
➜  ioctl account balance IOsenser
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt: 0.721 IOTX
```

```
➜  ioctl account balance io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg: 4689 IOTX
```

### Query Nonce

`Usage: ioctl account nonce (ALIAS|ADDRESS)`

```
➜  ioctl account nonce IOsenser
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt:
Nonce: 0, Pending Nonce: 1
```

### Translate Address

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

### Export Public Key From Account

`Usage: ioctl account exportpublic (ALIAS|ADDRESS)`

```
➜  ioctl account exportpublic tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Sign Message With Private key

`Usage: ioctl account sign MESSAGE [-s SIGNER]`

```
➜  ioctl account sign "abcd" -s tmp2
Enter password #io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4:
ec280f9f95ed5774fb042e69d92bfb685443dc99350d5460ecf1067d1cb539150903ff0d18cdd5072ce72765996e80c96df7ed86c2b887ce4d41aa8cc2dd0b0001
```

### Verify Public Key And Address By Private Key

`Usage: ioctl account verify`

```
➜  ioctl account verify
Enter private key:
Address:  io1gh439pm67d4cwxt882xpylj75klys6esepml60
Public Key: 04ac93d2fffdf488659c3f58890f6ddc55818d50f884e515aa90b2b1ca1e0fc223f85c5a0dc8b9a55b9a282a1ba8a269a3426f168591b60c921380f7d6d34c1f4f
```

### Update Password Of An Account

`Usage: ioctl account update (ALIAS|ADDRESS)`

```
➜  ioctl account update IOsenser
#IOsenser: Enter current password
#IOsenser: Enter new password
#IOsenser: Enter new password again
Account #IOsenser has been updated.
```
