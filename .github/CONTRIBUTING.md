# Contributing

We're always open to pull requests or code reviews.

## Adding Browser Support and Tests

See the list in `test/acceptance/user-agent-strings.yml` with example user agents and their expected `frowser` object.

Whenever you add support for new browsers or notice a bug / mismatch, please update the list and check if all tests are still passing. Also, make sure to keep the list of browser aliases up-to-date in `src/constants.js`.

For creating aliases, keep the following guidelines in mind:
 - use only lowercase letters for names
 - replace special characters such as space and dashes by underscore
 - whenever possible drop the word `browser` from the original browser name
 - always check for possible duplicates
 - aliases are supposed to also be a shorter version of the original name

Examples:
`Opera Coast` --> `opera_coast`
`UC Browser`  --> `uc`
`SeaMonkey`   --> `seamonkey`

## Testing

If you'd like to contribute a change to `frowser`, modify the files in `src/`, and run the following (you'll need `node` + `npm` installed):

``` sh
$ npm install
$ npm run build #build
$ npm test #run tests
$ npm run lint #check lint rules
```
