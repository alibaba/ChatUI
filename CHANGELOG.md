# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-beta.2](https://github.com/alibaba/ChatUI/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2021-05-24)


### Features

* [Price] support `locale` ([731ad59](https://github.com/alibaba/ChatUI/commit/731ad59d60058d869b72bc15b8ff1e31751550db))
* [Time] export `Time` ([1e6ad64](https://github.com/alibaba/ChatUI/commit/1e6ad6476eaa6b0c64226c1332c20cc2ba57e9e9))


### Bug Fixes

* [Recorder] use passive listeners ([5cb0d7a](https://github.com/alibaba/ChatUI/commit/5cb0d7a2277e7dd651de06ec41acc89be2e9aad4))
* [SendConfirm] remove `S--modalOpen` after close SendConfirm ([f0b95da](https://github.com/alibaba/ChatUI/commit/f0b95da19b307a669e224e95c766486e76183522))
* [useMount] update `useEffect`'s deps ([d44f686](https://github.com/alibaba/ChatUI/commit/d44f6864a18654acde787d8ef5cd127640e9eeb8))
* reset `p` `ul` `ol` `h1-5` ([ef8c817](https://github.com/alibaba/ChatUI/commit/ef8c817aebcadbe83226ee7af00acc27a968d3c4))

## [1.0.0-beta.1](https://github.com/alibaba/ChatUI/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2021-05-21)


### Bug Fixes

* [useClickOutside] fix types ([0ca4d86](https://github.com/alibaba/ChatUI/commit/0ca4d86826cb0d10be032a48267ec28fcd49862f))
* [useMessages] fix message id of the `initialMsgs` ([f5ee9eb](https://github.com/alibaba/ChatUI/commit/f5ee9ebcbae318971245cb6e1f73b4d7054b436c))
* use passive listeners ([d534cf9](https://github.com/alibaba/ChatUI/commit/d534cf9c0990242b63939378e9be0390905864cf))

## [1.0.0-beta.0](https://github.com/alibaba/ChatUI/compare/v1.0.0-alpha.2...v1.0.0-beta.0) (2021-05-19)


### Features

* [style] remove reboot.less ([0992f81](https://github.com/alibaba/ChatUI/commit/0992f8108086796f45049ea02ab07cf2ac72290c))


### Bug Fixes

* [Goods] update `.Goods-name`'s `font-size` to `[@font-size-sm](https://github.com/font-size-sm)` ([11c222a](https://github.com/alibaba/ChatUI/commit/11c222a01609f03b543cb3ad576f75594bbaf8da))
* [Message] adjust the spacing ([a8fb76b](https://github.com/alibaba/ChatUI/commit/a8fb76b259749aa7008983e213714c92a69ac3c7))
* types ([d06821e](https://github.com/alibaba/ChatUI/commit/d06821e599308ad1f70d6789baaa21507a3fe10e))

## [1.0.0-alpha.2](https://github.com/alibaba/ChatUI/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2021-05-14)


### ⚠ BREAKING CHANGES

* [RateActions] change `good/bad` to `up/down`

### Features

* [Button] support `icon` prop ([dc03585](https://github.com/alibaba/ChatUI/commit/dc035851ddec48ce92bddbf40ccfbdb1da379976))
* [Goods] support `children` ([f0f7ef0](https://github.com/alibaba/ChatUI/commit/f0f7ef03c0f7da254488f1183c5beedc0561cc6e))
* [Navbar] support all IconButton's props ([4096ee3](https://github.com/alibaba/ChatUI/commit/4096ee30febbe85b82232fe908965661e91466f3))
* [Portal] `container` support ref object ([a372694](https://github.com/alibaba/ChatUI/commit/a372694f33becd776e80760c6a1f314cc276b799))
* [Toast]  add `aria` attrs ([8bcfe25](https://github.com/alibaba/ChatUI/commit/8bcfe252cf82c31a2f9f00c5b0674b03bbb8586b))
* [useLocale] support fallback ([f0aebb5](https://github.com/alibaba/ChatUI/commit/f0aebb5bd4d87a3d00863323c252c94560c75df2))
* add `useForwardRef` ([669531a](https://github.com/alibaba/ChatUI/commit/669531aa726855df06f68f665d5c9e947a101b36))
* UI 5.0 ([9d981c0](https://github.com/alibaba/ChatUI/commit/9d981c0e834601bf3b592153944b8b04a7e13bc2))


### Bug Fixes

* [Message] apply `user.name` to avatar ([3346bf9](https://github.com/alibaba/ChatUI/commit/3346bf94a0953d08db516ebf293d563f948b5ac2))
* [Notice] update the logic of checking the number of lines ([1fcd117](https://github.com/alibaba/ChatUI/commit/1fcd117762057dce7bb284168f0dd6ee4deb037a))
* [RateActions] set default title ([fb4d2aa](https://github.com/alibaba/ChatUI/commit/fb4d2aa8927d867c52170d3c84289154c68e0130))
* types ([4223bd6](https://github.com/alibaba/ChatUI/commit/4223bd6854631513d7426ee997a19f4e7419bcb5))

## [1.0.0-alpha.1](https://github.com/alibaba/ChatUI/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2021-05-06)


### Features

* add Search ([cab51f0](https://github.com/alibaba/ChatUI/commit/cab51f054217e57d3adff49b7debcf4c7306d5bb))
* UI 5.0 ([36de579](https://github.com/alibaba/ChatUI/commit/36de5790042bf1b5543fdb0e27d412a1cb0d3c65))


### Bug Fixes

* [Popover] use `useClickOutside` with `mousedown` ([42fb5b7](https://github.com/alibaba/ChatUI/commit/42fb5b7270956b962fa7f64b70175909ac97de65))

## [1.0.0-alpha.0](https://github.com/alibaba/ChatUI/compare/v0.3.2...v1.0.0-alpha.0) (2021-04-29)


### Features

* [RichText] export DOMPurify ([730b626](https://github.com/alibaba/ChatUI/commit/730b626be77f4303108e3f272d646dcb75240fef))
* UI 5.0 ([898ba2d](https://github.com/alibaba/ChatUI/commit/898ba2de2fe3bec44a7bf6eb3cf77a9f23620399))


### Bug Fixes

* [useMessages] support `msg.hasTime` ([bd01305](https://github.com/alibaba/ChatUI/commit/bd013056ac7cdf52b43e030da9670c1c9e07a8fb))

### [0.3.2](https://github.com/alibaba/ChatUI/compare/v0.3.1...v0.3.2) (2021-04-14)


### Features

* [useMessages] add `resetList` method ([5371ea5](https://github.com/alibaba/ChatUI/commit/5371ea52a60bde902cc300b28e245bc769266471))


### Bug Fixes

* [importScript] add `crossorigin` to script tag ([935d074](https://github.com/alibaba/ChatUI/commit/935d074b5838d214782ec8854b079f6512abc22e))
* [Modal] fix  `tabIndex` ([b729ad4](https://github.com/alibaba/ChatUI/commit/b729ad43f8132ac299b57dad632ea92e4fa7655e))

### [0.3.1](https://github.com/alibaba/ChatUI/compare/v0.3.1-beta.2...v0.3.1) (2021-03-30)


### Bug Fixes

* [Bubble] explicitly make the text selectable ([3271079](https://github.com/alibaba/ChatUI/commit/3271079bc9d62d0a2b18205810a499ef8f4a08b7))

### [0.3.1-beta.2](https://github.com/alibaba/ChatUI/compare/v0.3.1-beta.1...v0.3.1-beta.2) (2021-03-09)

### [0.3.1-beta.1](https://github.com/alibaba/ChatUI/compare/v0.3.1-beta.0...v0.3.1-beta.1) (2021-03-09)


### Features

* [LazyComponent] export `LazyComponentOnLoadParams` ([3bfd3fe](https://github.com/alibaba/ChatUI/commit/3bfd3fe686c272a39e7f4d7648902efce4727b0f))
* [useComponents] add `hasComponent` method ([d933955](https://github.com/alibaba/ChatUI/commit/d9339559234c9e4515f1a90660d916fb647cb477))


### Bug Fixes

* [ComponentsProvider] support updating `props.components` ([524401d](https://github.com/alibaba/ChatUI/commit/524401d18e95a3bb786ef19c246c01bb118fd39c))

### [0.3.1-beta.0](https://github.com/alibaba/ChatUI/compare/v0.3.0...v0.3.1-beta.0) (2021-03-08)


### Bug Fixes

* [LazyComponent] add `onLoad` event to decorator, and resolve circular dependencies ([e7d76d1](https://github.com/alibaba/ChatUI/commit/e7d76d12e01732c018ebbe26a36ffea9683d3f52))

## [0.3.0](https://github.com/alibaba/ChatUI/compare/v0.3.0-beta.5...v0.3.0) (2021-03-01)

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
