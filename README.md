# Quickstarts

Demo:
https://quickstarts.netlify.app/

## Packages
- module: The main quick starts library code. See [quick starts README](packages/module/README.md)
- dev: The dev environment to test the module.
- vscode: A VSCode extension to preview quick start yaml files.

## Development

```bash
git clone https://github.com/patternfly/patternfly-quickstarts
cd patternfly-quickstarts
yarn install && yarn build && yarn start
```

## Development Scripts
```sh
# Install development/build dependencies
yarn install

# Start the development server
yarn start


# Build the main module (outputs to "packages/module/dist" dir)
yarn build

# Quick build of the main module for local dev
yarn build:quick
```
