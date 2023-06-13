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

## 💻 Commands

In orden to use this template follow these steps:

1. Clone the repository.



2. 


## 💚 Contributing

Contribute to the project by creating a pull request. Please follow these steps:

1. Fork the repository.
2. Clone the fork to your local machine.
3. Create a new branch from the main branch.
4. Make your changes and commit them.
5. Push your branch to your fork.
6. Create a pull request on this repository with a descriptive title and message.

Checkout the CONTRIBUTING.md file for more information.

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
