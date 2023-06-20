# 🤖 Chrome Extension App - Modern Web brought to Chrome Extensions

Chrome Extension App uses the best web development practices and provides the best DX. It enables developers to quickly develop Chrome extensions app; nowadays, countless ML applications using LLM provide a browser extension app, which was my primary motivation for building this boilerplate project. 

![chrome extension popup](/.github/assets/chrome-extension-app.png)

## 👨🏻‍💻 DX Capabilities

- 🗨️ Vite. Dev server, HMR (Hot module replacement), Rollup.
- 🫒 Vue3. Reactive, component-based framework for building web interfaces.
- 🤐 vite-plugin-zip-pack for creating chrome extension compressed zip to upload to Chrome Web Store. 
- 🇮🇹 Rome. Linter and Formatting.
- 🥓 crxjs vite plugin. Vite plugin that helps you make Chrome Extensions.
- 👩‍🎨 Postcss with autoprefixer and tailwindcss plugins
- 🎗️ Typescript support
- 🎹 Github actions running code linter and formatting.

## 💻 Using the template to create your own Chrome extension

Follow these steps to use this template:

1. Fork this repository. 
2. Clone the fork to your local machine. 
3. Open the project in VSCode (okay if you prefer another IDE).
4. Run `npm install` to set up the dependencies.
5. Run `npm rum build`, which builds the extension for production. It provides the optimized app code in the `dist` folder and a compressed zip file to upload to Chrome Extensions store under the `artifacts` folder. 

### Load the extension in Chrome

6. Open Chrome and then go to Chrome -> Settings -> Extensions. Make sure developer mode is enabled.
7. Click `Load unpacked` button and select `dist` folder from the project's root folder.

Check the extension load properly by clicking on the extension icon. You should see the extension popup:

![chrome extension popup](/.github/assets/popup.png)

Check content script works by navigating to Gmail. Something like this should be displayed:

![chrome extension content script](/.github/assets/action.png)

### Dev server & enabling HMR

`npm run dev`
then you can change the source code and expect the Chrome extension to reload and update accordingly.

### Linter & Code Formatting

`npm run format` runs the formatter, ensuring consistent code style. `rome format . --write` under the hood.

`npm run lint`. runs checks. `npx rome check .` under the hood.

`npm run lint:fix`. runs checks and applies safe fixes and formatting. `npx rome check . --apply` under the hood.

Project also set up [github action](/.github/workflows/checks.yml) that runs the `npx rome ci .` when push to `main` or  `release` branch.


## 💚 Contributing

Contribute to the project by creating a pull request. Please follow these steps:

1. Fork the repository.
2. Clone the fork to your local machine.
3. Create a new branch from the main branch.
4. Make your changes and commit them.
5. Push your branch to your fork.
6. Create a pull request with a descriptive title and message on this repository. Ensure you run `npm run lint:fix` before creating the pull request because github actions checks it. 

## 🏉 License 

Chrome Extension App is licensed under the [MIT License](https://https://github.com/mtnbarreto/chrome-extension-app/blob/main/LICENSE). 