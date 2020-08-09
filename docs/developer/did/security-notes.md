---
title: Security Considerations
---

## Security Considerations

The IoTeX DID method covers both people and devices and the following security issues are considered:

### Private Key Compromise

The ownership of DIDs is solely based on the knowledge of private keys. Hence the secure storage of private keys is critical. To minimize the risk of private key compromise, using security hardware for key storage is highly recommended. Furthermore, in the case that private key is lost or stolen, an identifier recovery mechanism needs to be in place for enabling a legitimate entity to regain control of the identifier.

### Replay and Impersonation Attacks

A malicious service provider might collect credentials of people and devices with the purpose of impersonating other legitimate entities to gain access for certain services. This issue can be addressed by service providers conducting a challenge-response process with the request entities, thereby verifying that a DID is associated with the request entity.

### Integrity of DID Documents and Credentials

The IoTeX DID method allows people and devices to store the DID documents and credentials in the storage of their choices. The integrity of this information is ensured by the IoTeX blockchain.

### Denial of Service Attacks

An attacker might launch the Denial of Service (DoS) attacks to prevent access of certain DID documents and/or credentials. To mitigate this issue, DID owners may deploy data redundancy countermeasures by storing multiple copies of DID documents and/or credentials in different storage locations.

### Smart Contract Flaws

The IoTeX DIDs method is implemented by smart contracts on the IoTeX blockchain. Those contracts will go through stringent audits and tests to mitigate the potential security risks.

### Quantum Computer Threats

The private/public key pair used in IoTeX DID method is based on elliptic curve cryptosystems (ECC). The future occurrence of powerful quantum computers will render ECC insecure. Under such a circumstance, a key updating mechanism is needed to generate a new key pair based on the post-quantum cryptographic algorithm selected by the National Institute of Standards and Technology (NIST) for replacing the old one.

## Privacy Considerations

The IoTeX DID method involves privacy protection for people and devices and the following privacy issues are considered:

### Private Data Leakage

When a person shares his/her personal information with a service provider, the service provider might leak the data to third parties without users’ consent. This issue can be minimized by only sharing the necessary data during the interaction with the service provider rather than exposing the full credential. Advanced cryptographic techniques such as zero-knowledge proofs might be employed to address this issue under certain circumstances.

### People/Device Tracking

Since IoTeX DIDs are managed by smart contracts and all the interactions with the smart contracts are recorded on the IoTeX blockchain. By analyzing the transactions on the blockchain, attackers might be able to review the interaction patterns among people or between people and devices. This issue can be minimized by constantly altering the DIDs of people and devices for different interactions according to a predefined policy.
