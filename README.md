# 🤖 Chrome Extension App - Modern Web bring to Chrome Extensions

Chrome Extension App uses the best web development practices and provide best DX. It enables developers to quicky develop chome extensions app, nowadays countless ML applications using LLM provides an browser extension app and this was my main motivations to build this boilerplate project. 

![chrome extension DX](chrome-extension-app.png)

## 👨🏻‍💻 DX Capabilities

- 🗨️ Vite. Dev server, HMR (Hot module replacement), Rollup.
- 🫒 Vue3. Reactive, component-based framework for building web interfaces.
- 🤐 vite-plugin-zip-pack for creating chrome extension compressed zip to upload to store. 
- 🇮🇹 Rome. Linter and Formatting.
- 🥓 crxjs vite plugin. Vite plugin that helps you make Chrome Extensions.
- 👩‍🎨 Postcss with autoprefixer and tailwindcss plugins
- 🎗️ Typescript support
- 🎹 Github actions running code linter and formatting.

## 💻 Using the template to create your own chrome extension

In orden to use this template follow these steps:

1. Fork this repository. 
2. Clone the fork to your local machine. 
3. Open the project in VSCode (okay if you have preference for another IDE).
4. Run `npm install` to set up the dependencies.
5. Run `npm rum build` which build the extension for production. It provides the optimized app code at `dist` folder and also a zip compressed file to upload to Chrome Extensions store under `artifacts` folder. 

### Load the extension in Chrome

6. Open Chrome an then go to Chrome -> Settings -> Extensions. Make sure develoq per mode is enabled.
7. Click `Load unpacked` button and select `dist` folder from the root folder of the project.

Check the extension load properly by clicking on extension icon, extension pop app should be shown

![chrome extension popup](/.github/assets/action.png)

Check content script works by navigating to gmail. Something like this should appear:

![chrome extension content script](/.github/assets/action.png)

### Dev server & enabling HMR

`npm run dev`
then ypu can make changes on the code and expect the chrome extension to update accordingly.

### Linter & Code Formatting

`npm run format` runs the formatter ensuring code . `rome format . --write` under the hood.

`npm run lint`. runs checks. `npx rome check .` under the hood.

`npm run lint:fix`. runs checks and apply safe fixes and formatting. `npx rome check . --apply` under the hood.

Project also set up [github action](/.github/workflows/checks.yml) that runs the `npx rome ci .` when push on `main` or  `release` branch.


## 💚 Contributing

Contribute to the project by creating a pull request. Please follow these steps:

1. Fork the repository.
2. Clone the fork to your local machine.
3. Create a new branch from the main branch.
4. Make your changes and commit them.
5. Push your branch to your fork.
6. Create a pull request on this repository with a descriptive title and message. Make sure you run `npm run lint:fix` before creating the pull request because github actions checks it. 

## 🏉 License 

Chrome Extension App is licensed under the [MIT License](https://https://github.com/mtnbarreto/chrome-extension-app/blob/main/LICENSE). 



# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
