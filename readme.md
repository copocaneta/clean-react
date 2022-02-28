## Fixing husky pre-commit hook not workin

- To fix husky pre-commit hook not working I had to [follow this from StackOverflow](https://stackoverflow.com/a/66903558/8754987)

> In 2021
> Sometimes hooks are not added by husky so you need to add it using a simple easy hack.
> You need to uninstall husky first after that install V4 of husky because it ensures that your hooks are correctly installed and after that install the latest version of husky so you get the latest updates.

- NPM

```sh
npm uninstall husky
npm install -D husky@4
npm install -D husky
```

- YARN

```
yarn remove husky
yarn add -D husky@4
yarn add -D husky
```

> If sometimes above trick not works, so let's add the hook into husky, below mention method is used only in V6 and I am showing the husky with lint-staged example.

- NPM

```sh
npm install -D husky

npm set-script prepare "husky install" && npm run prepare

npx husky add .husky/pre-commit "npx lint-staged"

git commit -m "added husky and lint-stagged" // here you will notice the lint-staged checking the files with help of husky
```

- YARN

```sh
yarn add -D husky
npm set-script prepare "husky install" && yarn prepare
npx husky add .husky/pre-commit "yarn lint-staged"
git commit -m "added husky and lint-stagged" // here you will notice the lint-staged checking the files with help of husky
```

## Fixing Webpack `contentBase` and `writeToDisk` changes:

- Following Rodrigo Manguinho course on udemy I can see some webpack settings had their names changed. Main these ones:

  - As we can [see here](https://github.com/webpack/webpack-dev-server/issues/2958), at `webpack.config.js` we had the following changes:
    - `contentBase` was changed to `static`
    - and `writeToDisk` which used to be at `devServer.writeToDisk` now must be at `devServer.writeToDisk.devMiddleware.writeToDisk`.
  - So `devServer` now must look like this:

    ```js
      devServer: {
      static: './public',
      historyApiFallback: true,
      devMiddleware: {
        writeToDisk: true,
      }
    },
    ```
