---
id: guides
title: Blockchain Accounts
---

# IoTeX Accounts

An Account represents any entity participanting in the IoTeX network, that can be a user, a device, an enterprise, or even a piece of software that lives on the blockchain itself (a so called _smart contract_). Each IoTeX account always has a "public key" and a "Private key" associated with it. The public key can be represented as a human-readable string of 41 characters by `io1...`, that is referred to as the **Address** of the account.

A typical address in the IoTeX blockchain looks like this:

`io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd`

Similarly to other smart contract platforms, in IoTeX we have two type of accounts: **owned** accounts that have a known **private key** associated with them (typically owned by people, enterprises or IoT devices that initiate actions from those accounts), and **smart contract** accounts that do not have a known private key associated with them, hence they cannot initiate actions.

![IoTeX Platform](/img/introduction/accounts.png)

## Owned Accounts

For owned accounts, the private key is used to _sign_ actions on behalf of the account itself: because each and every account address has one and only one associated private key, we can say that any blockchain action signed by a certain address _is owned_ by whoever know the private key that generates that addressy.

While the address of an account can be generated from the private key, the opposite is not possible: no one can trace the private key that generated a certain address from the knowledge of the address alone. For this reason, the address can be safely shared with anyone (e.g. to receive transfers) while the private key should always be kept secret and safely stored as it's used to _control_ the account, and it represents the proof of ownership of that account and all the actions it initiated.

## Smart contract Accounts

As anticipated, smart contract accounts do not have a private key associated to it, therefore they cannot initiate transactions: a contract address can only be the destination of transactions. On the other hand, a smart contract address has some **executable code** associated to it, that gets **executed** each time a transaction is sent to its address.
