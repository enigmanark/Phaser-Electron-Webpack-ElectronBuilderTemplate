Included the example template for Phaser 3 to demonstrate that it works.

Do not develop your game in this project. This project should only be used for distributing releases and demos or whatever. I repeat, do not develop your game in this project.

I recommend installing Yarn instead of using NPM for this.

Run "yarn" to install the dependencies first.

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
