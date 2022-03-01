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

## Fixing `Route` from `react-router-dom` not having `exact` and other syntax

- I was getting this error:

  ```js
  Property 'exact' does not exist on type 'IntrinsicAttributes & ...
  ```

- So after Googling I [found this](https://stackoverflow.com/a/69866593/8754987) which says:

  > react router v6 doesn't support `exact` anymore.

  > // old - v5

  ```jsx
  <Route exact path="/" component={Home} />
  ```

  > // new - v6

  ```jsx
  <Route path="/" element={<Home />} />
  ```

  > As stated in their documentation:

  - You don't need to use an exact prop on `<Route path="/">` anymore. This is because all paths match exactly by default. If you want to match more of the URL because you have child routes use a trailing `_` as in `<Route path="users/_">`.

  > You can refer to this migration guide: https://reactrouter.com/docs/en/v6/upgrading/v5

## Visual Studio Code intellisense for `onFocus`, `onClick` and other events show type with `Handler` appended

- Trying to get the type to use for the event when declaring a function on a component I found that Visual Studio Code will give us the type like this:

  ```ts
  React.FocusEventHandler<HTMLInputElement>
  ```

- When trying to use this like this:

  ```jsx
  const enableInput = (event: React.FocusEventHandler<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  ```

- We get this error `Property 'target' does not exist on type 'FocusEventHandler<HTMLInputElement>'.`.

- This is because we shouldn't use `React.FocusEventHandler<HTMLInputElement>` as the type for the event. The `onFocus` event type is actually `React.FocusEvent<HTMLInputElement>`. So it should be:

  ```jsx
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  ```
