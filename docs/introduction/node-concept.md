---
id: guides
title: Nodes
---

### Blockchain Nodes

Similarly to other blockchains, IoTeX is a peer-to-peer network of **nodes** that maintain a global consensus over the status of a single ledger stored among the nodes of the blockchain in a distributed fashion. IoTeX is also a _digital democracy_, where anyone can configure a node and propose himeself as a **delegate** node. Token-holders can then **stake** their IOTX tokens and **vote** for Delegates to maintain/grow the network. Every 1 hour (aka one _IoTeX Epoch_), the ranking of all delegate candidates is evaluated by the blockchain, and the top 36 voted Delegates become **Consensus Delegates**. Consensus Delegates are eligible to produce blocks on behalf of the entire IoTeX Network for that epoch and to evaluate the new ranking of consensus delegates for the next epoch. For their services, Delegates are **rewarded** by the blockchain in IOTX tokens, which they may share with their voters.

![IoTeX Platform](/img/introduction/nodes.png)

In IoTeX there are three types of nodes:

- **Gateway**: these are nodes that keep a full copy of the blockchain, so that they can securely verify any new incoming transaction against the current status of the ledger. They can serve as the trusted gateway for communication among other users and devices in the IoTeX network, and with the blockchain itself. Once the node is fully synced, one can communicate with them via [gRPC service](https://grpc.io/). The details of APIs are specified in the [API Docs](developer/api), and the corresponding proto files are located at https://github.com/iotexproject/iotex-core/tree/master/proto/api.

- **Delegate Candidates**: these are very similar to a full node, except that the owner of the node configured it such that the node is recognised as a "Delegate Candidate" by other network participants, hence it's entitled to receive **votes** by IOTX token holders. Learn more about IoTeX Delegates [in this thread](https://community.iotex.io/t/official-iotex-delegates-thread/1263), and view the full list of Delegates on the [IoTeX voting website](member.iotex.io).

* **Consensus Delegates** these are themselves delegate nodes, just they have received enough votes from the network to rank in the top 36 of all delegate candidates, hence they are entitled to be the **maintainers** of the blockchain by verifying transactions and minting new blocks. View the current list of consensus delegates on the [IoTeX voting website](member.iotex.io).

![IoTeX Platform](/img/introduction/nodes2.png)

While Delegate nodes can also be configured to act as gateways, this is usually not the case: the main purpose of a delegate node is eventually to become a consensus delegate and to maintain the blockchain, hence the node is usually backed by high-performance hardware, fast network connectivity, and are highly protected against external attacks.
