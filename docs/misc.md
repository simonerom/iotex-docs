---
title: References
---

## API

### GetAccount

```
Usage:
  Get Account Details
Request:
  Address: Account Encoded Address
Response:
  AccountMeta: Account Metadata
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}' 127.0.0.1:14014 iotexapi.APIService.GetAccount

Resolved method descriptor:
rpc GetAccount ( .iotexapi.GetAccountRequest ) returns ( .iotexapi.GetAccountResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "accountMeta": {
    "address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd",
    "balance": "100000000000000000000000000",
    "pendingNonce": 1
  }
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetActions

```
Usage:
  Get Actions By Index
Request:
  ByIndex: GetActionsByIndexRequest
    -Start: Start Index of Actions
    -Count: Number of Actions
Response:
  ActionInfo: List of Action Info
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"byIndex": {"start": 0, "count": 2}}' 127.0.0.1:14014 iotexapi.APIService.GetActions

Resolved method descriptor:
rpc GetActions ( .iotexapi.GetActionsRequest ) returns ( .iotexapi.GetActionsResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "gasPrice": "0",
          "grantReward": {
            "height": 1
          }
        },
        "senderPubKey": "BGP1RCD6FmPHrgmDfKRMgCnTUXT0qp3Vc2lgtLgoYcR3n4bJmJFHv+WZNJqdcnJVH0jTp1rgN2675CIsNXmze7E=",
        "signature": "5LqZitihGMQRLnW++DQ0d7/O3zGbjyKlXGm/i9f3/nx2Z3HHwHRgOCqNAIXDAePZmWlb8ktmn2cyET8WXhowVAE="
      },
      "actHash": "c6f41c716b5c328fc821bd388cb73717785af91abe91c593d821332a8192ff63",
      "blkHash": "9631129b49d5894c738146a735f24982a59ba92bc03fbbf9b194bd51f2639cd2",
      "timestamp": "2019-04-16T23:37:38.925432Z"
    },
    {
      "action": {
        "core": {
          "version": 1,
          "gasPrice": "0",
          "grantReward": {
            "height": 2
          }
        },
        "senderPubKey": "BGP1RCD6FmPHrgmDfKRMgCnTUXT0qp3Vc2lgtLgoYcR3n4bJmJFHv+WZNJqdcnJVH0jTp1rgN2675CIsNXmze7E=",
        "signature": "IJRc4zS1ZZy1HsKS05TRunN2zeeHNj3dlsQu5Vd8/ywGFulMXlwGzQgDfF3sVoLVFajx7IogzxVYSGdcSI6GFgE="
      },
      "actHash": "44807c4a778adb0ee063225e77d1a0c1f65b1acfb00c67f462d7cd6e1f50a22e",
      "blkHash": "3ecddc0908f6762d8d6978594f5d75529eaac2ca6618524047b5c0b88c4b3124",
      "timestamp": "2019-04-16T23:37:48.925676Z"
    }
  ]
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetActions

```
Usage:
  Get Action By Action Hash
Request:
  ByHash: GetActionByHashRequest
    -ActionHash: Hash of Action
    -CheckPending: Wether To Check Pending Actions in Action Pool
Response:
  ActionInfo: Action Info
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"byHash": {"actionHash": "c6f41c716b5c328fc821bd388cb73717785af91abe91c593d821332a8192ff63", "checkPending": false}}' 127.0.0.1:14014 iotexapi.APIService.GetActions

Resolved method descriptor:
rpc GetActions ( .iotexapi.GetActionsRequest ) returns ( .iotexapi.GetActionsResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "gasPrice": "0",
          "grantReward": {
            "height": 1
          }
        },
        "senderPubKey": "BGP1RCD6FmPHrgmDfKRMgCnTUXT0qp3Vc2lgtLgoYcR3n4bJmJFHv+WZNJqdcnJVH0jTp1rgN2675CIsNXmze7E=",
        "signature": "5LqZitihGMQRLnW++DQ0d7/O3zGbjyKlXGm/i9f3/nx2Z3HHwHRgOCqNAIXDAePZmWlb8ktmn2cyET8WXhowVAE="
      },
      "actHash": "c6f41c716b5c328fc821bd388cb73717785af91abe91c593d821332a8192ff63",
      "blkHash": "9631129b49d5894c738146a735f24982a59ba92bc03fbbf9b194bd51f2639cd2",
      "timestamp": "2019-04-16T23:37:38.925432Z"
    }
  ]
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetActions

```
Usage:
  Get Actions By Address
Request:
  ByAddr: GetActionsByAddressRequest
    -Address: Encoded Address
    -Start: Start Index of Actions
    -Count: Number of Actions
Resposne:
  ActionInfo: List of Action Info
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"byAddr": {"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd", "start": 0, "count": 1}}' 127.0.0.1:14014 iotexapi.APIService.GetActions

Resolved method descriptor:
rpc GetActions ( .iotexapi.GetActionsRequest ) returns ( .iotexapi.GetActionsResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "nonce": 1,
          "gasLimit": 10000,
          "gasPrice": "10000000000000",
          "transfer": {
            "amount": "1000000000000000000",
            "recipient": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy"
          }
        },
        "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=",
        "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="
      },
      "actHash": "060a93a4784469f9e587da0c90ed20df58b0effb50d6b8ddcd9a4c65ad55fcbd",
      "blkHash": "6344115bcd43b7315ffdf5338d0f97b26caed7734efea034a27208f64670f5e9",
      "timestamp": "2019-04-17T00:10:30.468419Z"
    }
  ]
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetActions

```
Usage:
  Get Unconfirmed Actions By Address
Request:
  UnconfirmedByAddr: GetUnconfirmedActionsByAddressRequest
    -Address: Encoded Address
    -Start: Start Index of Unconfirmed Actions
    -Count: Number of Unconfirmed Actions
Resposne:
  ActionInfo: List of Action Info
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"unconfirmedByAddr": {"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd", "start": 0, "count": 1}}' 127.0.0.1:14014 iotexapi.APIService.GetActions

Resolved method descriptor:
rpc GetActions ( .iotexapi.GetActionsRequest ) returns ( .iotexapi.GetActionsResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{

}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetActions

```
Usage:
  Get Actions By Block
Request:
  ByBlk: GetActionsByBlockRequest
    -BlkHash: Block Hash
    -Start: Start Index of Actions
    -Count: Number of Actions
Resposne:
  ActionInfo: List of ActionInfo
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"byBlk": {"blkHash": "6344115bcd43b7315ffdf5338d0f97b26caed7734efea034a27208f64670f5e9", "start": 0, "count": 1}}' 127.0.0.1:14014 iotexapi.APIService.GetActions

Resolved method descriptor:
rpc GetActions ( .iotexapi.GetActionsRequest ) returns ( .iotexapi.GetActionsResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "nonce": 1,
          "gasLimit": 10000,
          "gasPrice": "10000000000000",
          "transfer": {
            "amount": "1000000000000000000",
            "recipient": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy"
          }
        },
        "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=",
        "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="
      },
      "actHash": "060a93a4784469f9e587da0c90ed20df58b0effb50d6b8ddcd9a4c65ad55fcbd",
      "blkHash": "6344115bcd43b7315ffdf5338d0f97b26caed7734efea034a27208f64670f5e9",
      "timestamp": "2019-04-17T00:10:30.468419Z"
    }
  ]
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetBlockMetas

```
Usage:
  Get Block Metadata By Index
Request:
  ByIndex: GetBlockMetasByIndexRequest
    -Start: Start Block Height
    -Count: Number of Blocks
Response:
  BlkMetas: List of Block Metadata
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"byIndex": {"start": 1, "count": 2}}' 127.0.0.1:14014 iotexapi.APIService.GetBlockMetas

Resolved method descriptor:
rpc GetBlockMetas ( .iotexapi.GetBlockMetasRequest ) returns ( .iotexapi.GetBlockMetasResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "blkMetas": [
    {
      "hash": "b7754977cae0f2a45a4ae2b7f0dfc20487e5acfa93594e5eaa1e93f5ec88800f",
      "height": 1,
      "timestamp": "2019-04-17T00:08:50.466089Z",
      "numActions": 1,
      "producerAddress": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy",
      "transferAmount": "0",
      "txRoot": "285ff4de28a16dafc49d8c46d24fa99433ac08f24be8962c7a01ade65068a34a",
      "receiptRoot": "60d78681f8e531307e9ef1916f8ff8d387d922e47d0459e14d575f40ac042195",
      "deltaStateDigest": "206c92297a78c59ff6fe3a6351e755fda8ae9bb40b25084e0588b0af43445ca7"
    },
    {
      "hash": "47406baaee6af2775ef61c46373b6d0202b228f11e1a7a2f986f7d617f64f593",
      "height": 2,
      "timestamp": "2019-04-17T00:09:00.465902Z",
      "numActions": 1,
      "producerAddress": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy",
      "transferAmount": "0",
      "txRoot": "d63be4dc98821a28410f694a4fd71179e79db638496a9510c67e5b1a0fc0dac4",
      "receiptRoot": "89cd1950dc9b51f8cf7078ffb38046d31e421c3add9c06abdd3cbcc99e5bf265",
      "deltaStateDigest": "8a7d0cee0eb6b6010088e0b4a2996668a29eb595ea83533b9e33fdecc15bf758"
    }
  ]
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetBlockMetas

```
Usage:
  Get Block Metadata By Block Hash
