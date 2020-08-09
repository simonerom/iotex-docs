---
title: Create a IoTeX Account
---

# Create a IoTeX Account

Let's begin with creating a new IoTeX [accounta](introduction/account-concept): similar to any blockchain wallet app where you can _create a new wallet_, this operation [consists of generating a random IoTeX private key](/introduction/account-concept.md#owned-accounts) and storing it in an encrypted file, protected by a password of your choice. It also allows you to set an _alias_ for the newly created account (we will use the alias _dev-acc_ in the following sections) which can be used instead of the account address in subsequent ioctl commands:

Create and save a IoTeX account with:

```
ioctl account createadd dev-acc
```

ioctl will ask you to provide a password that will be used to encrypt your newly created account private key. From now on when using ioctl commands you can refer to this account by using the alias **dev-acc** and the password of your choice.

::: danger
Get used to immediately store your password in a safe place when you create a new account. Losing your password means losing access to the private key: when you will be using mainnet IOTX tokens this means losing your account and all the funds that you have sent to it. Forever!
:::

::: details where does ioctl store the data?
All ioctl created accounts, aliases, and the settings are stored locally on your computer in your home directory:

on Linux / macOS:
`~/.config/ioctl`

You can make a copy of this folder to replicate ioctl settings and accounts to multiple computers.
:::
