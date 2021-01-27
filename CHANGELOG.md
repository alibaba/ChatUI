# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0-beta.5](https://github.com/alibaba/ChatUI/compare/v0.3.0-beta.4...v0.3.0-beta.5) (2021-01-27)


### Features

* [RichText] add `data-cui-href` when the `href` of the link is removed ([29fde15](https://github.com/alibaba/ChatUI/commit/29fde15b80b3532c57ff948deeb8b02a3332c8a3))

## [0.3.0-beta.4](https://github.com/alibaba/ChatUI/compare/v0.3.0-beta.3...v0.3.0-beta.4) (2021-01-22)


### Bug Fixes

* [Composer] the input box displays one row by default ([2d6d636](https://github.com/alibaba/ChatUI/commit/2d6d6364ce6e4b4459e4cd7d81a9c1ecdce461f9))

## [0.3.0-beta.3](https://github.com/alibaba/ChatUI/compare/v0.3.0-beta.1...v0.3.0-beta.3) (2021-01-19)


### ⚠ BREAKING CHANGES

* rename `.Carousel-indicators` to `.Carousel-dots`

### Features

* [Carousel] apply `will-change: transform` to `.Carousel-inner` ([4961f54](https://github.com/alibaba/ChatUI/commit/4961f54b872fc4acabc270441cfac0a99534f27d))
* [Carousel] export `CarouselHandle` ([05d9eeb](https://github.com/alibaba/ChatUI/commit/05d9eebd3e662773b49e021eb24ff3915aa40c25))
* [Carousel] move the dots to the middle bottom of the slide ([1d71888](https://github.com/alibaba/ChatUI/commit/1d71888e1bcd3d8db738f573671626e21b0df24c))
* [RichText] set `a` element owning target to `target=_blank` ([cb83871](https://github.com/alibaba/ChatUI/commit/cb83871a4b08c91b132349751307234586ce5af1))
* add `ComponentsProvider`, `LazyComponent` ([53b3802](https://github.com/alibaba/ChatUI/commit/53b38021a862264ec3918878a0a03caff037760f))


### Bug Fixes

* [Carousel] pause when hover dot ([424840d](https://github.com/alibaba/ChatUI/commit/424840dcf292dfb8e8c27335f4f757fa81d2aaae))
* [Carousel] separate touch and mouse events ([a533584](https://github.com/alibaba/ChatUI/commit/a533584bc738d5c73e02e18139b848fc24da9bae))
* [ErrorBoundary] update `FallbackProps` ([62fe62c](https://github.com/alibaba/ChatUI/commit/62fe62cd76be2348ae08fa9bfa8bfc6f55b1b423))

## [0.3.0-beta.2](https://github.com/alibaba/ChatUI/compare/v0.3.0-beta.1...v0.3.0-beta.2) (2021-01-18)


### ⚠ BREAKING CHANGES

* rename `.Carousel-indicators` to `.Carousel-dots`

### Features

* [Carousel] apply `will-change: transform` to `.Carousel-inner` ([4961f54](https://github.com/alibaba/ChatUI/commit/4961f54b872fc4acabc270441cfac0a99534f27d))
* [Carousel] move the dots to the middle bottom of the slide ([1d71888](https://github.com/alibaba/ChatUI/commit/1d71888e1bcd3d8db738f573671626e21b0df24c))
* [RichText] set `a` element owning target to `target=_blank` ([cb83871](https://github.com/alibaba/ChatUI/commit/cb83871a4b08c91b132349751307234586ce5af1))
* add `ComponentsProvider`, `LazyComponent` ([53b3802](https://github.com/alibaba/ChatUI/commit/53b38021a862264ec3918878a0a03caff037760f))


### Bug Fixes

* [Carousel] pause when hover dot ([424840d](https://github.com/alibaba/ChatUI/commit/424840dcf292dfb8e8c27335f4f757fa81d2aaae))

## [0.3.0-beta.1](https://github.com/alibaba/ChatUI/compare/v0.3.0-beta.0...v0.3.0-beta.1) (2021-01-18)


### Features

* [Carousel] support `clickDragThreshold` props ([08b6916](https://github.com/alibaba/ChatUI/commit/08b6916acc0b4fc617e03caed4b9b4f26c25b37d))

## [0.3.0-beta.0](https://github.com/alibaba/ChatUI/compare/v0.2.2...v0.3.0-beta.0) (2021-01-17)


### Features

* [Carousel] refactor with hooks ([73a564b](https://github.com/alibaba/ChatUI/commit/73a564b2eeb6c28df3f20a28f1a968498e347ceb))
* [ErrorBoundary] support `onError` props ([9bb1b73](https://github.com/alibaba/ChatUI/commit/9bb1b7392416179ee33687bf98fdba98c79b1be6))
* [utils] export `importScript` and `lazyComponent` ([3770ee3](https://github.com/alibaba/ChatUI/commit/3770ee34c61f1ae62a94fbc42d60c7fd9fa9e39e))
* [utils] export `mountComponent` ([735e869](https://github.com/alibaba/ChatUI/commit/735e869a0140e7bb9dedcc5c0862be4f5d68b33c))

### [0.2.2](https://github.com/alibaba/ChatUI/compare/v0.2.2-beta.0...v0.2.2) (2021-01-08)


### Features

* [ErrorBoundary] support `FallbackComponent` props ([a1915a7](https://github.com/alibaba/ChatUI/commit/a1915a77552b47c9ce72fc967ecae1052ffb1c94))


### Bug Fixes

* [Video] show the play button when the cover is specified ([3d91644](https://github.com/alibaba/ChatUI/commit/3d91644c7db7089911bfcd9af491d49d993f1404))

### [0.2.2-beta.0](https://github.com/alibaba/ChatUI/compare/v0.2.1...v0.2.2-beta.0) (2021-01-03)


### Features

* [Composer] add `data-action-icon` to `.Composer-actions` ([76add41](https://github.com/alibaba/ChatUI/commit/76add417e6c8a9317c5d303165440988638cef92))
* [Composer] show toolbar toggle button when typing ([11b850b](https://github.com/alibaba/ChatUI/commit/11b850b6170f3f84881e72a8b43eb705ed1c7714))

### [0.2.1](https://github.com/alibaba/ChatUI/compare/v0.2.0...v0.2.1) (2020-12-17)


### Bug Fixes

* [Composer] Revert .ChatFooter's z-index ([9a855b0](https://github.com/alibaba/ChatUI/commit/9a855b0eeee104b8693380679faeba69dbfadf33))
* [RateActions] Reduce .RateActions' z-index ([0ca468e](https://github.com/alibaba/ChatUI/commit/0ca468e0f06406b2e9c02c1cb7e22795201f8c01))

## [0.2.0](https://github.com/alibaba/ChatUI/compare/v0.1.5...v0.2.0) (2020-12-16)


### Features

* [Composer] Change the send button and plus sign to mutually exclusive display ([de48814](https://github.com/alibaba/ChatUI/commit/de4881497cd0588b3e05d45477e978e279075cd4))


### Bug Fixes

* [Input] update `enterKeyHint`'s type ([a880eac](https://github.com/alibaba/ChatUI/commit/a880eac5329c4a674a2ad0b504a75bfc8c4b5b68))

### [0.1.5](https://github.com/alibaba/ChatUI/compare/v0.1.4...v0.1.5) (2020-12-08)


### Features

* **list:** add bordered style ([c30961a](https://github.com/alibaba/ChatUI/commit/c30961aba1a92c27b24acb146398be0e41a5783f))
* **quick-replies:** use `item.code` as the `key` for items ([f0ca636](https://github.com/alibaba/ChatUI/commit/f0ca636dc70491886389d3cc48b8a18692eb64b2))
* **scroll-view:** add props `itemKey` to specify keys for items ([5de57ca](https://github.com/alibaba/ChatUI/commit/5de57ca6f98374a79dd21b658cb9a9435d1a6116))


### Bug Fixes

* change ChatFooter's z-index ([646cbb5](https://github.com/alibaba/ChatUI/commit/646cbb54ed4c667fad8a9873c93dac4cf800b8f8))

### [0.1.4](https://github.com/alibaba/ChatUI/compare/v0.1.3...v0.1.4) (2020-11-24)


### Bug Fixes

* **tooltip:** fix tooltip's z-index ([bfdd1a2](https://github.com/alibaba/ChatUI/commit/bfdd1a255388abdbf443fdbb24ed6efcc7c9bf0e))

### [0.1.3](https://github.com/alibaba/ChatUI/compare/v0.1.2...v0.1.3) (2020-11-16)


### Features

* **modal:** auto focus by default ([1fe056e](https://github.com/alibaba/ChatUI/commit/1fe056eefe5f95ae4f87b486df732aa8eca8c622))


### Bug Fixes

* change `enterkeyhint` to `enterKeyHint` ([270f8fc](https://github.com/alibaba/ChatUI/commit/270f8fc419920d54aa9d7288486cb82d3244798a))

### [0.1.2](https://github.com/alibaba/ChatUI/compare/v0.1.1...v0.1.2) (2020-11-05)

### 0.1.1 (2020-10-22)

* optimize `useMessages` ([38fd498](https://github.com/alibaba/ChatUI/commit/38fd498f4f96e4e6129523f1936794269bcedba3))
* add `tabIndex` to ModalBase
