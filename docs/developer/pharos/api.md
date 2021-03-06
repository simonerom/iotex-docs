---
title: REST API
---

# Pharos REST API Server

Pharos is the IoTeX server to bridge REST API calls with gRPC API calls, allowing any app to interact with a IoTeX Gateway Node through REST API.

[[toc]]

## Get Account Info by Address

URL:

`https://pharos.iotex.io/v1/accounts/:address`

Example:

`https://pharos.iotex.io/v1/accounts/io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr`

Response:

```json
{
  "accountMeta": {
    "address": "io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr",
    "balance": "123180000000000000000",
    "nonce": "45",
    "pendingNonce": "46",
    "numActions": "59"
  }
}
```

## Get Action Info by Hash

URL:

`https://pharos.iotex.io/v1/actions/hash/:hash`

Example:

`https://pharos.iotex.io/v1/actions/hash/53e729d28b0c69fc66c4317fdc6ee7af292980ce781b56b502e2ee2e0b9ca48a`

Response:

```json
{
  "total": "1",
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "nonce": "1",
          "gasLimit": "20000",
          "gasPrice": "1000000000000",
          "transfer": {
            "amount": "1000000000000000",
            "recipient": "io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr"
          }
        },
        "senderPubKey": "BLhgbOGdny7iNzyHe9axp5KWTb8sMJzad78+bc5cTYRAUqVNF6igy5t9z2jqM2Zneiw17d6xSgbokcDnVRxmuM8=",
        "signature": "awRLFCvU4X5SVyz2IDU5rdjmKjUk3BOchmt/3bmvgi9GJJW3pat4I0i/qqROowPbVJ8nj+eZNQ5Okhgt6ezPgAE="
      },
      "actHash": "53e729d28b0c69fc66c4317fdc6ee7af292980ce781b56b502e2ee2e0b9ca48a",
      "blkHash": "33e1d2858cec24059f22348b862a2f415a21bb14b7d96733249a12e96c542969",
      "blkHeight": "222656",
      "sender": "io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr",
      "gasFee": "10000000000000000",
      "timestamp": "2019-05-17T23:26:20Z"
    }
  ]
}
```

## Send Actions

URL:
`https://pharos.iotex.io/v1/actions/addr/:addr?count={number}&start={number}`

Example:

`https://pharos.iotex.io/v1/actions/addr/io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr?count=2&start=0`

## List Actions by Address

URL:
`https://pharos.iotex.io/v1/actions/addr/:addr?count={number}&start={number}`

Example:

`https://pharos.iotex.io/v1/actions/addr/io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr?count=2&start=0`

Response:

```json
{
  "total": "2",
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "nonce": "135",
          "gasLimit": "200000",
          "gasPrice": "2000000000000",
          "transfer": {
            "amount": "18000000000000000000",
            "recipient": "io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr"
          }
        },
        "senderPubKey": "BMG9A8WXR3flEqOP8gN+qJdyrIHe5tIEr8be5grHMjihJ/3zg719Yzh+xeIhAmsrMU0wSc8wRSjVSOqSbqioNMI=",
        "signature": "ToTUr+uOjflIIUagaEEW7HccSt8+UJmXqbrGK2kr8vxyHbuRTjBcq/b0KrnF8JcztqDkQ+ohjJqtdXpJQH2PUAE="
      },
      "actHash": "0f4e20bdc0e91e65242eb08c5475292962bf92d3d624b2bc5ae61cd6e73e8161",
      "blkHash": "a43825aa49a4a688f136f77bcdfcdb101d41a7c9886badff57ca5c0d605f3042",
      "blkHeight": "216825",
      "sender": "io17ch0jth3dxqa7w9vu05yu86mqh0n6502d92lmp",
      "gasFee": "20000000000000000",
      "timestamp": "2019-05-17T07:14:10Z"
    },
    {
      "action": {
        "core": {
          "version": 1,
          "nonce": "1",
          "gasLimit": "20000",
          "gasPrice": "1000000000000",
          "transfer": {
            "amount": "1000000000000000",
            "recipient": "io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr"
          }
        },
        "senderPubKey": "BLhgbOGdny7iNzyHe9axp5KWTb8sMJzad78+bc5cTYRAUqVNF6igy5t9z2jqM2Zneiw17d6xSgbokcDnVRxmuM8=",
        "signature": "awRLFCvU4X5SVyz2IDU5rdjmKjUk3BOchmt/3bmvgi9GJJW3pat4I0i/qqROowPbVJ8nj+eZNQ5Okhgt6ezPgAE="
      },
      "actHash": "53e729d28b0c69fc66c4317fdc6ee7af292980ce781b56b502e2ee2e0b9ca48a",
      "blkHash": "33e1d2858cec24059f22348b862a2f415a21bb14b7d96733249a12e96c542969",
      "blkHeight": "222656",
      "sender": "io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr",
      "gasFee": "10000000000000000",
      "timestamp": "2019-05-17T23:26:20Z"
    }
  ]
}
```

