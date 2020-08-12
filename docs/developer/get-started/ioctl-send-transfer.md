---
title: Send a Token Transfer
---

# Send a Token Transfer action

The Transfer action allows to send IOTX tokens from one IoTeX account (the _sender_) to another IoTeX account (the _recipient_).

Here is the command to send **10 IOTX** from our **dev-acc** account to the IoTeX account with address **io1mflp9m6hcgm2qcghchsdqj3z3eccrnekx9p0ms**

```
ioctl action transfer io1mflp9m6hcgm2qcghchsdqj3z3eccrnekx9p0ms 10 -s dev-acc
```

The command will ask for the password of our dev-acc account then it will send the action to the gateway and provide the hash of the action.
