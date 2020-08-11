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
    [
      "sidebar",
      {
        grouping: true,
        groupOptions: {
          collapsable: true,
          sidebarDepth: 2
        }
      }
    ],
    "@vuepress/back-to-top",
    "vuepress-plugin-smooth-scroll",
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
          initialOpenGroupIndex: 1,
          "/introduction": [
            {
              collapsable: false,
              title: "Introduction",
              path: "/introduction/whatisiotex",
              children: [
                {
                  collapsable: true,
                  title: "The platform",
                  sidebarDepth: 0,
                  path: "/introduction/whatisiotex",
                  children: [
                    "introduction/whatisiotex",
                    "introduction/platform-overview",
                    "introduction/blockchain-layer",
                    "introduction/middleware-layer",
                    "introduction/tools-layer"
                  ]
                },
                {
                  collapsable: true,
                  title: "Core Concepts",
                  sidebarDepth: 0,
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
              sidebarDepth: 0,
              title: "Developer Home",
              path: "/developer/",
              children: [
                {
                  title: "Software Tools",
                  collapsable: false
                },
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
                    "developer/sdk/install-antenna-js",
                    "developer/sdk/install-antenna-go",
                    "developer/sdk/install-antenna-swift",
                    "developer/sdk/install-antenna-java",
                    "developer/sdk/install-antenna-c"
                  ]
                },
                {
                  title: "Code Examples",
                  path: "/developer/sdk/account-create",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/sdk/account-create",
                    "developer/sdk/transfer",
                    "developer/sdk/smart-contracts",
                    "developer/sdk/xrc20",
                    "developer/sdk/did",
                    "developer/sdk/rpc",
                    "developer/sdk/iopay-integrate",
                    "developer/sdk/iopay-login"
                  ]
                },
                {
                  title: "Pylon dApp Starter",
                  path: "/developer/pylon/introduction",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/pylon/introduction",
                    "/developer/pylon/guides",
                    "/developer/pylon/code-review-checklist"
                  ]
                },
                {
                  title: "Middleware",
                  collapsable: false
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
                  title: "Hardware",
                  collapsable: false
                },
                {
                  title: "Pebble Tracker",
                  path: "/developer/hardware/pebble",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "developer/hardware/pebble",
                    "developer/hardware/pebble-dashboard" //needs update
                  ]
                },
                {
                  title: "Reference",
                  collapsable: false
                },
                {
                  title: "ioctl Client",
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
                  title: "Node Core API",
                  path: "/developer/core-api/api",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: ["/developer/core-api/api"]
                },
                {
                  title: "GraphQL API",
                  path: "/developer/graphql/analytics",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/graphql/analytics",
                    "/developer/graphql/member-portal"
                  ]
                },
                {
                  title: "More Resources",
                  collapsable: false
                },
                {
                  title: "Misc Tools",
                  path: "/developer/more/action-injector",
                  sidebarDepth: 0,
                  collapsable: true,
                  children: [
                    "/developer/more/action-injector",
                    "/developer/more/bookkeeping"
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
