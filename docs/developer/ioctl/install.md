---
title: Install & Update
---

# Install ioctl

[[toc]]

## Install ioctl

Install ioctl Release Build:

```
curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh
```

install ioctl Latest/Unstable Build:

```
curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh -s "unstable"
```

## Show Version

`Usage: ioctl version`

```
→  ioctl version
Client:
packageVersion:"v0.5.0" packageCommitID:"a4308fc82bea22cfaa45addef679a09f41f3a998" gitStatus:"clean" goVersion:"go version go1.11.5 darwin/amd64" buildTime:"2019-04-20-PDT/18:04:37"

Server: api.iotex.one:443
packageVersion:"v0.5.0" packageCommitID:"a4308fc82bea22cfaa45addef679a09f41f3a998" gitStatus:"clean" goVersion:"go version go1.11.5 linux/amd64" buildTime:"2019-04-21-UTC/01:04:11"
```

## Update ioctl

`Usage: ioctl update [-t version-type]`

Update ioctl Release Build:

```
➜  ioctl update
Downloading the latest stable version ...
Password:
ioctl is up-to-date now.
```

update ioctl Latest/Unstable Build:

```
➜  ioctl update -t unstable
Downloading the latest unstable version ...
Password:
ioctl is up-to-date now.
```
