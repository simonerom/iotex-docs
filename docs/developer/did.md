---
title: Address Based DID
---

Prerequisite: make sure to have ioctl installed.

Our address-based DID contract on **IoTeX testnet** is: `io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8`

## 1. Generate a DID Doc

```
Generate DID document using private key from wallet

Generate DID document template using an account from ioctl. The produced template can be modified as needed with its hash to be recalculated.
```

Example:

```bash
ioctl did generate -s test1
{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A",
  "authentication": [
    {
      "id": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A#owner",
      "type": "EcdsaSecp256k1VerificationKey2019",
      "controller": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A",
      "publicKeyHex": "0355237d4af6afc7f139e396329d56a4d1235c94abde9a25782241774c06cccfb6"
    }
  ]
}

The hex encoded SHA256 hash of the DID doc is:21e575fd6fd75591465481404986fac73de766446c793ff67adfa171d51adf85
```

## 2. Upload DID Doc

DID Doc can be uploaded to any public accessible content storage like S3 or IPFS or other cloud storge, as long as you end up with a URI which is able to retrieve you DID Doc.
If you plan to use IPFS, you can either setup your own IPFS node, or use service like https://pinata.cloud/.

Exmaple:

```
https://gateway.pinata.cloud/ipfs/QmNNhWHyi5tRH78QqcTYHwfyNc3bbuLZTTvmk3UhWdAWjG
```

## 3. Hash DID Doc

DID register asked for a 32 bytes hash of the DID doc as an input. You could use any hashing algorithm to fit your need. Once you got your DID Doc hash, encode it to a hex string, to pass into `ioctl`. **For simplicity, you can directly use the hex-encoded SHA256 hash string provided by `ioctl did generate`**. But if you do need to generate a hash programmatically, here is a Go example to hash a DID doc using SHA512-256 and output a hex string:

Here is a Go example to hash DID doc with SHA512-256 and output a hex string:

```go
package main

import (
	"crypto/sha512"
	"encoding/hex"
	"fmt"
)

var doc = `{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A",
  "authentication": [
    {
      "id": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A#owner",
      "type": "EcdsaSecp256k1VerificationKey2019",
      "controller": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A",
      "publicKeyHex": "0355237d4af6afc7f139e396329d56a4d1235c94abde9a25782241774c06cccfb6"
    }
  ]
}`

func main() {
	sum := sha512.Sum512_256([]byte(doc))

	fmt.Println(hex.EncodeToString(sum[:]))
}
```

## 4. Register DID

```
ioctl did register (CONTRACT_ADDRESS|ALIAS) hash uri [flags]
```

Example:

```
ioctl did register io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8 21e575fd6fd75591465481404986fac73de766446c793ff67adfa171d51adf85 https://gateway.pinata.cloud/ipfs/QmNNhWHyi5tRH78QqcTYHwfyNc3bbuLZTTvmk3UhWdAWjG -s test1
```

## 5. Resovle DID

You can resovle IoTeX DID with our web resovler

```
http://did.testnet.iotex.one/1.0/identifiers/<DID>
```

Exmaple:

```
http://did.testnet.iotex.one/1.0/identifiers/did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A
```

## 6. Update DID

```
ioctl did update (CONTRACT_ADDRESS|ALIAS) hash uri [flags]
```

Example:

```
ioctl did update io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8 21e575fd6fd75591465481404986fac73de766446c793ff67adfa171d51adf85 https://gateway.pinata.cloud/ipfs/QmNNhWHyi5tRH78QqcTYHwfyNc3bbuLZTTvmk3UhWdAWjG -s test1
```

## 7. Deregister DID

```
ioctl did deregister (CONTRACT_ADDRESS|ALIAS) [flags]
```

Example:

```
 ioctl did deregister io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8 -s test1
```

## 8. Get DID hash

Get the hash of an existent DID doc.

```
ioctl did gethash (CONTRACT_ADDRESS|ALIAS) DID [flags]
```
Example:
```
 ioctl did gethash io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8 did:io:0x8601CAb8A22bA1DB04ce909E4Ec1deE5555Bf3B0
```

## 9. Get DID URI

Get the URI of an existent DID doc.

```
ioctl did geturi (CONTRACT_ADDRESS|ALIAS) DID [flags]
```
Example:
```
 ioctl did geturi io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8 did:io:0x8601CAb8A22bA1DB04ce909E4Ec1deE5555Bf3B0
```

## 10. Deploy DID contract with ioctl and solc

Deploy DID contract with ioctl and solc.First install ioctl and solc,and then prepare the DID contract files.

```
ioctl contract deploy sol CONTRACT_NAME [CODE_FILES...] [--with-arguments INIT_INPUT] [flags]
```
Example:
```
 ioctl contract deploy sol IoTeXDID.sol
```
