(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    569: function(t, a, s) {
      "use strict";
      s.r(a);
      var e = s(69),
        n = Object(e.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("p", [
                  t._v(
                    "Please make sure to install ioctl on latest master branch of iotex-core repo."
                  )
                ]),
                t._v(" "),
                s("p", [
                  t._v("Our address based DID contract on IoTeX testnet is: "),
                  s("code", [t._v("io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8")])
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "_1-generate-a-did-doc" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_1-generate-a-did-doc" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 1. Generate a DID Doc")
                ]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "Generate DID document using private key from wallet\n\nUsage:\n  ioctl did generate [-s SIGNER] [flags]\n"
                      )
                    ])
                  ])
                ]),
                s("p", [t._v("Example:")]),
                t._v(" "),
                s("div", { staticClass: "language-bash extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-bash" } }, [
                    s("code", [
                      t._v("ioctl did generate -s test1\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"@context"')
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"https://www.w3.org/ns/did/v1"')
                      ]),
                      t._v(",\n  "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"id"')
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '"did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A"'
                        )
                      ]),
                      t._v(",\n  "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"authentication"')
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"id"')
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '"did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A#owner"'
                        )
                      ]),
                      t._v(",\n      "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"type"')
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"EcdsaSecp256k1VerificationKey2019"')
                      ]),
                      t._v(",\n      "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"controller"')
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '"did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A"'
                        )
                      ]),
                      t._v(",\n      "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"publicKeyHex"')
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '"0355237d4af6afc7f139e396329d56a4d1235c94abde9a25782241774c06cccfb6"'
                        )
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n  "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v("\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n\nThe hex encoded SHA256 "),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token builtin class-name" }
                        },
                        [t._v("hash")]
                      ),
                      t._v(
                        " of the DID doc is:21e575fd6fd75591465481404986fac73de766446c793ff67adfa171d51adf85\n"
                      )
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "_2-upload-did-doc" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_2-upload-did-doc" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 2. Upload DID Doc")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "DID Doc can be uploaded to any public accessible content storage like S3 or IPFS or other cloud storge, as long as you end up with a URI which is able to retrieve you DID Doc.\nIf you plan to use IPFS, you can either setup your own IPFS node, or use service like https://pinata.cloud/."
                  )
                ]),
                t._v(" "),
                s("p", [t._v("Exmaple:")]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "https://gateway.pinata.cloud/ipfs/QmNNhWHyi5tRH78QqcTYHwfyNc3bbuLZTTvmk3UhWdAWjG\n"
                      )
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "_3-hash-did-doc" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_3-hash-did-doc" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 3. Hash DID Doc")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "DID register asked for a 32 bytes hash of the DID Doc as an input. You could use any hashing algorithm fit your need. Once you got your DID Doc hash, encode it to hex string, in order to pass into "
                  ),
                  s("code", [t._v("ioctl")]),
                  t._v(
                    ". For simplicity, you can directly use the hex encoded SHA256 hash string provided by "
                  ),
                  s("code", [t._v("ioctl did generate")]),
                  t._v(".")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Here is a Go example to hash DID doc with SHA512-256 and output a hex string:"
                  )
                ]),
                t._v(" "),
                s("div", { staticClass: "language-go extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-go" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("package")]
                      ),
                      t._v(" main\n\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("\n\t"),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"crypto/sha512"')
                      ]),
                      t._v("\n\t"),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"encoding/hex"')
                      ]),
                      t._v("\n\t"),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"fmt"')
                      ]),
                      t._v("\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("var")]
                      ),
                      t._v(" doc "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v(
                          '`{\n  "@context": "https://www.w3.org/ns/did/v1",\n  "id": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A",\n  "authentication": [\n    {\n      "id": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A#owner",\n      "type": "EcdsaSecp256k1VerificationKey2019",\n      "controller": "did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A",\n      "publicKeyHex": "0355237d4af6afc7f139e396329d56a4d1235c94abde9a25782241774c06cccfb6"\n    }\n  ]\n}`'
                        )
                      ]),
                      t._v("\n\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("func")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("main")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n\tsum "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":=")]
                      ),
                      t._v(" sha512"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("Sum512_256")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("byte")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("doc"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n\n\tfmt"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("Println")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("hex"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("EncodeToString")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("sum"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "_4-register-did" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_4-register-did" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 4. Register DID")
                ]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "Usage:\n  ioctl did register (CONTRACT_ADDRESS|ALIAS) hash uri [flags]\n"
                      )
                    ])
                  ])
                ]),
                s("p", [t._v("Example:")]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "ioctl did register io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8 21e575fd6fd75591465481404986fac73de766446c793ff67adfa171d51adf85 https://gateway.pinata.cloud/ipfs/QmNNhWHyi5tRH78QqcTYHwfyNc3bbuLZTTvmk3UhWdAWjG -s test1\n"
                      )
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "_5-resovle-did" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_5-resovle-did" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 5. Resovle DID")
                ]),
                t._v(" "),
                s("p", [
                  t._v("You can resovle IoTeX DID with our web resovler")
                ]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "http://did.testnet.iotex.one/1.0/identifiers/<DID>\n"
                      )
                    ])
                  ])
                ]),
                s("p", [t._v("Exmaple:")]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "http://did.testnet.iotex.one/1.0/identifiers/did:io:0x476c81C27036D05cB5ebfe30ae58C23351a61C4A\n"
                      )
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "_6-update-did" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_6-update-did" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 6. Update DID")
                ]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "Usage:\n  ioctl did update (CONTRACT_ADDRESS|ALIAS) hash uri [flags]\n"
                      )
                    ])
                  ])
                ]),
                s("p", [t._v("Example:")]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "ioctl did update io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8 21e575fd6fd75591465481404986fac73de766446c793ff67adfa171d51adf85 https://gateway.pinata.cloud/ipfs/QmNNhWHyi5tRH78QqcTYHwfyNc3bbuLZTTvmk3UhWdAWjG -s test1\n"
                      )
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "_7-deregister-did" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_7-deregister-did" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 7. Deregister DID")
                ]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        "Usage:\n  ioctl did deregister (CONTRACT_ADDRESS|ALIAS) [flags]\n"
                      )
                    ])
                  ])
                ]),
                s("p", [t._v("Example:")]),
                t._v(" "),
                s("div", { staticClass: "language- extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    s("code", [
                      t._v(
                        " ioctl did deregister io1m3wjevwhz2s58sasq0wj4luxrnqt047s687zw8 -s test1\n"
                      )
                    ])
                  ])
                ])
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      a.default = n.exports;
    }
  }
]);
