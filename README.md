Just drop in your assets in the top directory, and drop your webpacked game .js bundle into renderer and run
yarn dist:dir and you're good to go!

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
