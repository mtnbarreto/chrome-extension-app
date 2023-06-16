# 🤖 Chrome Extension App - Modern Web bring to Chrome Extensions

Chrome Extension App uses the best web development practices and provide best DX. It enables developers to quicky develop chome extensions app, nowadays countless ML applications using LLM provides an browser extension app and this was my main motivations to build this boilerplate project. 

![chrome extension popup](/.github/assets/chrome-extension-app.png)

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

Check the extension load properly by clicking on extension icon, you should see the extension popup:

![chrome extension popup](/.github/assets/popup.png)

Check content script works by navigating to gmail. Something like this should be displayed:

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




