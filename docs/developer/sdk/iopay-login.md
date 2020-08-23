---
title: Login with IoPay Wallet
---

## Login with ioPay Desktop

Prerequisite: [Integrate with ioPay Desktop](iopay-integrate).

Login is essentially identifying who’s who with some proof. With crypto wallet, you can easily provide the proof by signing a message with your private key, in the following three steps:

### 1. Preparing a message to sign

The message contains these concepts:

1. This message’s intention is login.
2. We need the user’s consent to sign with a specific address
3. To prevent the replay attack, we should randomly generate a nonce every time with the message to sign. The server memorize it first, then send to the wallet and finally verify it.

With these items above, we can then compose a message like

```ts
const msg = `Login with ${account.address} and the nonce of ${nonce}`;
```

The `account.address` is from [Integrate with ioPay Desktop](iopay-integrate). And the `nonce` is from the server. We use cookie session to store the nonce temporarily but you can choose whatever storage you like.

```ts
server.post("/api/sign-in/create-nonce", async ctx => {
  const nonce = uuidv4();
  ctx.session.nonce = nonce;
  ctx.response.body = {
    nonce
  };
});
```

### 2. Sign the message

Once we got the composed message, send it to the wallet to sign. Then we send the signature to the server `POST` endpoint `/api/sign-in/` for verification.

```ts
const sig = await account.sign(msg);
const { data } = await axiosInstance.post("/api/sign-in/", {
  sig: sig.toString("hex"),
  address: account.address
});
```

### 3. Verify the message and issue credentials

The server parses the JSON request and verify the signature against the message and the address. If everything goes well, then the server can proceed with getting or creating the user from the database, and issue credentials accordingly.

```ts
server.post("/api/sign-in/", async (ctx: Context, next: koa.Next) => {
  const { sig, address } = ctx.request.body;
  const msg = `Login with ${address} and the nonce of ${ctx.session.nonce}`;
  ctx.session.nonce = null; // clear previous nonce
  const recovered = new Account().recover(msg, Buffer.from(sig, "hex"), false);
  if (recovered !== address) {
    ctx.response.body = {
      ok: false,
      error: {
        code: "auth/failed_to_login",
        message: ctx.t("auth/failed_to_login")
      }
    };
    return;
  }

  // Now the user is authenticated. Get or create the user from the database and issue credentials accordingly
});
```