Request:
  ByHash: GetBlockMetaByHashRequest
    -BlkHash: Block Hash
Response:
  BlkMetas: Block Metadata
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"byHash": {"blkHash": "b7754977cae0f2a45a4ae2b7f0dfc20487e5acfa93594e5eaa1e93f5ec88800f"}}' 127.0.0.1:14014 iotexapi.APIService.GetBlockMetas

Resolved method descriptor:
rpc GetBlockMetas ( .iotexapi.GetBlockMetasRequest ) returns ( .iotexapi.GetBlockMetasResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "blkMetas": [
    {
      "hash": "b7754977cae0f2a45a4ae2b7f0dfc20487e5acfa93594e5eaa1e93f5ec88800f",
      "height": 1,
      "timestamp": "2019-04-17T00:08:50.466089Z",
      "numActions": 1,
      "producerAddress": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy",
      "transferAmount": "0",
      "txRoot": "285ff4de28a16dafc49d8c46d24fa99433ac08f24be8962c7a01ade65068a34a",
      "receiptRoot": "60d78681f8e531307e9ef1916f8ff8d387d922e47d0459e14d575f40ac042195",
      "deltaStateDigest": "206c92297a78c59ff6fe3a6351e755fda8ae9bb40b25084e0588b0af43445ca7"
    }
  ]
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetChainMeta

```
Usage:
  Get Blockchain Metadata
Request:
  N/A
Response:
  ChainMeta: Blockchain Metadata
```

Demo:

```
➜  ~ grpcurl -v -plaintext 127.0.0.1:14014 iotexapi.APIService.GetChainMeta

Resolved method descriptor:
rpc GetChainMeta ( .iotexapi.GetChainMetaRequest ) returns ( .iotexapi.GetChainMetaResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "chainMeta": {
    "height": 88,
    "numActions": 90,
    "epoch": {
      "num": 2,
      "height": 49,
      "gravityChainStartHeight": 49
    }
  }
}

Response trailers received:
(empty)
Sent 0 requests and received 1 response
```

### GetServerMeta

```
Usage:
  Get Server Metadata
Request:
  N/A
Reponse:
  ServerMeta: Server Metadata
```

Demo:

```
➜  ~ grpcurl -v -plaintext 127.0.0.1:14014 iotexapi.APIService.GetServerMeta

Resolved method descriptor:
rpc GetServerMeta ( .iotexapi.GetServerMetaRequest ) returns ( .iotexapi.GetServerMetaResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "serverMeta": {
    "packageVersion": "v0.7.0-35-g3baac429",
    "packageCommitID": "3baac429420ae74a2d1e97a866f745ca796fc192",
    "gitStatus": "clean",
    "goVersion": "go version go1.12.5 darwin/amd64",
    "buildTime": "2019-06-17-PDT/16:32:37"
  }
}

Response trailers received:
(empty)
Sent 0 requests and received 1 response
```

### SendAction

```
Usage:
  Send Action
Request:
  Action: Action
Response:
  ActionHash: Hash of Action
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "10", "transfer": {"amount": "100", "recipient": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy"}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}' 127.0.0.1:14014 iotexapi.APIService.SendAction

Resolved method descriptor:
rpc SendAction ( .iotexapi.SendActionRequest ) returns ( .iotexapi.SendActionResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "actionHash": "8890dca441898a3d942de05f7514f32c96afbcde1493ddd76aed1aaecb60af06"
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetReceiptByAction

```
Usage:
  Get Action Receipt By Action Hash
Request:
  ActionHash: Action Hash
Response:
  Receipt: Action Receipt
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"actionHash": "060a93a4784469f9e587da0c90ed20df58b0effb50d6b8ddcd9a4c65ad55fcbd"}' 127.0.0.1:14014 iotexapi.APIService.GetReceiptByAction

Resolved method descriptor:
rpc GetReceiptByAction ( .iotexapi.GetReceiptByActionRequest ) returns ( .iotexapi.GetReceiptByActionResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "receiptInfo": {
    "receipt": {
      "status": 1,
      "blkHeight": 106,
      "actHash": "BgqTpHhEafnlh9oMkO0g31iw7/tQ1rjdzZpMZa1V/L0=",
      "gasConsumed": 10000,
      "contractAddress": "io1enfa3p3aysdueq85vvprzzndjs4fp6z32hf7xs"
    },
    "blkHash": "c331e7610109ab2e799b0341a57f926fe130ed6361af320a59dd8520a838e2e1"
  }
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### ReadContract

```
Usage:
  Read Contract State
Request:
  Action: Action (Must Be An Execution)
Response:
  Data: Return Value in Execution Receipt
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "10", "execution": {"amount": "0", "contract": ""}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}' 127.0.0.1:14014 iotexapi.APIService.ReadContract

Resolved method descriptor:
rpc ReadContract ( .iotexapi.ReadContractRequest ) returns ( .iotexapi.ReadContractResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "receipt": {
    "status": 1,
    "blkHeight": 26,
    "actHash": "2bAgDlDdF84K+XNCW95wdjMpmQqVP2b04ghyMXoN6J4=",
    "gasConsumed": 10000,
    "contractAddress": "io18vlvlj0v02yye70kpqtzhu4uek3qqz27zm7g42"
  }
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### ReadState

```
Usage:
  Read State on Blockchain
Request:
  ProtocolID: Protocol ID
  MethodName: Method To Be Invoked To Read State
  Arguments: List of Method Arguments
  Height: BlockHeight of Request // optional, if empty, read from tip 
Response:
  Data: State Result
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"protocolID": "cmV3YXJkaW5n", "methodName": "VW5jbGFpbWVkQmFsYW5jZQ==", "arguments": "aW8xanV2eDVnMDYzZXU0dHM4MzJudWtwNHZnY3drMmduYzVjdTlheWQ="}' 127.0.0.1:14014 iotexapi.APIService.ReadState

Resolved method descriptor:
rpc ReadState ( .iotexapi.ReadStateRequest ) returns ( .iotexapi.ReadStateResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "data": "MA=="
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### SuggestGasPrice

```
Usage:
  Get Suggested Gas Price
Request:
  N/A
Response:
  GasPrice: Gas Price
```

Demo:

```
➜  ~ grpcurl -v -plaintext 127.0.0.1:14014 iotexapi.APIService.SuggestGasPrice

Resolved method descriptor:
rpc SuggestGasPrice ( .iotexapi.SuggestGasPriceRequest ) returns ( .iotexapi.SuggestGasPriceResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "gasPrice": 1
}

Response trailers received:
(empty)
Sent 0 requests and received 1 response
```

### EstimateGasForAction

```
Usage:
  Get Estimated Gas For Action
Request:
  Action: Action
Response:
  Gas: Gas
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "10", "execution": {"amount": "0", "contract": ""}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}' 127.0.0.1:14014 iotexapi.APIService.EstimateGasForAction

Resolved method descriptor:
rpc EstimateGasForAction ( .iotexapi.EstimateGasForActionRequest ) returns ( .iotexapi.EstimateGasForActionResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "gas": 10000
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetEpochMeta

```
Usage:
  Get Epoch Metadata Given an Epoch Number
Request:
  EpochNumber: Epoch Number
Response:
  EpochData: Basic Epoch Information
  TotalBlocks: Number of Blocks in the Epoch
  BlockProducersInfo: List of Block Producer Information
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"epochNumber": 1}' api.iotex.one:80 iotexapi.APIService.GetEpochMeta

