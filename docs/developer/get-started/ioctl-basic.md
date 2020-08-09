---
title: Basic ioctl commands
---

# Basic ioctl commands

Now that ioctl is installed let's take a look at some basic commands!

**Table of Contents**
[[toc]]

## Create a IoTeX account

This is a utility command, very useful to generate new IoTeX [accounts](introduction/account-concept) when you need one: this is the same feature usually found in any blockchain wallet app where you can _create a new wallet_. It basically [consists of generating a random IoTeX private key](/introduction/account-concept.md#owned-accounts) and storing it in an encrypted file on disk, protected by your password. We will also set an _alias_ for our newly created account (_devaccount_ in the example below) to use in place of the account address when we want to use it:

Create and save a IoTeX account with:

```
ioctl account createadd devaccount
```

ioctl will ask you to provide a password that will be used to encrypt your newly created account private key. From now on when using ioctl commands you can refer to this account by using the alias **devaccount** and the password of your choice.

::: danger
Get used to immediately store your password in a safe place when you create a new account. Losing your password means losing access to the private key: when you will be using mainnet IOTX tokens this means losing your account and all the funds that you have sent to it. Forever!
:::

::: details where does ioctl store the data?
All ioctl created accounts, aliases, and the settings are stored locally on your computer in your home directory:

on Linux / macOS:
`~/.config/ioctl`

You can make a copy of this folder for backup purposes, or to copy your ioctl settings/accounts to a multiple computers.
:::

## Send a Token Transfer action

The Transfer action allows to send IOTX tokens from one IoTeX account (_sender_) to another IoTeX account (\*recipient). To make a transfer action we need to know the following data:

- The ADDRESS or ioctl ALIAS of the recipient account
- The AMOUNT of IOTX we want to transfer
- The ioctl ALIAS of the sender account
- The ioctl password for the sender ALIAS

In the following example, we will use these values:

- Recipient address: io1mflp9m6hcgm2qcghchsdqj3z3eccrnekx9p0ms
- Amount: 10 IOTX
- Sender Alias: devaccount

Here is the command to send 10 IOTX from our _devaccount_ account to the IoTeX account with address io1mflp9m6hcgm2qcghchsdqj3z3eccrnekx9p0ms

```
ioctl action transfer io1mflp9m6hcgm2qcghchsdqj3z3eccrnekx9p0ms 1 -s devaccount
```

The command will ask for the password of out _devaccount_ account (the private key is indeed required to sign the action), and if the account holds enough tokens for the action to succeed, the hash of the action will be provided.

## Query an Account balance

The IOTX balance of an account can be queried with:

```
ioctl account balance devaccount
```
