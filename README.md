# es-simplify

Simplifies an english search term to use it with an Elasticsearch completion index.

[![npm version](https://badge.fury.io/js/es-simplify.svg)](https://badge.fury.io/js/es-simplify)
[![Codeship Status for stevejay/es-simplify](https://app.codeship.com/projects/704fda90-a52f-0134-e671-0a368cc4e123/status?branch=master)](https://app.codeship.com/projects/190795)
[![Coverage Status](https://coveralls.io/repos/github/stevejay/es-simplify/badge.svg?branch=master)](https://coveralls.io/github/stevejay/es-simplify?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/stevejay/es-simplify/badges/score.svg)](https://www.bithound.io/github/stevejay/es-simplify)
[![bitHound Dependencies](https://www.bithound.io/github/stevejay/es-simplify/badges/dependencies.svg)](https://www.bithound.io/github/stevejay/es-simplify/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/stevejay/es-simplify/badges/devDependencies.svg)](https://www.bithound.io/github/stevejay/es-simplify/master/dependencies/npm)
![license](https://img.shields.io/npm/l/es-simplify.svg)

[![NPM](https://nodei.co/npm/es-simplify.png)](https://nodei.co/npm/es-simplify/)

## Install

```
$ npm install --save es-simplify
```

## Usage

```js
const simplify = require('es-simplify');

// simplify a term

const result = simplify(' Hi    Yóu   ');

// result is 'hi you'
```

See the unit tests for further examples.

## API

### simplify(term)

Returns a simplied version of the supplied string.

#### input

Type: `string`

The term you want to simplify.

## License

MIT
