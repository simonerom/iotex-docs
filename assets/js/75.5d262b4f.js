(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{570:function(t,e,a){"use strict";a.r(e);var s=a(34),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iotex-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotex-accounts"}},[t._v("#")]),t._v(" IoTeX Accounts")]),t._v(" "),a("p",[t._v("An Account represents any entity participanting in the IoTeX network, that can be a user, a device, an enterprise, or even a piece of software that lives on the blockchain itself (a so called "),a("em",[t._v("smart contract")]),t._v('). Each IoTeX account always has a "public key" and a "Private key" associated with it. The public key can be represented as a human-readable string of 41 characters by '),a("code",[t._v("io1...")]),t._v(", that is referred to as the "),a("strong",[t._v("Address")]),t._v(" of the account.")]),t._v(" "),a("p",[t._v("A typical address in the IoTeX blockchain looks like this:")]),t._v(" "),a("p",[a("code",[t._v("io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd")])]),t._v(" "),a("p",[t._v("Similarly to other smart contract platforms, in IoTeX we have two type of accounts: "),a("strong",[t._v("owned")]),t._v(" accounts that have a known "),a("strong",[t._v("private key")]),t._v(" associated with them (typically owned by people, enterprises or IoT devices that initiate actions from those accounts), and "),a("strong",[t._v("smart contract")]),t._v(" accounts that do not have a known private key associated with them, hence they cannot initiate actions.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/introduction/accounts.png",alt:"IoTeX Platform"}})]),t._v(" "),a("h2",{attrs:{id:"owned-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#owned-accounts"}},[t._v("#")]),t._v(" Owned Accounts")]),t._v(" "),a("p",[t._v("For owned accounts, the private key is used to "),a("em",[t._v("sign")]),t._v(" actions on behalf of the account itself: because each and every account address has one and only one associated private key, we can say that any blockchain action signed by a certain address "),a("em",[t._v("is owned")]),t._v(" by whoever know the private key that generates that addressy.")]),t._v(" "),a("p",[t._v("While the address of an account can be generated from the private key, the opposite is not possible: no one can trace the private key that generated a certain address from the knowledge of the address alone. For this reason, the address can be safely shared with anyone (e.g. to receive transfers) while the private key should always be kept secret and safely stored as it's used to "),a("em",[t._v("control")]),t._v(" the account, and it represents the proof of ownership of that account and all the actions it initiated.")]),t._v(" "),a("h2",{attrs:{id:"smart-contract-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-contract-accounts"}},[t._v("#")]),t._v(" Smart contract Accounts")]),t._v(" "),a("p",[t._v("As anticipated, smart contract accounts do not have a private key associated to it, therefore they cannot initiate transactions: a contract address can only be the destination of transactions. On the other hand, a smart contract address has some "),a("strong",[t._v("executable code")]),t._v(" associated to it, that gets "),a("strong",[t._v("executed")]),t._v(" each time a transaction is sent to its address.")])])}),[],!1,null,null,null);e.default=o.exports}}]);