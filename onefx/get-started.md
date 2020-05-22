---
title: Get Started
---

# Getting Started

OneFx is a full-stack framework for building web apps. Here are the features you’ll find in Onefx.js:

- Server-side rendering and universal rendering with React and Redux
- Apollo GraphQL (docs + playground), ES2017, TypeScript, TSX support out of the box
- Server-side development via Koa.js

## Create a project

```bash
git clone https://github.com/puncsky/web-onefx-boilerplate.git my-awesome-project
```

## Run your project

This is intended for \*nix users. If you use Windows, go to [Run on Windows](/onefx/guides.html#run-on-windows). Let’s first prepare the environment.

```bash
cd my-awesome-project

nvm use 10.15.0
npm install

# prepare environment variable
cp ./.env.tmpl ./.env
```

### Development mode

To run your project in development mode, run:

```bash
npm run watch
```

The development site will be available at [http://localhost:5000](http://localhost:5000).

### Production Mode

It’s sometimes useful to run a project in production mode, for example, to check bundle size or to debug a production-only issue. To run your project in production mode locally, run:

```bash
npm run build-production
NODE_ENV=production npm run start
```

### NPM scripts

- `npm run test`: test the whole project and generate a test coverage
- `npm run ava ./path/to/test-file.js`: run a specific test file
- `npm run build`: build source code from `src` to `dist`
- `npm run lint`: run the linter
- `npm run flow`: run the flow type check
- `npm run kill`: kill the node server occupying the port 4100.

## Code Styles

We use prettier, tslint, and editorconfig to enforce consistent styles across the whole project, so that we will not bikeshed on coding styles in the code review.

However, please visit our [Contributing Code](/onefx/code-review-checklist.html) before submitting your code.

## Architecture

![Onefx Architecture](https://res.cloudinary.com/dohtidfqh/image/upload/v1546379050/web-guiguio/onefx-architecture.png)

```txt
.
├── README.md
├── ava.config.js           // ava test util configuration
├── babel.config.js         // babel compiler/transpiler configuration
├── babel-register.js.      // babel register options
├── config                  // project configuration
│   ├── default.js          // base config to be extended in all env
│   ├── development.js      // config in NODE_ENV=development
│   ├── production.js       // config in NODE_ENV=production
│   └── test.js             // config in NODE_ENV=test
├── coverage                // test coverage
├── dist                    // destination for src build result
├── gulpfile.babel.js       // gulp task runner config
├── package.json
├── renovate.json           // renovate bot to automate dependency bumps
├── server.ts               // project entry
├── src                               // source code
│   ├── api-gateway                   // APIs server defined in GraphQL for the clients to call
│   │   ├── api-gateway.graphql
│   │   ├── api-gateway.ts
│   │   └── resolvers
│   │       └── meta-resolver.ts
│   ├── client                        // browser-side source code
│   │   ├── javascripts
│   │   │   └── main.tsx
│   │   ├── static
│   │   │   ├── favicon.png
│   │   │   ├── manifest.json
│   │   │   └── robots.txt
│   │   └── stylesheets
│   │       └── main.scss
│   ├── model                         // data models
│   │   ├── index.ts
│   │   └── model.ts
│   ├── server                        // onefx server
│   │   ├── index.ts
│   │   ├── middleware                // koa middleware
│   │   │   ├── index.ts
│   │   │   ├── manifest-middleware.ts
│   │   │   └── set-middleware.ts
│   │   ├── server-routes.tsx          // server-side routes
│   │   └── start-server.tsx           // server initialization
│   └── shared                        // js code shared by both the server and the client
│       ├── app-container.ts
│       ├── app.ts
│       ├── common
│       ├── home
│       │   └── home.ts
│       └── register-service-worker.js
├── translations          // translations supported in this website
│   ├── en.yaml
│   └── zh-cn.yaml
├── Procfile                // heroku Procfile
└── webpack.js            // webpack bundler config
```
