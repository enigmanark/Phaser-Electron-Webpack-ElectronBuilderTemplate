Just drop in your assets folder in the top directory, and drop your webpacked game .js bundle into the renderer folder and run yarn dist:dir and you're good to go! If your bundled .js file is named something different other than "project.bundle.js" you'll have to change the require in "/src/renderer/index.js" at the bottom to your file name.

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```
