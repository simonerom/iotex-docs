(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{553:function(t,a,s){"use strict";s.r(a);var n=s(34),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"create-a-decentralized-identity-jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-decentralized-identity-jwt"}},[t._v("#")]),t._v(" Create a Decentralized Identity JWT")]),t._v(" "),s("p",[t._v("Decentralized Identity (DID) is essentially an ID that is")]),t._v(" "),s("ol",[s("li",[t._v("globally unique")]),t._v(" "),s("li",[t._v("resolve-able with high availability, and")]),t._v(" "),s("li",[t._v("cryptographically verifiable.")])]),t._v(" "),s("p",[t._v("Please see more detailed specs in "),s("a",{attrs:{href:"https://github.com/iotexproject/iips/blob/master/iip-7.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("IIP-7"),s("OutboundLink")],1),t._v(" and you can learn more in the "),s("a",{attrs:{href:"/developer/did/overview"}},[t._v("DID documentation")]),t._v(".")]),t._v(" "),s("p",[t._v("Given an IoTeX address "),s("code",[t._v("io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6")]),t._v(", we can derive its DID as "),s("code",[t._v("did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6")]),t._v(". And then you can create a DID JWT as the following example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Antenna "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iotex-antenna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sign"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verify "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iotex-antenna/lib/jwt/jwt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" antenna "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Antenna")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://api.testnet.iotex.one:80"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// recover the whole wallet from a single private key")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unlockedWallet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" antenna"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iotx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("privateKeyToAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" payload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    yourOwnPayload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourOwnPayload"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    iss"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" unlockedWallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sub"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("did:io:")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("unlockedWallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unlockedWallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("privateKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eyJhbGciOiJFSzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ5b3VyT3duUGF5bG9hZCI6InlvdXJPd25QYXlsb2FkIiwiaXNzIjoiMDQ0MjI0MDkwYjhhYWU0NWI2MzdjOTA1NjI5ZTRjMzUyNjBhMTgwNDZkODc3MDlmNDIzMzBhNzlhYzBiYWFmMzc4NWU2NjkxNWQyZjRmZjdiMzgwYTVkNDA5NGYyZWFhM2YyYjc4MDE2YjI3OTIwOWRhYmZhY2Q3NGYxMDI2Y2QwMiIsInN1YiI6ImRpZDppbzppbzF0cHBoc2hmMG5wemF3ZnVnN2c0ZGhyendremVwZmt3Z3E1cHJtNiJ9.FK3R09_C99kvTPb-f56cvXGjkl8wd8auHBJJ2iqljAopuZhk8cg2_Wji8Gi30Q19jonMoQTYpMVREFmxw3d_DQA")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actualPayload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {yourOwnPayload: "yourOwnPayload", iss: "044224090b8aae45b637c905629e4c35260a18046d87709f42…380a5d4094f2eaa3f2b78016b279209dabfacd74f1026cd02", sub: "did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6"}')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The self-sovereign JWT can be decoded as")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EK256K"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"yourOwnPayload"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourOwnPayload"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iss"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"044224090b8aae45b637c905629e4c35260a18046d87709f42330a79ac0baaf3785e66915d2f4ff7b380a5d4094f2eaa3f2b78016b279209dabfacd74f1026cd02"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n.signature\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);