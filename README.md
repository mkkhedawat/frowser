# frowser

feature based Browser Detection library

## why another browser detection library ?

because all of existing ones just relied on User Agents & that's not enough


## lib size

~5 KB when plain gzipped

## how to use

### import

```javascript
import * as frowser from "frowser"; // TypeScript
import frowser from "frowser"; // ES6, React
```

## props detection

```javascript
const browser = frowser.getParser(window.navigator.userAgent);

console.log(`The current browser name is "${browser.getBrowserName()}"`);
// The current browser name is "Internet Explorer"
```

or

```javascript
const browser = frowser.getParser(window.navigator.userAgent);
console.log(browser.getBrowser());
{
  name: "Internet Explorer"
  version: "11.0"
}
```

or

```javascript
console.log(frowser.parse(window.navigator.userAgent));
{
  browser: {
    name: "Internet Explorer"
    version: "11.0"
  },
  os: {
    name: "Windows"
    version: "NT 6.3"
    versionName: "8.1"
  },
  platform: {
    type: "desktop"
  },
  engine: {
    name: "Trident"
    version: "7.0"
  }
}
```

## types

```
Frowser.Parser.ParsedResult
```

## Filtering browsers

```javascript
const browser = frowser.getParser(window.navigator.userAgent);
const isValidBrowser = browser.satisfies({
  // declare browsers per OS
  windows: {
    "internet explorer": ">10",
  },
  macos: {
    safari: ">10.1"
  },

  // per platform (mobile, desktop or tablet)
  mobile: {
    safari: '>=9',
    'android browser': '>3.10'
  },

  // or in general
  chrome: "~20.1.1432",
  firefox: ">31",
  opera: ">=22",

  // also supports equality operator
  chrome: "=20.1.1432", // will match particular build only

  // and loose-equality operator
  chrome: "~20",        // will match any 20.* sub-version
  chrome: "~20.1"       // will match any 20.1.* sub-version (20.1.19 as well as 20.1.12.42-alpha.1)
});
```

Settings for any particular OS or platform has more priority and redefines settings of standalone browsers.
Thus, you can define OS or platform specific rules and they will have more priority in the end.

## Contributing
- Fork
- Make changes
- Entry > `src index.js`
- Build `npm run build`
- Test `npm test`
- Raise pull request

## References
Base code is taken from [Bowser](https://github.com/lancedikson/bowser)

## Contributors
- Manish Khedawat (https://github.com/mkkhedawat)


<!--
## publish

```
$ npm adduser
$ npm publish --access public .
```
-->