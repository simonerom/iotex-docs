---
title: Configure ioctl
---

# Configure ioctl

[[toc]]

`Variables: [endpoint, wallet, explorer, defaultacc, language, nsv2height]`\
`Explorers: [iotexscan (default), iotxplorer, custom]`

## Set Config

`Usage: ioctl config set VARIABLE VALUE`

```
➜  ioctl config set endpoint api.iotex.one:443
endpoint is set to api.iotex.one:443
```

## Get Config

`Usage: ioctl config get VARIABLE | all`

```
➜  ioctl config get wallet
/Users/IoTeX/.config/ioctl/default
```

## Reset Config

`Usage: ioctl config reset`

```
➜  ioctl config reset
Config reset to default values
```
