---
title: Query Delegates
---

# Query Delegates

[[toc]]

## Query Delegates

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

## Query Probation List

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

## Query Reward

`Usage: ioctl node reward (ALIAS|DELEGATE_ADDRESS)`

```
➜  ioctl node reward whale
io1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5: 45819 IOTX
```
