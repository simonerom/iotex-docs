---
title: Antenna-C SDK
---

# Install Antenna-C

Download [Antenna-C latest release](https://github.com/iotexproject/iotex-antenna-embedded/releases). In your C file include the following:

```C
#include "u128.h"
#include "iotex_emb.h"

int main(int argc, char **argv) {

    int ret;
    iotex_st_config config = {0};

    config.ver = 1;
    config.cert_file = "cacert.pem";

    /* Initialize Antenna-c lib */
    if ((ret = iotex_emb_init(&config)) != 0) {
        fprintf(stderr, "Initialize iotex emb failed, error code: %d\n", ret);
        return -1;
    }

    // Interact with the blockchain
    // ...

```