Resolved method descriptor:
rpc GetEpochMeta ( .iotexapi.GetEpochMetaRequest ) returns ( .iotexapi.GetEpochMetaResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc
date: Wed, 17 Apr 2019 02:31:41 GMT
server: envoy
x-envoy-upstream-service-time: 15

Response contents:
{
  "epochData": {
    "num": 1,
    "height": 1,
    "gravityChainStartHeight": 7502300
  },
  "totalBlocks": 360,
  "blockProducersInfo": [
    {
      "address": "io1gh7xfrsnj6p5uqgjpk9xq6jg9na28aewgp7a9v",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1scs89jur7qklzh5vfrmha3c40u8yajjx6kvzg9",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io159fv8mu9d5djk8u2t0flgw4yqmt6fg98uqjka8",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1cup9k8hl8fp40vrj29ex8djc346780dk223end",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1wv5m0xyermvr2n0wjx2cjsqwyk863drdl5qfyn",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1gf08snppu2a2wfd50pjas2j6q2kcxjzqph3pep",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1u5ff879gg2dw9vfpxr2tsmuaz07e2rea6gvl7s",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1ar5l5s268rtgzshltnqv88mua06ucm58dx678y",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1xsx5n94kg2zv64r7tm8vyz9mh86amfak9ka9xx",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1x9kjkr0qv2fa7j4t2as8lrj223xxsqt4tl7xp7",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1fks575kklxafq4fwjccmz5d3pmq5ynxk5h6h0v",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io12yxdwewry70gr9fs6fphyfaky9c7gurmzk8f4f",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1c3r4th3zrk4uhv83a9gr4gvn3y6pzaj6mc84ea",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io15fqav3tugm96ge7anckx0k4gukz5m4mqf0jpv3",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io14vmhs9c75r2ptxdaqrtk0dz7skct30pxmt69d9",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1v0q5g2f8z6l3v25krl677chdx7g5pwt9kvqfpc",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1z7mjef7w528nasnsafan0rp6yuvkvq405l6r8j",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1xsdegzr2hdj5sv5ad4nr0yfgpsd98e40u6svem",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1nyjs526mnqcsx4twa7nptkg08eclsw5c2dywp4",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1du4eq4f88n4wyc026l3gamjwetlgsg4jz7j884",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io127ftn4ry6wgxdrw4hcd6gdwqlq70ujk98dvtw5",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1jafqlvntcxgyp6e0uxctt3tljzc3vyv5hg4ukh",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 16
    },
    {
      "address": "io15npzu93ug8r3zdeysppnyrcdu2xssz0lcam9l9",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 14
    }
  ]
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### GetRawBlocks

```
Usage:
  Get A List of Raw Block Data
Request:
  StartHeight: Start Block Height
  Count: Block Count
  WithReceipts: Whether to Include Action Receipts in Each Returned Block
Response:
  Blocks: A List of Raw Block Data
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"startHeight": 1, "count": 2, "withReceipts": true}' 127.0.0.1:14014 iotexapi.APIService.GetRawBlocks

Resolved method descriptor:
rpc GetRawBlocks ( .iotexapi.GetRawBlocksRequest ) returns ( .iotexapi.GetRawBlocksResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "blocks": [
    {
      "block": {
        "header": {
          "core": {
            "version": 1,
            "height": 1,
            "timestamp": "2019-06-17T23:33:04.755448Z",
            "prevBlockHash": "N9XWktUXQo60gwwqV17n5trTKkbUp/Ob6UY841g+AtA=",
            "txRoot": "5Pn9BOMAgzj0LX9o6AD8O/FbDueiA5eS+9MUMzQ6QwY=",
            "deltaStateDigest": "tE9Ywa/2MvNDO7F8scFh9/4ijrGXTClVunKbp5eeU8M=",
            "receiptRoot": "EbGK2TCBJbVMEn04tBRy0PdceJ1O2N3IxnU7Fggjl2o="
          },
          "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
          "signature": "oZxrQvUteVeq+SMCxg6I+MwJ4IkKWFzDhFi3hIQ9j9IYL69RRWsRc+pxXAjdfRCiLuCXGnkaP+nUXnR3Atm8EwA="
        },
        "body": {
          "actions": [
            {
              "core": {
                "version": 1,
                "gasPrice": "0",
                "grantReward": {
                  "height": 1
                }
              },
              "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
              "signature": "gE9H+i0EZNTVHhoX7fq4xn6H8FqBrFKK0YyfcH16mrFT0rSvgVDb/ov2hAwgMh5kJVHaD8TG6UX7fayK5lpCXQA="
            }
          ]
        },
        "footer": {
          "timestamp": "0001-01-01T00:00:00Z"
        }
      },
      "receipts": [
        {
          "blkHeight": 1,
          "actHash": "5Pn9BOMAgzj0LX9o6AD8O/FbDueiA5eS+9MUMzQ6QwY=",
          "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"
        }
      ]
    },
    {
      "block": {
        "header": {
          "core": {
            "version": 1,
            "height": 2,
            "timestamp": "2019-06-17T23:33:14.756354Z",
            "prevBlockHash": "7bI37oyjBvl+TTx5Fw089xCe8AJb7YneCsmqOLiJ88k=",
            "txRoot": "qQZkW9iZ+xsl0SjVJmsIDDpQ9RcWyge/sBcvHOZFgKQ=",
            "deltaStateDigest": "S7dJ9+p/BUNaiRFQLl6+Lc/u5B5s4jlJ5LldIFwof9c=",
            "receiptRoot": "S2ZBa1FtEUSDmBqTbnS4w4RfhHfyyDJofaxL1U36+9I="
          },
          "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
          "signature": "s/JZHbuZaMKOqWACHsGbezciRBSS7XYU9QuY2w3BgM8pEYWtYXZYWVJiHU3r0Z1Z7PXFMKc1glpONXkLiXwReQA="
        },
        "body": {
          "actions": [
            {
              "core": {
                "version": 1,
                "gasPrice": "0",
                "grantReward": {
                  "height": 2
                }
              },
              "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
              "signature": "gMlB2v2RwSHnNuilZX89K+EOtCKDfmfouI97GO+DcU82VHm9LE4NG1TVgUQe6z94aOSHrEwyUKtINuv5QOmNIgA="
            }
          ]
        },
        "footer": {
          "timestamp": "0001-01-01T00:00:00Z"
        }
      },
      "receipts": [
        {
          "blkHeight": 2,
          "actHash": "qQZkW9iZ+xsl0SjVJmsIDDpQ9RcWyge/sBcvHOZFgKQ=",
          "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"
        }
      ]
    }
  ]
}

Response trailers received:
(empty)
Sent 1 request and received 1 response
```

### StreamBlocks

```
Usage:
  Subscribe to Block Creations
Request:
  N/A
Response:
  Block: Newly Created Block Data
```

Demo:

```
➜  ~ grpcurl -v -plaintext 127.0.0.1:14014 iotexapi.APIService.StreamBlocks

Resolved method descriptor:
rpc StreamBlocks ( .iotexapi.StreamBlocksRequest ) returns ( stream .iotexapi.StreamBlocksResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "block": {
    "block": {
      "header": {
        "core": {
          "version": 1,
          "height": 365,
          "timestamp": "2019-06-18T00:36:41.655617Z",
          "prevBlockHash": "p3qrdtYuIfan08r8ZB4JFdpjaYAWUMGLrsxxn/nGO6g=",
          "txRoot": "F484nSOb8CVSNZiOETu1eEfgbwW9kGjX+zFv/OXaAvI=",
          "deltaStateDigest": "z9zsiQmR7MZh6uEBPMgPGO5snxq1YJW9ESCoZun/fD4=",
          "receiptRoot": "8Xb+12FYKrbN2mM4UiFd3htkyagI8U5xX8mtUJegmgY="
        },
        "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
        "signature": "7qJKGnbCDJsfSWxuE9NYsFiqwxr6Urgz6NNu6KUZuWhygPDrEpD6uC4qgqplwFXXF7Zhlclwh7UQlaEcL0i5ZAE="
      },
      "body": {
        "actions": [
          {
            "core": {
              "version": 1,
              "gasPrice": "0",
              "grantReward": {
                "height": 365
              }
            },
            "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
            "signature": "WWDGUs/EbG1mvTc2MAD06YSZ71bnXK9BBCzTezn2aQBKZCB2PiKbuzQM43dB7AZVmmY0Q7A/JOHqgq/TyZyi1wA="
          }
        ]
      },
      "footer": {
        "timestamp": "0001-01-01T00:00:00Z"
      }
    },
    "receipts": [
      {
        "blkHeight": 365,
        "actHash": "F484nSOb8CVSNZiOETu1eEfgbwW9kGjX+zFv/OXaAvI=",
        "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"
      }
    ]
  }
}
```

### StreamLogs
```
Usage:
  Get Logs filtered by contract address and Topics in stream
Request:
  Filter: LogsFilter
    -Address: List of Addresses
    -Topics: List of Topics 

Response:
  Logs: List of Logs
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"filter": {}}'  127.0.0.1:14014 iotexapi.APIService.StreamLogs

Resolved method descriptor:
rpc StreamLogs ( .iotexapi.StreamLogsRequest ) returns ( stream .iotexapi.StreamLogsResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "log": {
    "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",
    "data": "EilpbzEybWd0dG1mYTJmZm45dXF2bjB5bjM3ZjRuejQzZDI0OGwyZ2E4NRoTODAwMDAwMDAwMDAwMDAwMDAwMA==",
    "blkHeight": "4861831",
    "actHash": "f4P6zde4DcxSG+zLP8LsBXR/gwsXA8ZzMsrDI38swkw="
  }
}

```

### EstimateActionGasConsumption
```
Usage:
  Get Estimated Action Gas Consumption By Transfer 
Request:
  Transfer: iotextypes.Transfer 
    -Amount: Transfer Amount 
    -Recipient: Recipient Address  
    -Payload: Payload 
  CallerAddress: Address of Caller 

Response:
  Gas: Estimated Gas Amount 
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"transfer": {"amount":"100000", "recipient":"io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}, "callerAddress": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}'  127.0.0.1:14014 iotexapi.APIService.EstimateActionGasConsumption

Resolved method descriptor:
rpc EstimateActionGasConsumption ( .iotexapi.EstimateActionGasConsumptionRequest ) returns ( .iotexapi.EstimateActionGasConsumptionResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "gas": "10000"
}
```

### EstimateActionGasConsumption
```
Usage:
  Get Estimated Action Gas Consumption By Execution 
Request:
  Execution: iotextypes.Execution 
    -Amount: Execution Amount 
    -Contract: Contract Address  
    -Data: Data
  CallerAddress: Address of Caller 

Response:
  Gas: Estimated Gas Amount 
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"execution": {"amount":"0", "contract":"io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"}, "callerAddress": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}' 127.0.0.1:14014 iotexapi.APIService.EstimateActionGasConsumption

Resolved method descriptor:
rpc EstimateActionGasConsumption ( .iotexapi.EstimateActionGasConsumptionRequest ) returns ( .iotexapi.EstimateActionGasConsumptionResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "gas": "10000"
}
```

### GetLogs
```
Usage:
  Get Logs filtered by contract address and Topics with given Block hash
Request:
  Filter: LogsFilter
    -Address: List of Addresses 
    -Topics: List of Topics 
  ByBlock: GetLogsByBlock 
    -BlockHash: blockhash

Response:
  Logs: List of Logs
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"filter": {}, "byBlock": {"blockHash": "221e7f14dddd57a739975b943bfffb1cbfcffa1ee043cf693b92af987e42ed93"}}' 127.0.0.1:14014 iotexapi.APIService.GetLogs

Resolved method descriptor:
rpc GetLogs ( .iotexapi.GetLogsRequest ) returns ( .iotexapi.GetLogsResponse );

Request metadata to send:
(empty)

Response headers received:
(empty)

```

### GetLogs
```
Usage:
  Get Logs filtered by contract address and Topics with given Range
Request:
  Filter: LogsFilter
    -Address: List of Addresses
    -Topics: List of Topics 
  ByRange: GetLogsByRange 
    -FromBlock: Start Block Height 
    -Count: Count of Blocks 

Response:
  Logs: List of Logs
```

Demo:

```
➜  ~ grpcurl -v -plaintext -d '{"filter": {}, "byRange": {"fromBlock": "12000", "count": "2"}}' 127.0.0.1:14014 iotexapi.APIService.GetLogs

Resolved method descriptor:
rpc GetLogs ( .iotexapi.GetLogsRequest ) returns ( .iotexapi.GetLogsResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "logs": [
    {
      "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",
      "data": "EilpbzFjNXp3aDI0cGM0ejg3dHF3NG02ejZjNHk1NDRwd3N2OG5ycm02NhoUMTYwMDAwMDAwMDAwMDAwMDAwMDA=",
      "blkHeight": "12000",
      "actHash": "NDSsKbgjqU5jP4LWr2xoq/kpu9s8g0C4tpF/PiDTFkI="
    },
    {
      "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",
      "data": "EilpbzFjNXp3aDI0cGM0ejg3dHF3NG02ejZjNHk1NDRwd3N2OG5ycm02NhoUMTYwMDAwMDAwMDAwMDAwMDAwMDA=",
      "blkHeight": "12001",
      "actHash": "6+RK0qv5kZ3nJ014NqLlEadmnMaMS1KPWkE5mZLmSGA="
    }
  ]
}

```

### GetEvmTransfersByActionHash
```
Usage:
  Get EVM Transfer By Action Hash  
Request:
  ActionHash: Action Hash 

Response:
  ActionEvmTransfers: Action EVM transfer 
```

Demo: TBD (will deploy soon)

### GetEvmTransfersByBlockHeight
```
Usage:
  Get EVM Transfer By Block Height   
Request:
  BlockHeight: Block Height  

Response:
  BlockEvmTransfers: Block EVM transfer 
```

Demo: TBD (will deploy soon)


## Analytics

Analytics is a GraphQL web interface for reading the analyzed blockchain data. You can try it [here](https://analytics.iotexscan.io).

### Delegate

#### Bookkeeping

```
Usage:
  Bookkeeping gives delegates an overview of the reward distributions to their voters within a range of epochs

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  delegateName: delegate name
  percentage: percentage of reward distribution
  includeFoundationBonus: whether include foundation bonus as part of the reward distribution
  pagination:
    skip: starting index of displaying reward distribution list
    first: number of reward distributions to display

Response:
  exist: whether the delegate has bookkeeping information within the specified epoch range
  rewardDistribution:
    voterEthAddress: voter’s ERC20 address
    voterIotexAddress: voter’s IoTeX address
    amount: amount of reward distribution
  count:  total number of reward distributions
```

#### Productivity

```
Usage:
  Productivity gives block productivity of producers within a range of epochs

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  delegateName: producer name

Response:
  exist: whether the delegate has productivity information within the specified epoch range
  production: number of block productions
  expectedProduction: number of expected block productions
```

#### Reward

```
Usage:
  Rewards provides reward detail information for candidates within a range of epochs

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  delegateName: candidate name

Response:
  exist: whether the delegate has reward information within the specified epoch range
  blockReward: amount of block rewards
  epochReward: amount of epoch rewards
  foundationBonus: amount of foundation bonus
```

#### BucketInfo

```
Usage:
  BucketInfo provides voting bucket detail information for candidates within a range of epochs

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  delegateName: candidate name

Response:
  exist: whether the delegate has voting bucket information within the specified epoch range
  bucketInfoList:
    epochNumber: epoch number
    bucketInfo:
      voterIotexAddress: voter's IoTeX address
      voterEthAddress: voter’s ERC20 address
      isNative: whether the bucket is native
      votes: voter's votes
      weightedVotes: voter’s weighted votes
      startTime: bucket start time
      remainingDuration: bucket remaining duration
      decay: whether the vote weight decays
      pagination:
        skip: starting index of displaying bucket list
        first: number of buckets to display
    count: total number of buckets in the given epoch for the given delegate
```

#### Staking

```
Usage:
  Staking provides staking information for candidates within a range of epochs

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  delegateName: candidate name

Response:
  exist: whether the delegate has staking information within the specified epoch range
  stakingInfo:
    epochNumber: epoch number
    selfStaking: candidate’s self-staking amount
    totalStaking: total staking amount
```

#### ProbationHistoricalRate

```
Usage:
  ProbationHistoricalRate provides the rate of probation for a given delegate

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  delegateName: candidate name

Response:
  probationHistoricalRate: probation historical rate
```

Demo:

```
Sample Request:

query{
  delegate(startEpoch: 1500, epochCount: 2, delegateName: "blackpool"){
    bookkeeping(percentage: 90, includeFoundationBonus: true){
      exist
      rewardDistribution(pagination: {skip: 0, first: 2}){
        voterEthAddress
        amount
      }
      count
    }
    reward{
      exist
      blockReward
      epochReward
      foundationBonus
    }
    productivity{
      exist
      production
      expectedProduction
    }
    bucketInfo{
      exist
      bucketInfoList{
        epochNumber
        bucketInfo{
          voterEthAddress
          weightedVotes
        }
        count
      }
    }
    staking{
      exist
      stakingInfo{
        epochNumber
        selfStaking
        totalStaking
      }
    }
    probationHistoricalRate
  }
}

Sample Response:

{
  "data": {
    "delegate": {
      "bookkeeping": {
        "exist": true,
        "rewardDistribution": [
          {
            "voterEthAddress": "0x2ed3767cfcbceb42ff5f3642d4df6f851b947073",
            "amount": "249296733398649281"
          },
          {
            "voterEthAddress": "0x6729cdc9172b00ac69f4ce3f98de2eb4d0686925",
            "amount": "5264917870144216244"
          }
        ],
        "count": 4
      },
      "reward": {
        "exist": true,
        "blockReward": "0",
        "epochReward": "329819772195117893866",
        "foundationBonus": "160000000000000000000"
      },
      "productivity": {
        "exist": false,
        "production": "",
        "expectedProduction": ""
      },
      "bucketInfo": {
        "exist": true,
        "bucketInfoList": [
          {
            "epochNumber": 1500,
            "bucketInfo": [
              {
                "voterEthAddress": "2ed3767cfcbceb42ff5f3642d4df6f851b947073",
                "weightedVotes": "12050042619210072913916"
              },
              {
                "voterEthAddress": "6729cdc9172b00ac69f4ce3f98de2eb4d0686925",
                "weightedVotes": "254485824410815439561517"
              },
              {
                "voterEthAddress": "d8e70e5029e5353e8d360365d5273ed329cc4918",
                "weightedVotes": "3203226341724952466266885"
              },
              {
                "voterEthAddress": "d8e70e5029e5353e8d360365d5273ed329cc4918",
                "weightedVotes": "2838636602552620757933254"
              },
              {
                "voterEthAddress": "fe7bcb3676aabe9a6b39cb23f3a5fa41eed7ad1b",
                "weightedVotes": "15000000000000000000000000"
              }
            ],
            "count": 5
          },
          {
            "epochNumber": 1501,
            "bucketInfo": [
              {
                "voterEthAddress": "2ed3767cfcbceb42ff5f3642d4df6f851b947073",
                "weightedVotes": "12050042619210072913916"
              },
              {
                "voterEthAddress": "6729cdc9172b00ac69f4ce3f98de2eb4d0686925",
                "weightedVotes": "254485824410815439561517"
              },
              {
                "voterEthAddress": "d8e70e5029e5353e8d360365d5273ed329cc4918",
                "weightedVotes": "3203226341724952466266885"
              },
              {
                "voterEthAddress": "d8e70e5029e5353e8d360365d5273ed329cc4918",
                "weightedVotes": "2838636602552620757933254"
              },
              {
                "voterEthAddress": "fe7bcb3676aabe9a6b39cb23f3a5fa41eed7ad1b",
                "weightedVotes": "15000000000000000000000000"
              }
            ],
            "count": 5
          }
        ]
      },
      "staking": {
        "exist": true,
        "stakingInfo": [
          {
            "epochNumber": 1500,
            "selfStaking": "5039748000000000000000000",
            "totalStaking": "21308398811307598736675572"
          },
          {
            "epochNumber": 1501,
            "selfStaking": "5039748000000000000000000",
            "totalStaking": "21308398811307598736675572"
          }
        ]
      }
      "probationHistoricalRate": "0.00"
    }
  }
}
```

### Chain

#### MostRecentEpoch

```
Usage:
  MostRecentEpoch gives the latest epoch number

Request:
  N/A

Response:
  mostRecentEpoch: latest epoch number
```

#### MostRecentBlockHeight

```
Usage:
  MostRecentBlockHeight gives the latest block height

Request:
  N/A

Response:
  mostRecentBlockHeight: latest block height
```

#### MostRecentTPS

```
Usage:
  MostRecentTPS gives the latest transactions per second

Request:
  blockWindow: number of last blocks that are backtracked to compute TPS

Response:
  mostRecentTPS: latest transactions per second
```

#### NumberOfActions

```
Usage:
  NumberOfActions gives the number of actions

Request:
  pagination:
    startEpoch: starting epoch number
    epochCount: epoch count

Response:
  exist: whether the starting epoch number is less than the most recent epoch number
  count: number of actions
```

#### VotingResultMeta

```
Usage:
  VotingResultMeta gives the latest metadata of voting result

Request:
  N/A

Response:
  totalCandidates: total number of candidates
  totalWeightedVotes: total weighted votes
  votedTokens: total voted tokens
```

#### TotalTransferredTokens

```
Usage:
  TotalTransferredTokens gives the amount of tokens transferred within a time frame

Request:
  pagination:
    startEpoch: starting epoch number
    epochCount: epoch count

Response:
  totalTransferredTokens: total tranferred tokens
```

Demo:

```
Sample Request:

query{
  chain{
    mostRecentEpoch
    mostRecentBlockHeight
    mostRecentTPS(blockWindow: 10)
    numberOfActions(pagination: {startEpoch: 1, epochCount: 10}){
      exist
      count
    }
    totalTransferredTokens(pagination:{startEpoch: 1, epochCount: 10})
  }
}

Sample Response:

{
  "data": {
    "chain": {
      "mostRecentEpoch": 1383,
      "mostRecentBlockHeight": 497772,
      "mostRecentTPS": 0,
      "numberOfActions": {
        "exist": true,
        "count": 3622
      }
      "totalTransferredTokens": "10000010000000000000000"
    }
  }
}
```

### Voting

#### VotingMeta

```
Usage:
  VotingMeta provides metadata of voting results

Request:
  startEpoch: starting epoch number
  epochCount: epoch count

Reponse:
  exist: whether the starting epoch number is less than the most recent epoch number
  candidateMeta:
    epochNumber:  epoch number
    consensusDelegates: number of consensus delegates in the epoch
    totalCandidates: number of total delegates in the epoch
    totalWeightedVotes: candidate total weighted votes in the epoch
    votedTokens: total voted tokens in the epoch
```

#### CandidateInfo

```
Usage:
  CandidateInfo provides candidate information

Request:
  startEpoch: starting epoch number
  epochCount: epoch count

Reponse:
  candidateMeta:
    epochNumber:  epoch number
    candidates:
      name: candidate name
      address: canddiate address
      totalWeightedVotes: total weighted votes
      selfStakingTokens: candidate self-staking tokens
      operatorAddress: candidate operator address
      rewardAddress: candidate reward address
```

#### RewardSources

```
Usage:
  RewardSources provides reward sources for voters

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  voterIotxAddress: voter IoTeX address

Reponse:
  exist: whether the voter has reward information within the specified epoch range
  delegateDistributions:
    delegateName: delegate name
    amount: amount of reward distribution
```

Demo:

```
Sample Request:

query{
  voting(startEpoch: 1, epochCount: 3){
    exist
    candidateMeta{
      epochNumber
      consensusDelegates
      totalCandidates
      totalWeightedVotes
      votedTokens
    }
  }
}

Sample Response:

{
  "data": {
    "voting": {
      "exist": true,
      "candidateMeta": [
        {
          "epochNumber": 1,
          "consensusDelegates": 36,
          "totalCandidates": 87,
          "totalWeightedVotes": "907521920724956720472322956",
          "votedTokens": "776946421831717811810000000"
        },
        {
          "epochNumber": 2,
          "consensusDelegates": 36,
          "totalCandidates": 87,
          "totalWeightedVotes": "907524412616270399722024013",
          "votedTokens": "776948876231717811810000000"
        },
        {
          "epochNumber": 3,
          "consensusDelegates": 36,
          "totalCandidates": 87,
          "totalWeightedVotes": "907486769208330536874270055",
          "votedTokens": "776953490231717811810000000"
        }
      ]
    }
  }
}
```

### Account

#### ActiveAccounts

```
Usage:
  ActiveAccounts lists most recently active accounts

Request:
  count: number of account addresses to be queried for active accounts

Response:
  activeAccounts: list of account addresses
```

#### OperatorAddress

```
Usage:
  OperatorAddress finds the delegate's operator address given the delegate's alias name

Request:
  aliasName: delegate's alias name

Response:
  exist: whether the alias name exists
  operatorAddress:  operator address associated with the given alias name
```

#### Alias

```
Usage:
  Alias finds the delegate's alias name given the delegate's operator address

Request:
  operatorAddress: delegate's operator address

Response:
  exist: whether the operator address exists
  aliasName: alias name associated with the given operator address
```

#### TotalNumberOfHolders

```
Usage:
  TotalNumberOfHolders returns total number of IOTX holders so far
Request:
  N/A
Response:
  totalNumberOfHolders: total number of IOTX holders so far
```

#### TotalAccountSupply

```
Usage:
  TotalAccountSupply returns total amount of tokens held by IoTeX accounts
Request:
  N/A
Response:
  totalAccountSupply: total amount of tokens held by IoTeX accounts
```

Demo:

```
Sample Request:

query{
  account{
    activeAccounts(count: 5)
    operatorAddress(aliasName: "gamefantasy#"){
      exist
      operatorAddress
    }
    alias(operatorAddress: "io1456knehzn9qup8unxlf4q06empz8lqxtp6v5vh"){
      exist
      aliasName
    }
    totalNumberOfHolders
    totalAccountSupply
  }
}

Sample Response:

{
  "data": {
    "account": {
      "activeAccounts": [
        "io17cmrextyfeu4gddwd89g5qncedsnc553dhz7xa",
        "io10reczcaelglh5xmkay65h9vw3e5dp82e8vw0rz",
        "io13xdhg9du56khumz3sg6a3ma5q5kjx7vdlx48x8",
        "io1tf7tu2xt6mpk8s70ahugsx20jqgu9eg6v48qlk",
        "io1xj0u5n20tsqwxh5a3xdtmzuz9wasft0pqjrq8t"
      ],
      "operatorAddress": {
        "exist": true,
        "operatorAddress": "io1qnec80ark9shjc6uzk45dhm8s50dpc27sjuver"
      },
      "alias": {
        "exist": true,
        "aliasName": "pubxpayments"
      },
      "totalNumberOfHolders": 9006,
      "totalAccountSupply": "782833468919740605141266758"
    }
  }
}
```

### Action

#### ByDates

```
Usage:
  ByDates finds actions by dates

Request:
  startDate: start date in unix epoch time
  endDate: end date in unix epoch time
  pagination:
    skip: starting index of displaying action list
    first: number of actions to display

Response:
  exist: whether actions exist within the time frame
  actions:
    actHash: action hash
    blkHash: block hash
    timeStamp: timestamp
    actType: action type
    sender: sender address
    recipient: recipient address
    amount: amount transferred
    gasFee: gas fee
  count: total number of actions within the time frame
```

#### ByHash

```
Usage:
  ByHash finds the action by hash

Request:
  actHash: action hash

Response:
  actionInfo:
    actHash: action hash
    blkHash: block hash
    timeStamp: timestamp
    actType: action type
    sender: sender address
    recipient: recipient address
    amount: amount transferred
    gasFee: gas fee
  evmTransfers:
    from: sender address
    to: recipient address
    quantity: amount transferred
```

#### ByAddress

```
Usage:
  ByAddress finds actions by address

Request:
  address: sender address or recipient address
  pagination:
    skip: starting index of displaying action list
    first: number of actions to display

Response:
  exist: whether actions exist for the given address
  actions:
    actHash: action hash
    blkHash: block hash
    timeStamp: timestamp
    actType: action type
    sender: sender address
    recipient: recipient address
    amount: amount transferred
    gasFee: gas fee
  count: total number of actions for the given address
```

#### EvmTransfersByAddress

```
Usage:
  EvmTransfersByAddress finds EVM transfers by address

Request:
  address: sender address or recipient address
  pagination:
    skip: starting index of displaying action list
    first: number of actions to display

Response:
  exist: whether EVM transfers exist for the given address
  evmTransfers:
    from: sender address
    to: recipient address
    quantity: amount transferred
    actHash: action hash
    blkHash: block hash
    timeStamp: timestamp
  count: total number of EVM transfers for the given address
```

#### ByType

```
Usage:
  ByType finds actions by action type

Request:
  type: action type
  pagination:
    skip: starting index of displaying action list
    first: number of actions to display

Response:
  exist: whether actions exist for the given type
  actions:
    actHash: action hash
    blkHash: block hash
    timeStamp: timestamp
    actType: action type
    sender: sender address
    recipient: recipient address
    amount: amount transferred
    gasFee: gas fee
  count: total number of actions for the given type
```

Demo:

```
Sample Request:

query{
  action{
    byDates(startDate: 1589485984, endDate: 1589486028) {
      exist
      actions(pagination: {skip: 0, first: 1}){
        actHash
        blkHash
        timeStamp
        actType
        sender
        recipient
        amount
        gasFee
      }
      count
    }
    byHash(actHash: "000086e6e3034c104025896f8af9d3e313b95957c076b3a5ebe1f42f8af3a8ad"){
      actionInfo{
        actHash
    		blkHash
    		timeStamp
    		actType
    		sender
    		recipient
    		amount
    		gasFee
      }
      evmTransfers{
        from
        to
        quantity
      }
    }
    byAddress(address:"io17jz7vtvllrgctkrvzmmue55feuk8cy6mtcynkk"){
      exist
      actions(pagination: {skip: 0, first: 1}){
        actHash
        blkHash
        timeStamp
        actType
        sender
        recipient
        amount
        gasFee
      }
      count
    }
    evmTransfersByAddress(address: "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a"){
      exist
  		evmTransfers{
        from
        to
        quantity
        actHash
        blkHash
        timeStamp
      }
    	count
    }
    byType(type:"transfer"){
      exist
      actions(pagination: {skip: 0, first: 1}){
        actHash
        blkHash
        timeStamp
        actType
        sender
        recipient
        amount
        gasFee
      }
      count
    }
  }
}

Sample Response:

{
  "data": {
    "action": {
      "byDates": {
        "exist": true,
        "actions": [
          {
            "actHash": "8c917d11bff3856d60d274c666188afc3aac0fbcddb60bd19cf9a352cb7b00a3",
            "blkHash": "293845611de09b944c5def5a6b29e83cd4b8d2a00a29575e4720fc64e8adf7b4",
            "timeStamp": 1589486025,
            "actType": "grantReward",
            "sender": "io195mh6ftwz5vnagw984fj4hj8awty3ue2gh457f",
            "recipient": "",
            "amount": "0",
            "gasFee": "0"
          }
        ],
        "count": 9
      },
      "byHash": {
        "actionInfo": {
          "actHash": "000086e6e3034c104025896f8af9d3e313b95957c076b3a5ebe1f42f8af3a8ad",
          "blkHash": "2f31b5b15c50dc9431cd1f655fdace2c2c7bf92111a4a01a9947ce3969352d00",
          "timeStamp": 1582409835,
          "actType": "transfer",
          "sender": "io1ey8s7p7kzu9lh68we7mstmyllaxc6tgwuj2whh",
          "recipient": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",
          "amount": "1528012374156719350",
          "gasFee": "10000000000000000"
        },
        "evmTransfers": []
      },
      "byAddress": {
        "exist": true,
        "actions": [
          {
            "actHash": "e1e3d46844046710d4843b2b044f8ff5da785931e808ac071ff4b4280a05aa9e",
            "blkHash": "3b1dcebd95f35a682ea8f443ae817b240b447e50a23c3a60918c3318bb249ccc",
            "timeStamp": 1589442290,
            "actType": "execution",
            "sender": "io17jz7vtvllrgctkrvzmmue55feuk8cy6mtcynkk",
            "recipient": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
            "amount": "0",
            "gasFee": "60357000000000000"
          }
        ],
        "count": 290
      },
      "evmTransfersByAddress": {
        "exist": true,
        "evmTransfers": [
          {
            "from": "io1zn9mn4v63jg3047ylqx9nqaqz0ev659777q3xc",
            "to": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",
            "quantity": "5006000000000000000000",
            "actHash": "8f4c40742081668eaab315701f5603dc83ecc455cacffb3b13710c37915cb4dc",
            "blkHash": "3625674",
            "timeStamp": 1583322240
          },
          {
            "from": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",
            "to": "io1zn9mn4v63jg3047ylqx9nqaqz0ev659777q3xc",
            "quantity": "0",
            "actHash": "8f4c40742081668eaab315701f5603dc83ecc455cacffb3b13710c37915cb4dc",
            "blkHash": "3625674",
            "timeStamp": 1583322240
          },
          {
            "from": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",
            "to": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
            "quantity": "0",
            "actHash": "c4bd25240b0d8832b0dca2916d30e3c6882a5dbfa803573950ad8ae894ef8f5c",
            "blkHash": "3572472",
            "timeStamp": 1583055260
          },
          {
            "from": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",
            "to": "io1zn9mn4v63jg3047ylqx9nqaqz0ev659777q3xc",
            "quantity": "0",
            "actHash": "078c9d6c2f18681d9d3747d967919a7fafb44598a39117b9a1a1abc8e18e6013",
            "blkHash": "3572471",
            "timeStamp": 1583055255
          },
          {
            "from": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",
            "to": "io1zn9mn4v63jg3047ylqx9nqaqz0ev659777q3xc",
            "quantity": "5006000000000000000000",
            "actHash": "fee1360940bb6724636c0731edde984a62941df2e1785361749a50bee6f22559",
            "blkHash": "3316376",
            "timeStamp": 1581770210
          }
        ],
        "count": 5
      },
      "byType": {
        "exist": true,
        "actions": [
          {
            "actHash": "000086e6e3034c104025896f8af9d3e313b95957c076b3a5ebe1f42f8af3a8ad",
            "blkHash": "2f31b5b15c50dc9431cd1f655fdace2c2c7bf92111a4a01a9947ce3969352d00",
            "timeStamp": 1582409835,
            "actType": "transfer",
            "sender": "io1ey8s7p7kzu9lh68we7mstmyllaxc6tgwuj2whh",
            "recipient": "io1nkuv5ns3pevh7r7cwv6lwa2744utyhq7txay3a",
            "amount": "1528012374156719350",
            "gasFee": "10000000000000000"
          }
        ],
        "count": 132221
      }
    }
  }
}
```

### Xrc20

#### ByContractAddress

```
Usage:
  ByContractAddress returns Xrc20 actions given the Xrc20 contract address

Request:
  address: contract address
  numberPerPage: number per page
  page: page number
    
Response:
  exist: whether Xrc20 actions exist for the given contract address
  xrc20:
    contract: contract address
    hash: action hash
    timestamp: timestamp
    from: sender address
    to: recipient address
    quantity: amount transferred
  count: total number of Xrc20 actions
```

#### ByAddress

```
Usage:
  ByAddress returns Xrc20 actions given the sender address or recipient address
  
Request:
  address: sender address or recipient address
  numberPerPage: number per page
  page: page number
  
Response:
  exist: whether Xrc20 actions exist for the given sender address or recipient address
  xrc20:
    contract: contract address
    hash: action hash
    timestamp: timestamp
    from: sender address
    to: recipient address
    quantity: amount transferred
  count: total number of Xrc20 actions
```

#### ByPage

```
Usage:
  ByPage returns Xrc20 actions by pagination

Request:
  pagination:
    skip: starting index of displaying action list
    first: number of actions to display
  
Response:
  exist: whether Xrc20 actions exist
  xrc20:
    contract: contract address
    hash: action hash
    timestamp: timestamp
    from: sender address
    to: recipient address
    quantity: amount transferred
  count: total number of Xrc20 actions
```

#### Xrc20Addresses

```
Usage:
  Xrc20Addresses returns Xrc20 contract addresses

Request:
  pagination:
    skip: starting index of displaying contract address list
    first: number of contract addresses to display

Response:
  exist: whether Xrc20 contract addresses exist
  addresses: contract address list
  count: total number of Xrc20 contract addresses
```

#### TokenHolderAddresses

```
Usage:
  TokenHolderAddresses returns Xrc20 token holder addresses given a Xrc20 contract address
    
Request:
  tokenAddress: token contract address
  pagination:
    skip: starting index of displaying token holder address list
    first: number of token holder addresses to display
  
Response:
  addresses: token holder address list
  count: total number of token holder addresses
```

Demo:

```
Sample Request:
query{
  xrc20{
    byContractAddress(address: "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw", page: 1, numPerPage: 1){
      exist
      xrc20 {
        contract
        hash
        timestamp
        from
        to
        quantity
      }
      count
    }
    byAddress(address: "io1l6a6gu9ks4pwu2tmrzhl6z2el73ydv6e768p5x", page: 1, numPerPage: 1){
      exist
      xrc20 {
        contract
        hash
        timestamp
        from
        to
        quantity
      }
      count
    }
    byPage(pagination: {skip: 0, first: 2}){
      exist
      xrc20 {
        contract
        hash
        timestamp
        from
        to
        quantity
      }
      count
    }
    xrc20Addresses(pagination:{skip: 0, first: 2}){
      exist
      addresses
      count
    }
    tokenHolderAddresses(tokenAddress: "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw"){
      addresses(pagination: {skip: 1, first: 2})
      count
    }
  }
}

Sample Response:

{
  "data": {
    "xrc20": {
      "byContractAddress": {
        "exist": true,
        "xrc20": [
          {
            "contract": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
            "hash": "052eebdc0bc75715ffedeb34c9322446230448747cef48762be9478fd8a7064e",
            "timestamp": "1589496125",
            "from": "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7",
            "to": "io1xrwjjy26e5dmcxd2dq6hu0zsfrd5qdgqpg57m8",
            "quantity": "71735598998424445289"
          }
        ],
        "count": 80440
      },
      "byAddress": {
        "exist": true,
        "xrc20": [
          {
            "contract": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
            "hash": "df8c34d9bcee1ed204ba82ebcf5b29722956379ef734c1e1e32fcb6a98968b5d",
            "timestamp": "1589480485",
            "from": "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7",
            "to": "io1l6a6gu9ks4pwu2tmrzhl6z2el73ydv6e768p5x",
            "quantity": "1031249148674903495207"
          }
        ],
        "count": 235
      },
      "byPage": {
        "exist": true,
        "xrc20": [
          {
            "contract": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
            "hash": "052eebdc0bc75715ffedeb34c9322446230448747cef48762be9478fd8a7064e",
            "timestamp": "1589496125",
            "from": "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7",
            "to": "io1xrwjjy26e5dmcxd2dq6hu0zsfrd5qdgqpg57m8",
            "quantity": "71735598998424445289"
          },
          {
            "contract": "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
            "hash": "f8a326ddb67c0140be0244a052976d73ca6f8fcb5278c51549df80c347c7a3b6",
            "timestamp": "1589496065",
            "from": "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7",
            "to": "io1qnwl44fpln3uvxrrhjxkp56y6n3j6cqctp76rq",
            "quantity": "132716426277978885524"
          }
        ],
        "count": 86196
      },
      "xrc20Addresses": {
        "exist": true,
        "addresses": [
          "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
          "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu"
        ],
        "count": 3
      },
      "tokenHolderAddresses": {
        "addresses": [
          "io1quwq28fk0z6ztyesw8r8aalpww62uf7m6xjf8x",
          "io1hn57s343wgqrvqkt0mp4fas0wfvgtwecny5lq5"
        ],
        "count": 1871
      }
    }
  }
}
```

### Xrc721

#### ByContractAddress

```
Usage:
  ByContractAddress returns Xrc721 actions given the Xrc721 contract address

Request:
  address: contract address
  numberPerPage: number per page
  page: page number
    
Response:
  exist: whether Xrc721 actions exist for the given contract address
  xrc721:
    contract: contract address
    hash: action hash
    timestamp: timestamp
    from: sender address
    to: recipient address
    quantity: amount transferred
  count: total number of Xrc721 actions
```

#### ByAddress

```
Usage:
  ByAddress returns Xrc721 actions given the sender address or recipient address
  
Request:
  address: sender address or recipient address
  numberPerPage: number per page
  page: page number
  
Response:
  exist: whether Xrc721 actions exist for the given sender address or recipient address
  xrc721:
    contract: contract address
    hash: action hash
    timestamp: timestamp
    from: sender address
    to: recipient address
    quantity: amount transferred
  count: total number of Xrc721 actions
```

#### ByPage

```
Usage:
  ByPage returns Xrc721 actions by pagination

Request:
  pagination:
    skip: starting index of displaying action list
    first: number of actions to display
  
Response:
  exist: whether Xrc721 actions exist
  xrc721:
    contract: contract address
    hash: action hash
    timestamp: timestamp
    from: sender address
    to: recipient address
    quantity: amount transferred
  count: total number of Xrc721 actions
```

#### Xrc721Addresses

```
Usage:
  Xrc721Addresses returns Xrc721 contract addresses

Request:
  pagination:
    skip: starting index of displaying contract address list
    first: number of contract addresses to display

Response:
  exist: whether Xrc721 contract addresses exist
  addresses: contract address list
  count: total number of Xrc721 contract addresses
```

#### TokenHolderAddresses

```
Usage:
  TokenHolderAddresses returns Xrc721 token holder addresses given a Xrc721 contract address
    
Request:
  tokenAddress: token contract address
  pagination:
    skip: starting index of displaying token holder address list
    first: number of token holder addresses to display
  
Response:
  addresses: token holder address list
  count: total number of token holder addresses
```

TODO: When there are Xrc721 actions on the chain, add a demo here.

### TopHolders

```
Usage:
  TopHolders returns the top IOTX holders
  
Request:
  endEpochNumber: end epoch number
  pagination:
    skip: starting index of displaying top holder list
    first: number of top holders to display

Response:
  address: holder address
  balance: account balance
```

Demo:

```
Sample Request:

query{
  topHolders(endEpochNumber: 1000, pagination: {skip: 0, first: 5}){
    address
    balance
  }
}

Sample Response:

{
  "data": {
    "topHolders": [
      {
        "address": "io1uqhmnttmv0pg8prugxxn7d8ex9angrvfjfthxa",
        "balance": "9782327287860000000000000000"
      },
      {
        "address": "io1v8aj79xc7zdn46rptrqe63g79tgq57s8em2yk5",
        "balance": "5595872065018750000000000"
      },
      {
        "address": "io1w2zkwsda29cryeg8rtln6wl0nm2mrlfl2xj02c",
        "balance": "5000000000000000000000000"
      },
      {
        "address": "io17zjv5f97j0d9fp6svqnvf2nf3k4a5pjay9kzp9",
        "balance": "3457911717681240000000000"
      },
      {
        "address": "io183v7vftj3e4h76z5f5qpswhnn5737rrwjkhyds",
        "balance": "1222486212327000000000000"
      }
    ]
  }
}
```

### Hermes

```
Usage:
  Hermes gives delegates who register the service of automatic reward distribution an overview of the reward distributions to their voters within a range of epochs

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  rewardAddress: Hermes reward address
  waiverThreshold: threshold for waiving service fee

Response:
  exist: whether Hermes has bookkeeping information within the specified epoch range
  hermesDistribution:
    delegateName: delegate name
    rewardDistribution:
      voterEthAddress: voter’s ERC20 address
      voterIotexAddress: voter’s IoTeX address
      amount: amount of reward distribution
    stakingIotexAddress: delegate IoTeX staking address
    voterCount: number of voters
    waiveServiceFee: whether the delegate is qualified for waiving the service fee
    refund: amount of refund
```

Demo:

```
Sample Request:

query{
  hermes(startEpoch: 2600, epochCount: 2, rewardAddress: "io12mgttmfa2ffn9uqvn0yn37f4nz43d248l2ga85", waiverThreshold: 100) {
    exist
    hermesDistribution{
      delegateName
      rewardDistribution{
        voterEthAddress
        voterIotexAddress
        amount
      }
      stakingIotexAddress
      waiveServiceFee
      refund
    }
  }
}

Sample Reponse:

{
  "data": {
    "hermes": {
      "exist": true,
      "hermesDistribution": [
        {
          "delegateName": "coredev",
          "rewardDistribution": [
            {
              "voterEthAddress": "0x2ed3767cfcbceb42ff5f3642d4df6f851b947073",
              "voterIotexAddress": "io19mfhvl8uhn459l6lxepdfhm0s5degurn9p9ws7",
              "amount": "196604399213276651"
            },
            {
              "voterEthAddress": "0xd24687dc4512cd705a74cd5495745398f24278ad",
              "voterIotexAddress": "io16frg0hz9ztxhqkn5e42f2aznnreyy79dmqlsn2",
              "amount": "32631320141532384677"
            },
            {
              "voterEthAddress": "0xfe7bcb3676aabe9a6b39cb23f3a5fa41eed7ad1b",
              "voterIotexAddress": "io1leaukdnk42lf56eeev3l8f06g8hd0tgmep8z96",
              "amount": "359747231878966643458"
            }
          ],
          "stakingIotexAddress": "io16frg0hz9ztxhqkn5e42f2aznnreyy79dmqlsn2",
          "waiveServiceFee": false,
          "refund": "20661850337879594993"
        }
      ]
    }
  }
}
```

### HermesAverageStats

```
Usage:
  HermesAverageStats returns the Hermes average statistics

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  rewardAddress: Hermes reward address
  
Response:
  exist: whether Hermes has bookkeeping information within the specified epoch range
  averagePerEpoch:
    delegateName: delegate name
    rewardDistribution: reward distribution amount on average
    totalWeightedVotes: total weighted votes on average
```

Demo:

```
Sample Request:

query{
  hermesAverageStats(startEpoch: 5000, epochCount: 10, rewardAddress: "io12mgttmfa2ffn9uqvn0yn37f4nz43d248l2ga85"){
    exist
    averagePerEpoch{
      delegateName
      rewardDistribution
      totalWeightedVotes
    }
  }
}

Sample Response:
{
  "data": {
    "hermesAverageStats": {
      "exist": true,
      "averagePerEpoch": [
        {
          "delegateName": "coredev",
          "rewardDistribution": "401032105356051868726",
          "totalWeightedVotes": "38808174674986270729016008"
        },
        {
          "delegateName": "droute",
          "rewardDistribution": "822447995100870198028",
          "totalWeightedVotes": "118158036851736955093703620"
        },
        {
          "delegateName": "enlightiv",
          "rewardDistribution": "307702229045005783993",
          "totalWeightedVotes": "44203263243950087278116762"
        },
        {
          "delegateName": "gamefantasy#",
          "rewardDistribution": "615239097651479380485",
          "totalWeightedVotes": "57767718207147312170110160"
        },
        {
          "delegateName": "hashquark",
          "rewardDistribution": "541329441223848778034",
          "totalWeightedVotes": "37303750004462544031788788"
        },
        {
          "delegateName": "hotbit",
          "rewardDistribution": "490966398085098750279",
          "totalWeightedVotes": "41618068480725476480096115"
        },
        {
          "delegateName": "huobiwallet",
          "rewardDistribution": "256863403704895657860",
          "totalWeightedVotes": "36902607956443015195845625"
        },
        {
          "delegateName": "thebottoken#",
          "rewardDistribution": "76273140665872145706",
          "totalWeightedVotes": "10349106879165645178941803"
        }
      ]
    }
  }
}
```

### Hermes2

#### ByDelegate

```
Usage:
  ByDelegate returns Hermes delegates' distribution history

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  delegateName: delegate name
  pagination:
    skip: starting index of displaying reward distribution list
    first: number of reward distributions to display 

Response:
  exist: whether the delegate uses Hermes within the specified epoch range
  voterInfoList:
    voterAddress: voter address
    fromEpoch: starting epoch of bookkeeping
    toEpoch: ending epoch of bookkeeping
    amount: distributino amount
    actionHash: action hash
    timestamp: timestamp
  count: total number of reward distributions
  totalRewardDistributed: total reward amount distributed
  distributionRatio:
    epochNumber: epoch number
    blockRewardRatio: ratio of block reward being distributed
    epochRewardRatio: ratio of epoch reward being distributed
    foundationBonusRatio: ratio of foundation bonus being distributed
```

#### ByVoter

```
Usage:
  ByVoter returns Hermes voters' receiving history

Request:
  startEpoch: starting epoch number
  epochCount: epoch count
  voterAddress: voter address
  pagination:
    skip: starting index of displaying reward receiving list
    first: number of reward receivings to display 

Response:
  exist: whether the voter uses Hermes within the specified epoch range
  delegateInfoList:
    delegateName: delegate name
    fromEpoch: starting epoch of bookkeeping
    toEpoch: ending epoch of bookkeeping
    amount: receiving amount
    actionHash: action hash
    timestamp: timestamp
  count: total number of reward receivings
  totalRewardReceived: total reward amount received
```

#### HermesMeta

```
Usage:
  HermesMeta provides Hermes platform metadata

Request:
  startEpoch: starting epoch number
  epochCount: epoch count

Response:
  exist: whether Hermes has bookkeeping information within the specified epoch range
  numberOfDelegates: number of Hermes delegates within the epoch range
  numberOfRecipients: number of voters who vote for Hermes delegates within the epoch range
  totalRewardDistributed: total reward amount distributed within the epoch range
```

Demo:

```
Sample Request:

query{
  hermes2(startEpoch: 9100, epochCount: 1){
    byDelegate(delegateName:"gamefantasy#"){
      exist
      voterInfoList(pagination: {skip: 0, first: 2}){
        voterAddress
        fromEpoch
        toEpoch
        amount
        actionHash
        timestamp
      }
      count
      totalRewardsDistributed
      distributionRatio{
        epochNumber
        blockRewardRatio
        epochRewardRatio
        foundationBonusRatio
      }
    }
    byVoter(voterAddress: "io19jgwy6gua2mxtthdgqe7r6v2z8jyvv0820nshw"){
      exist
      delegateInfoList(pagination: {skip: 0, first: 2}){
        delegateName
        fromEpoch
        toEpoch
        amount
        actionHash
        timestamp
      }
      count
      totalRewardsReceived
    }
    hermesMeta{
      exist
      numberOfDelegates
      numberOfRecipients
      totalRewardsDistributed
    }
  }
}

Sample Response:

{
  "data": {
    "hermes2": {
      "byDelegate": {
        "exist": true,
        "voterInfoList": [
          {
            "voterAddress": "io1qhks2tct2386xgntkgg8f748ymuqnzwy4qr3ms",
            "fromEpoch": 9016,
            "toEpoch": 9037,
            "amount": "898496142232422125",
            "actionHash": "bff5c21cec38a994507cc133220d853710516b931a44d0ee74816fe835d68b62",
            "timestamp": "2020-05-08 00:10:45 +0000 UTC"
          },
          {
            "voterAddress": "io1qk59a7q45spm8c2tnuf2j3yrkshfupaeq6fa8g",
            "fromEpoch": 9016,
            "toEpoch": 9037,
            "amount": "4597907624862488628",
            "actionHash": "bff5c21cec38a994507cc133220d853710516b931a44d0ee74816fe835d68b62",
            "timestamp": "2020-05-08 00:10:45 +0000 UTC"
          }
        ],
        "count": 79,
        "totalRewardsDistributed": "15856874829304723790254",
        "distributionRatio": [
          {
            "epochNumber": 9100,
            "blockRewardRatio": 80,
            "epochRewardRatio": 80,
            "foundationBonusRatio": 80
          }
        ]
      },
      "byVoter": {
        "exist": true,
        "delegateInfoList": [
          {
            "delegateName": "thebottoken#",
            "fromEpoch": 9016,
            "toEpoch": 9037,
            "amount": "758460957121496239828",
            "actionHash": "e6a8a1a3daa35bfec01537aecc45fd5d9f58d4fd686e152e6a44c6c5e6c7cc25",
            "timestamp": "2020-05-08 00:23:45 +0000 UTC"
          },
          {
            "delegateName": "consensusnet",
            "fromEpoch": 9016,
            "toEpoch": 9037,
            "amount": "2281108960667527338399",
            "actionHash": "ada939af05ba7bf96d4e87a2c5f7d048f48ab9b6fafc3ee1ca35dfc67664a22a",
            "timestamp": "2020-05-08 00:02:40 +0000 UTC"
          }
        ],
        "count": 3,
        "totalRewardsReceived": "5315407956761306754362"
      },
      "hermesMeta": {
        "exist": true,
        "numberOfDelegates": 22,
        "numberOfRecipients": 964,
        "totalRewardsDistributed": "241471851581857403438503"
      }
    }
  }
}
```

## Action Injector

Action injector is a simulation tool to simulate action traffic by injecting random actions to gateway node.

```
Usage:
   injector random [flags]

Available Flags:
  --addr string       target ip:port for grpc connection (default "127.0.0.1:14004")
  --aps int        actions to be injected per second (default 30)
  --contract string   smart contract address (default "io1pmjhyksxmz2xpxn2qmz4gx9qq2kn2gdr8un4xq")
  --duration duration   duration when the injection will run (default 60h0m0s)
  --execution-amount int execution amount (default 50)
  --execution-data string execution data (default "2885ad2c")
  --execution-gas-limit uint      execution gas limit (default 20000)
  --execution-gas-price int       execution gas price (default 1000000000000)
  --injector-config-path string   path of config file of genesis transfer addresses (default "./tools/actioninjector.v2/gentsfaddrs.yaml")
  --reset-interval duration       time interval to reset nonce counter (default 10s)
  --retry-interval duration       sleep interval between two consecutive rpc retries (default 1s)
  --retry-num uint                maximum number of rpc retries (default 5)
  --transfer-gas-limit uint       transfer gas limit (default 20000)
  --transfer-gas-price int        transfer gas price (default 1000000000000)
  --transfer-payload string       transfer payload
  --workers uint                  number of workers (default 10)
  -h, --help                      help for random
```

### Install Release Build

```
curl --silent https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-injector.sh | sh
```

### Install Latest/Unstable Build

```
curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-injector.sh | sh -s "unstable"
```

## Bookkeeping

Bookkeeping is a GraphQL web interface for reward distributions, which collects voting status and calculates corresponding voters' reward for a given delegate within a certain epoch range.

### Get Voters' Rewards Given A Delegate Name

Usage: Please refer to [Analytics Documentations](https://github.com/iotexproject/iotex-docs#bookkeeping).

### Send Out Voters' Rewards

The generated bytecode can be used by `ioctl` to actually send out the voters' rewards, i.e.,

```
ioctl action invoke io1sesxdghz93f4sadhu6a7242m22gphmc2aucz4g <total-amount> -l <gas-limit> -p <gas-price> -s <signer> -b <bytecode>`
```

Note that `io1sesxdghz93f4sadhu6a7242m22gphmc2aucz4g` is the pre-deployed contract for sending IOTX coins to multiple addresses.

## FAQ

### Action is always not-found

Action is always not-found because below reasons:

1. incorrect nonce (too small or to large)
2. too low gas price
3. too small gas limit
4. account balance insufficient (amount + gas price \* gas limit)
