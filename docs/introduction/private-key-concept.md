---
title: Private & Public Key
---

# Private key, Public key & Address

## Introduction

IoTeX's Private Key is 64 random hex characters, e.g., `90bf89cd944df5c6d8281b132783277c1760537809c534fc54dda34c4edfb4f4`, and the corresponding Public Key is derived from the private key using ECDSA (secp256k1), which is exactly the same as Ethereum.
::: tip
Given a signed message, you can recover the public key of the signing account using [this tool](https://github.com/ethereum/go-ethereum/blob/master/crypto/signature_cgo.go#L36).
:::

## Address Construction

A IoTeX human readable address like `io1nyjs526mnqcsx4twa7nptkg08eclsw5c2dywp4` can be constructed using the following steps:

1. Generate a random private key and the corresponding public key using $secp256k1$'s elliptic curve;

2. Apply $keccak256$ hash function to the public key, exluding the first byte: $hash := keccak256(pk[1:])$

3. Take the last 20 bytes as the payload: $payload := hash[12:]$, which is the byte representation of the address;

4. Apply [bech32](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) encoding on the payload, and add the `io` prefix.
