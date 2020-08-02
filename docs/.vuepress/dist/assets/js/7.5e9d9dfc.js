(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    559: function(t, e, r) {
      "use strict";
      r.r(e);
      var o = r(69),
        n = Object(o.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "ContentSlotsDistributor",
              {
                attrs: { "slot-key": t.$parent.slotKey },
                scopedSlots: t._u([
                  {
                    key: "foot1",
                    fn: function() {
                      return [
                        r("h4", { attrs: { id: "chat-with-us" } }, [
                          r(
                            "a",
                            {
                              staticClass: "header-anchor",
                              attrs: { href: "#chat-with-us" }
                            },
                            [t._v("#")]
                          ),
                          t._v(" Chat With Us")
                        ]),
                        t._v(" "),
                        r("p", [
                          t._v("Questions? Chat with us via "),
                          r(
                            "a",
                            { attrs: { href: "mailto:support@iotex.io" } },
                            [t._v("email")]
                          ),
                          t._v(", "),
                          r(
                            "a",
                            {
                              attrs: {
                                href:
                                  "https://community.iotex.io/c/research-development/protocol",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }
                            },
                            [t._v("forum"), r("OutboundLink")],
                            1
                          ),
                          t._v(" or "),
                          r(
                            "a",
                            {
                              attrs: {
                                href: "https://t.me/IoTeXGroup",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }
                            },
                            [t._v("telegram"), r("OutboundLink")],
                            1
                          ),
                          t._v("!")
                        ])
                      ];
                    },
                    proxy: !0
                  },
                  {
                    key: "foot2",
                    fn: function() {
                      return [
                        r(
                          "h4",
                          { attrs: { id: "sign-up-for-developer-updates" } },
                          [
                            r(
                              "a",
                              {
                                staticClass: "header-anchor",
                                attrs: {
                                  href: "#sign-up-for-developer-updates"
                                }
                              },
                              [t._v("#")]
                            ),
                            t._v(" Sign up for Developer Updates")
                          ]
                        ),
                        t._v(" "),
                        r("Home-Subscribe")
                      ];
                    },
                    proxy: !0
                  }
                ])
              },
              [r("Home-Content")],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = n.exports;
    }
  }
]);
