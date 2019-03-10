# build-number-generator
[![NPM version](https://badge.fury.io/js/build-number-generator.png)](http://badge.fury.io/js/build-number-generator)
[![Build Status](https://travis-ci.org/prantlf/build-number-generator.png)](https://travis-ci.org/prantlf/build-number-generator)
[![Coverage Status](https://coveralls.io/repos/github/prantlf/build-number-generator/badge.svg?branch=master)](https://coveralls.io/github/prantlf/build-number-generator?branch=master)
[![Dependency Status](https://david-dm.org/prantlf/build-number-generator.svg)](https://david-dm.org/prantlf/build-number-generator)
[![devDependency Status](https://david-dm.org/prantlf/build-number-generator/dev-status.svg)](https://david-dm.org/prantlf/build-number-generator#info=devDependencies)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM Downloads](https://nodei.co/npm/build-number-generator.png?downloads=true&stars=true)](https://www.npmjs.com/package/build-number-generator)

Generates a build number to be appended to your product version number, which is unique for each build and which can be read "by a human" to learn about the build time. No need for maintaining the most recent build number in your sources, incrementing it during the build and committing & pushing the new one to your sources.

Features
--------

The generated build number has the following features:

* The date and time of the build can be read "by a human" from looking at the build number. (Uses BCD notation for a year-month-day time stamp: YYMMDDCCC. "CCC" is the count of 2-minute intervals after midnight.) 
* A new unique number can be generated every two minutes. (Enough for usual CI/CD builds running on a central build server after every push to the source code repository.)
* The build number has fixed number of digits. (Contains always nine digits for easier column formatting of version numbers.)
* The build number is an integer. (Can be parsed to a 32-bit integer, if it needs to be processed as a number elsewhere.)

This module offers the following functionality:

* Command-line tool to generate, validate and parse the build numbers. (Can be integrated to any build script.)
* Functional module for programmatic usage with the same functionality. (Can be integrated to JavaScript build scripts like [Grunt] or [Gulp].)

Example
-------

    Full version:     1.0.3.180625392

    Product version:  1.0.3
    Build number:     180625392 (read: 18-06-25, 392*2 minutes after midnight)
    Built at:         25 June 2018 1:04 PM

*Product version* marks the particular version of your product for identification and compatibility-checking purposes. The format of the version number is not fixed. [Node.js] modules usually comply with the [semver] standard.

*Build number* is an additional stamp to be appended to the e product version to identify, when your product package was built.

## Command-line usage

Make sure that you have [Node] >= 6 installed. Install the `build-number-generator` package globally to be able to generate and parse build numbers by running `buildnumgen` from any directory in `PATH`:

    $ npm i -g build-number-generator

    $ buildnumgen
    180625392

    $ buildnumgen 1.0.3
    1.0.3.180625392

    $ buildnumgen 180625392
    Mon Jun 25 2018 13:04

    $ buildnumgen 1.0.3.180625392
    Mon Jun 25 2018 13:04

Running `buildnumgen --help` prints usage instructions:

    $ buildnumgen -h

      Usage: buildnumgen [options] [build_number|product_version]

      Options:

        -V, --version                output the version number
        -s, --separator <separator>  separates product version from build number
        -v, --validate               only validates a build number
        -h, --help                   output usage information

      Prints a new build number if called without arguments. If called with a
      previously generated build number, it will print the time, when it was
      generated. If called with a semver number, it will append the build number
      to it and print the result. The default build number separator is dot (.).
      When validating a build number, the process exists with zero if the input
      is valid, otherwise it exists with a non-zero.

## Programmatic usage

Make sure that you use [Node] >= 6. Install the `build-number-generator` package locally as a development dependency to be able to generate and parse build numbers from JavaScript:

```bash
npm i -D build-number-generator
```

The main module exports four functions to generate build numbers, validate them, parse them to Date instances and format them to shortened readable Date strings.

```javascript
const { generate, validate, parse, format } = require('build-number-generator')

// Returns '180625392'
const buildNumber = generate()
// Returns '1.0.3.180625392'
const buildNumber = generate('1.0.3')
// Returns '1.0.3.180625392'
const buildNumber = generate({ version: '1.0.3' })
// Returns '2018/06-180625392'
const buildNumber = generate({ version: '2018/06', versionSeparator: '-' })

// Returns true
const valid = validate('180625392')
// Returns true
const valid = validate('1.0.3.180625392')
// Returns false
const valid = validate('1.0.3')

// Returns Date instance with Jun 25 2018 13:04
const time = parse('180625392')
// Returns Date instance with Jun 25 2018 13:04
const time = parse('1.0.3.180625392')
// Throws an error
const time = parse('1.0.3')

// Returns 'Mon Jun 25 2018 13:04'
const buildTime = format('180625392')
// Returns 'Mon Jun 25 2018 13:04'
const buildTime = format('1.0.3.180625392')
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.  Add unit tests for any new or changed functionality. Lint and test your code using `npm test`.

## Release History

* 2018-07-07   v0.0.1   Initial release

## License

Copyright (c) 2018-2019 Ferdinand Prantl

Licensed under the MIT license.

[semver]: https://semver.org/
[Node]: https://nodejs.org/
[Grunt]: https://gruntjs.com/
[Gulp]: https://gulpjs.com/
