# Vue 3 Monorepo Template

A template for a fairly minmal monorepo setup with [pnpm workspaces](https://pnpm.io/workspaces) organizing [vue3](https://vuejs.org/)-tsc component libraries with vue3-tsc applications and [express.js](https://expressjs.com/) services within one repository.

## Project structure

This repository is supposed to be used with three pnpm workspaces - split as follows:
```
- apps
  - vue-app
  - vue-app2
  - ...
- packages
  - interfaces
  - component-library
  - component-library2
  - ...
- services
  - web-service
  - web-service2
  - ....
```
The **apps** workspace contains the frontend applications.

The **packages** workspace contains shared interfaces and component libraries used within the web applications.

The **services** workspace contains the backend applications.

Each example workspace contains one or two projects: One vue application, one vue component library and shared interfaces in packages as well as one [express.js](https://expressjs.com/) webservice inside the correct workspace.

## Install from git
First install [Node](https://nodejs.org/) in a recent version as well as [pnpm](https://pnpm.io/).

Clone this repository and change directory:
```
git clone https://github.com/Data-Hero/vue3-mono.git
cd vue3-mono/
```

Then run the following commands:

1. `pnpm install` to install all dependencies.
2. `pnpm build` to build the packages in this repository
3. `pnpm dev` to start a dev server for each project: 
    1. Web App: http://localhost:4000/  
    2. Component: http://localhost:4500/
    3. Service: http://localhost:3000/hello


`pnpm build` has to be run again after changing projects inside the **packages** workspace since it is building the `./packages/**/dist` folder used in other apps or services.
`pnpm dev` will do when developing on projects inside **apps** or **services** workspaces. 