## List Transfers by Block

URL:

`https://pharos.iotex.io/v1/transfers/block/:blockNum`

Example:

`https://pharos.iotex.io/v1/transfers/block/222669`

```json
{
  "total": "1",
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "nonce": "2",
          "gasLimit": "20000",
          "gasPrice": "1000000000000",
          "transfer": {
            "amount": "1000000000000000",
            "recipient": "io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr"
          }
        },
        "senderPubKey": "BLhgbOGdny7iNzyHe9axp5KWTb8sMJzad78+bc5cTYRAUqVNF6igy5t9z2jqM2Zneiw17d6xSgbokcDnVRxmuM8=",
        "signature": "7eIiG8ahlBUi+QUXJRQKpRpGPfi96aR3RGwWf043M7UYETaAF8FNhRN2cQutN3hsXpVSqsl373bxfbygeuv6egE="
      },
      "actHash": "fa8faa5524e5e9c7891514fbbe3c16ffd28f42bd945858533fd0b5287083faee",
      "blkHash": "9c41f01ce090927df0e9e4669a110555f8f918f76884e16d2939354876e2d57b",
      "blkHeight": "222669",
      "sender": "io1e2nqsyt7fkpzs5x7zf2uk0jj72teu5n6aku3tr",
      "timestamp": "2019-05-17T23:28:30Z"
    }
  ]
}
```

## Get Blockchain Metadata

URL

`https://pharos.iotex.io/v1/chainmeta`

Example:

`https://pharos.iotex.io/v1/chainmeta`

Response:

```json
{
  "height": "5099107",
  "numActions": "5416087",
  "tps": "1",
  "epoch": {
    "num": "9605",
    "height": "5098681",
    "gravityChainStartHeight": "10158100"
  },
  "tpsFloat": 0.16666667
}
```

## List current Block Producers

URL:

`https://pharos.iotex.io/v1/staking/validators`

Example:

`https://pharos.iotex.io/v1/staking/validators`

Response:

```json
[
  {"id":"metanyx","status":true,"details":{"reward":{"annual":0},"locktime":259200,"minimum_amount":"100000000000000000000"}},{"id":"royalland","status":true,"details":{"reward":{"annual":0},"locktime":259200,"minimum_amount":"100000000000000000000"}},

  {"id":"huobiwallet","status":true,"details":{"reward":{"annual":0},"locktime":259200,"minimum_amount":"100000000000000000000"}},{"id":"droute","status":true,"details":{"reward":{"annual":0},"locktime":259200,"minimum_amount":"100000000000000000000"}},

  {"id":"longz","status":true,"details":{"reward":{"annual":0},"locktime":259200,"minimum_amount":"100000000000000000000"}},{"id":"coredev","status":true,"details":{"reward":{"annual":0},"locktime":259200,"minimum_amount":"100000000000000000000"}},

  ...
]
```

## List Buckets by Address

URL:

`https://pharos.iotex.io/v1/votes/addr/:addr`

Example:

`https://pharos.iotex.io/v1/votes/addr/io1t56twy23yjuqscljpjc869hyqw3gpswwj0g228`

Response:

```json
{
  "buckets": [
    {
      "candidateAddress": "io1t56twy23yjuqscljpjc869hyqw3gpswwj0g228",
      "stakedAmount": "2000000000000000000000000",
      "stakedDuration": 7,
      "createTime": "2020-05-07T19:00:20Z",
      "stakeStartTime": "2020-05-07T19:00:20Z",
      "unstakeStartTime": "1970-01-01T00:00:00Z",
      "autoStake": true,
      "owner": "io1t56twy23yjuqscljpjc869hyqw3gpswwj0g228"
    }
  ]
}
```

## Get Bucket by Index

URL:

`https://pharos.iotex.io/v1/votes/index/:index`

Example:

`https://pharos.iotex.io/v1/votes/index/47`

```json
{
  "candidateAddress": "io1t56twy23yjuqscljpjc869hyqw3gpswwj0g228",
  "stakedAmount": "2000000000000000000000000",
  "stakedDuration": 7,
  "createTime": "2020-05-07T19:00:20Z",
  "stakeStartTime": "2020-05-07T19:00:20Z",
  "unstakeStartTime": "1970-01-01T00:00:00Z",
  "autoStake": true,
  "owner": "io1t56twy23yjuqscljpjc869hyqw3gpswwj0g228"
}
```
