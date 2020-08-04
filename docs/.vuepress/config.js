module.exports = {
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-111756489-6" // UA-00000000-0
      }
    ],
    "tabs"
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "IoTeX Documentaion",
      description: "Developer docs, by the community, for the community"
    }
  },

  themeConfig: {
    //repo: "iotexproject/iotex-docs",
    displayAllHeaders: true,
    editLinks: true,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        collapsable: false,
        nav: [
          { text: "Home", link: "/" },
          { text: "Introduction", link: "/introduction/whatisiotex" },
          { text: "Develop", link: "/developer/" },
          { text: "Get Involved", link: "/contribute/" }
        ],
        sidebar: {
          "/introduction": [
            {
              collapsable: false,
              title: "Introduction",
              path: "/introduction/whatisiotex",
              children: [
                "introduction/whatisiotex",
                {
                  collapsable: false,
                  title: "The platform",
                  path: "/introduction/platform-overview",
                  children: [
                    "introduction/platform-overview",
                    "introduction/blockchain",
                    "introduction/middleware",
                    "introduction/tools-and-api"
                  ]
                },
                {
                  collapsable: false,
                  title: "Core Concepts",
                  path: "/introduction/account-concept",
                  children: [
                    "introduction/account-concept",
                    "introduction/node-concept",
                    "introduction/transaction-concept",
                    "introduction/fee-concept"
                  ]
                }
              ]
            }
          ],

          "/developer": [
            {
              title: "Yet to be reviewed...",
              sidebarDepth: 1,
              collapsable: false,
              children: [
                "developer/libraries-and-tools",
                "developer/ioctl",
                "developer/api",
                "developer/analytics",
                "developer/misc"
              ]
            }
          ]
        }
      }
    }
  },

  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  serviceWorker: false
};
