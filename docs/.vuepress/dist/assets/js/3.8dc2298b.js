(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    519: function(t, a, s) {},
    553: function(t, a, s) {
      "use strict";
      var r = s(519);
      s.n(r).a;
    },
    557: function(t, a, s) {
      "use strict";
      s.r(a);
      var r = {
          data: function() {
            return { gutter: 20 };
          },
          computed: {
            data: function() {
              return this.$page.frontmatter;
            }
          },
          mounted: function() {},
          methods: {
            jump: function(t) {
              window.location = t;
            }
          },
          filters: {
            cardStyle: function(t) {
              return {
                backgroundImage: "url(".concat(t, ")"),
                backgroundSize: "36px 36px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "20px 20px"
              };
            }
          }
        },
        e = (s(553), s(69)),
        n = Object(e.a)(
          r,
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s(
              "div",
              { staticClass: "custom-page" },
              [
                s(
                  "el-row",
                  [
                    s("el-col", [
                      s("h1", [t._v(t._s(t.data.mainTitle))]),
                      t._v(" "),
                      s("div", { staticClass: "sub-title" }, [
                        t._v(t._s(t.data.subTitle))
                      ])
                    ])
                  ],
                  1
                ),
                t._v(" "),
                s(
                  "el-row",
                  [
                    s(
                      "el-col",
                      [
                        s(
                          "el-card",
                          {
                            staticClass: "card-1",
                            style: t._f("cardStyle")(t.data.topCard.icon),
                            attrs: { shadow: "hover" },
                            nativeOn: {
                              click: function(a) {
                                return t.jump(t.data.topCard.link);
                              }
                            }
                          },
                          [
                            s("div", { staticClass: "card-body" }, [
                              s("div", { staticClass: "card-title" }, [
                                s(
                                  "a",
                                  { attrs: { href: t.data.topCard.link } },
                                  [s("h3", [t._v(t._s(t.data.topCard.title))])]
                                )
                              ]),
                              t._v(" "),
                              s("div", [t._v(t._s(t.data.topCard.content))])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                t._v(" "),
                s(
                  "el-row",
                  [s("el-col", [s("h2", [t._v(t._s(t.data.part1Title))])])],
                  1
                ),
                t._v(" "),
                s(
                  "el-row",
                  { attrs: { gutter: t.gutter } },
                  [
                    t._l(t.data.part1Body, function(a, r) {
                      return !0 === a.isHead
                        ? s(
                            "el-col",
                            { key: r, attrs: { span: 24 } },
                            [
                              s(
                                "el-card",
                                {
                                  staticClass: "card-3",
                                  attrs: { shadow: "hover" },
                                  nativeOn: {
                                    click: function(s) {
                                      return t.jump(a.link);
                                    }
                                  }
                                },
                                [
                                  s(
                                    "div",
                                    [
                                      s(
                                        "el-col",
                                        { attrs: { span: 12, xs: 24 } },
                                        [
                                          s(
                                            "div",
                                            { staticClass: "card-title" },
                                            [
                                              s(
                                                "a",
                                                { attrs: { href: a.link } },
                                                [s("h3", [t._v(t._s(a.title))])]
                                              )
                                            ]
                                          ),
                                          t._v(" "),
                                          s("div", [t._v(t._s(a.content))])
                                        ]
                                      ),
                                      t._v(" "),
                                      s(
                                        "el-col",
                                        { attrs: { span: 12, xs: 24 } },
                                        [
                                          s("img", {
                                            staticClass: "thumbnail",
                                            attrs: { src: a.image }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : t._e();
                    }),
                    t._v(" "),
                    t._l(t.data.part1Body, function(a, r) {
                      return !1 === a.isHead
                        ? s(
                            "el-col",
                            { key: r, attrs: { span: 12, xs: 24 } },
                            [
                              s(
                                "el-card",
                                {
                                  staticClass: "card-2",
                                  style: t._f("cardStyle")(a.icon),
                                  attrs: { shadow: "hover" },
                                  nativeOn: {
                                    click: function(s) {
                                      return t.jump(a.link);
                                    }
                                  }
                                },
                                [
                                  s("div", { staticClass: "card-body" }, [
                                    s("div", { staticClass: "card-title" }, [
                                      s("a", { attrs: { href: a.link } }, [
                                        s("h3", [t._v(t._s(a.title))])
                                      ])
                                    ]),
                                    t._v(" "),
                                    s("div", [t._v(t._s(a.content))])
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        : t._e();
                    })
                  ],
                  2
                ),
                t._v(" "),
                s(
                  "el-row",
                  [s("el-col", [s("h2", [t._v(t._s(t.data.part2Title))])])],
                  1
                ),
                t._v(" "),
                s(
                  "el-row",
                  { attrs: { gutter: t.gutter } },
                  t._l(t.data.part2Body, function(a, r) {
                    return s(
                      "el-col",
                      { key: r, attrs: { span: 12, xs: 24 } },
                      [
                        s(
                          "el-card",
                          {
                            staticClass: "card-2",
                            style: t._f("cardStyle")(a.icon),
                            attrs: { shadow: "hover" },
                            nativeOn: {
                              click: function(s) {
                                return t.jump(a.link);
                              }
                            }
                          },
                          [
                            s("div", { staticClass: "card-body" }, [
                              s("div", { staticClass: "card-title" }, [
                                s("a", { attrs: { href: a.link } }, [
                                  s("h3", [t._v(t._s(a.title))])
                                ])
                              ]),
                              t._v(" "),
                              s("div", [t._v(t._s(a.content))])
                            ])
                          ]
                        )
                      ],
                      1
                    );
                  }),
                  1
                ),
                t._v(" "),
                s(
                  "el-row",
                  [s("el-col", [s("h2", [t._v(t._s(t.data.part3Title))])])],
                  1
                ),
                t._v(" "),
                s(
                  "el-row",
                  { attrs: { gutter: t.gutter } },
                  t._l(t.data.part3Body, function(a, r) {
                    return s(
                      "el-col",
                      { key: r, attrs: { span: 12, xs: 24 } },
                      [
                        s(
                          "el-card",
                          {
                            staticClass: "card-2",
                            attrs: { shadow: "hover" },
                            nativeOn: {
                              click: function(s) {
                                return t.jump(a.link);
                              }
                            }
                          },
                          [
                            s("div", [
                              s("div", { staticClass: "card-title" }, [
                                s("a", { attrs: { href: a.link } }, [
                                  s("h3", [t._v(t._s(a.title))])
                                ])
                              ]),
                              t._v(" "),
                              s(
                                "div",
                                t._l(a.tags, function(a, r) {
                                  return s(
                                    "el-tag",
                                    { key: r, attrs: { size: "mini" } },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(a) +
                                          "\n            "
                                      )
                                    ]
                                  );
                                }),
                                1
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    );
                  }),
                  1
                ),
                t._v(" "),
                s(
                  "el-row",
                  [s("el-col", [s("h2", [t._v(t._s(t.data.part4Title))])])],
                  1
                ),
                t._v(" "),
                s(
                  "el-row",
                  { attrs: { gutter: t.gutter } },
                  t._l(t.data.part4Body, function(a, r) {
                    return s(
                      "el-col",
                      { key: r, attrs: { span: 12, xs: 24 } },
                      [
                        s(
                          "el-card",
                          {
                            staticClass: "card-1",
                            style: t._f("cardStyle")(a.icon),
                            attrs: { shadow: "hover" },
                            nativeOn: {
                              click: function(s) {
                                return t.jump(a.link);
                              }
                            }
                          },
                          [
                            s("div", [
                              s("div", { staticClass: "card-body" }, [
                                s("div", { staticClass: "card-title" }, [
                                  s("a", { attrs: { href: a.link } }, [
                                    s("h3", [t._v(t._s(a.title))])
                                  ])
                                ]),
                                t._v(" "),
                                s("div", [t._v(t._s(a.content))])
                              ]),
                              t._v(" "),
                              s(
                                "div",
                                t._l(a.tags, function(a, r) {
                                  return s(
                                    "el-tag",
                                    { key: r, attrs: { size: "mini" } },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(a) +
                                          "\n            "
                                      )
                                    ]
                                  );
                                }),
                                1
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    );
                  }),
                  1
                ),
                t._v(" "),
                s("hr"),
                t._v(" "),
                s(
                  "el-row",
                  { attrs: { gutter: t.gutter } },
                  [
                    s(
                      "el-col",
                      { attrs: { span: 12, xs: 24 } },
                      [s("Content", { attrs: { "slot-key": "foot1" } })],
                      1
                    ),
                    t._v(" "),
                    s(
                      "el-col",
                      { attrs: { span: 12, xs: 24 } },
                      [s("Content", { attrs: { "slot-key": "foot2" } })],
                      1
                    )
                  ],
                  1
                )
              ],
              1
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
