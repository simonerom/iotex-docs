module.exports = {
  alias: {
    "@gateway": "introduction/node-concept"
  },
  markdown: {
    lineNumbers: false,
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-katex"));
    }
  },
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
          { text: "Core concepts", link: "/introduction/whatisiotex" },
          { text: "Developers", link: "/developer/" },
          { text: "Get Involved", link: "/contribute/" },
          {
            text: "Discord",
            link:
              "https://discord.com/channels/534888542648664074/549879942775701505"
          }
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
                    "introduction/blockchain-layer",
                    "introduction/middleware-layer",
                    "introduction/tools-layer"
                  ]
                },
                {
                  collapsable: false,
                  title: "Core Concepts",
                  path: "/introduction/account-concept",
                  children: [
                    "introduction/account-concept",
                    "introduction/node-concept",
                    "introduction/action-concept"
                  ]
                }
              ]
            }
          ],

          "/developer": [
            {
              collapsable: false,
              title: "Developer Home",
              path: "/developer/",
              children: [
                {
                  title: "Get Started",
                  path: "/developer/get-started/ioctl-install",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/get-started/ioctl-install",
                    "/developer/get-started/ioctl-create-account",
                    "developer/get-started/single-node",
                    "developer/get-started/interact",
                    "/developer/get-started/ioctl-send-transfer"
                  ]
                },

                {
                  title: "Antenna SDKs",
                  path: "/developer/sdk/overview",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/sdk/overview",
                    "developer/sdk/javascript",
                    "developer/sdk/golang",
                    "developer/sdk/swift",
                    "developer/sdk/java",
                    "developer/sdk/c",
                    "developer/sdk/account-create",
                    "developer/sdk/transfer",
                    "developer/sdk/did"
                  ]
                },
                {
                  title: "Decentralized Identity",
                  path: "/developer/did/overview",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/did/overview",
                    "developer/did/self-managed-interface",
                    "developer/did/create-register",
                    "developer/did/query",
                    "developer/did/update",
                    "developer/did/delete",
                    "developer/did/resolution",
                    "developer/did/verifiable-credentials",
                    "developer/did/security-notes",
                    "developer/did/reference"
                  ]
                },
                {
                  title: "IoCtl Command Reference",
                  path: "/developer/ioctl/install",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/ioctl/install",
                    "developer/ioctl/config",
                    "developer/ioctl/account",
                    "developer/ioctl/alias",
                    "developer/ioctl/action",
                    "developer/ioctl/bc",
                    "developer/ioctl/node",
                    "developer/ioctl/contract",
                    "developer/ioctl/stake2",
                    "developer/ioctl/xrc20",
                    "developer/ioctl/did"
                  ]
                },
                {
                  title: "Reviewing...",
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    "developer/libraries-and-tools",
                    "developer/api",
                    "developer/analytics",
                    "developer/misc"
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  },

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"
      }
    ],
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
