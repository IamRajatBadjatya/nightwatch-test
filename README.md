# Nightwatch Test

This repo contains a sample test automation framework using Nightwatch. The sample tests given in this repo tries to automate [The Internet](https://the-internet.herokuapp.com) website.

## Setup
- Clone this repo
- Run `yarn` or `npm install` to install all dependencies

## Execute tests
- Simply run `yarn test` or `npm run test` to execute tests in firefox browser parallely by default.
- If tests to be executed in chrome, then run `yarn test:chrome` or `npm run test:chrome`.
- Reports can be viewed from `./reports/report<timestamp>-<test suite name>.html`.

## Developer Notes
Tests are written under `./tests/` folder.

Page objects are under `./pages/` folder.

Custom assertion is kept under `./assertions` folder.

The selenium standalone jar, chromedriver and geckodriver are placed under `./bin` directory.

If new environment to be added, open `nightwatch.json` file and add a new environment under the `test_settings` object. For example, refer `chrome`.

### Page object pattern
Each page object may contain the following items:
  - sections - defines each sections in the corresponding page (For ex: header, footer, container).
  - elements - each section will contain the elements object with the corresponding selectors. By default, we use css selector. If in case for any element, we want to use different selector, then you can override using `locateStrategy`. For example, refer `checkbox1` element under `container` section in the `checkboxes.js` page file.
  - commands - A page have custom commands which is more like an action that can be used directly in the test case. For example, navigating from one page to another page can be a custom command, logging in with the given user-credentials can be custom command of a particular page.

## Reference
To know more, read through [Nightwatch Docs](http://nightwatchjs.org/guide).
