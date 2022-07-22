## [2.0.3](https://github.com/prantlf/build-number-generator/compare/v2.0.2...v2.0.3) (2022-07-22)


### Bug Fixes

* Correct paths to the CJS export and to the bin script ([93dff1f](https://github.com/prantlf/build-number-generator/commit/93dff1f4b000b5926db870ccdf302e27d3381554))

## [2.0.2](https://github.com/prantlf/build-number-generator/compare/v2.0.1...v2.0.2) (2022-06-18)


### Bug Fixes

* Clean bundled sources up ([75d5a0b](https://github.com/prantlf/build-number-generator/commit/75d5a0bf29509bddea70f6bddf344ea9d960e27c))

## [2.0.1](https://github.com/prantlf/build-number-generator/compare/v2.0.0...v2.0.1) (2022-06-18)


### Bug Fixes

* Correct the package version number ([dce3d3e](https://github.com/prantlf/build-number-generator/commit/dce3d3e894f11b72817ecd248afcb162d8d7c2db))

# [2.0.0](https://github.com/prantlf/build-number-generator/compare/v1.0.0...v2.0.0) (2022-06-18)


### Bug Fixes

* Remove commander dependency, modernise project ([d68ba93](https://github.com/prantlf/build-number-generator/commit/d68ba933bad75f135fb8e8f681dfd3d6ed75a99b))
* Use the same font for inputs and buttons as for the rest of the body ([be77fe0](https://github.com/prantlf/build-number-generator/commit/be77fe00d5639fc972f3dd6dfb1d63a43dbedda0))


### BREAKING CHANGES

* Node.js 14.8 or newer is required. Command-line parsing
changed, although no change on the outside is expected. API remained the
same.
* The API (library) still requires Node.js 10 or newer. But the command
  line tool uses features like ES module support and global async/await.
* Commander was replaced by a hand-written argument parser with the same
  functionality, because noch much features were needed. Although no
  changes on the outside shoudl happen, on enever knows...

## 1.0.0

* Add an online page for generating and parsing build numbers
* Introduce module bundles usable in the browser
* Replace the dependency on sprintf.js with hand-coded padding methods

## 0.0.6

* Upgrade package dependencies

## 0.0.5

* Upgrade module dependencies
* Do not format time zone to the readable build date

## 0.0.4

Upgrade module dependencies

## 0.0.3

Upgrade module dependencies

## 0.0.2

Do not package files not needed in the npm module

## 0.0.1

Initial release.
