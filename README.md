A tool for even more rapidly scaffolding x-to-y style Twitter bots. Uses ~coleww's [x-to-y](https://www.npmjs.com/package/x-to-y) and ~lalanl's [qauth](https://www.npmjs.com/package/qauth) with a bit of glue splattered between.

[![NPM](https://nodei.co/npm/q-to-y.png)](https://nodei.co/npm/q-to-y/)

##Use this if

- You hate setting up your bots' authentication by hand.
- You want to make a bot that replaces one word with another.

##Don't use this if

- You're using a version of Node older than 4.0.0.
- You want to retrieve your auth values from something besides the qauth-generated flat file.
- You want to make a more complicated bot.
- You hate fun.

##Usage

`qtoy(wordToReplace, newWord, language, [ignore])`

See the [x-to-y](https://www.npmjs.com/package/x-to-y) documentation for more info on the parameters.

```
// This is the entirety of the code that runs https://twitter.com/finalexecutive
const qtoy = require('q-to-y');
qtoy('CEO', 'final boss', 'en');
```
