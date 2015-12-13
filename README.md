# whitelist-merge

Merge 2 objects including only properties from supplied whitelist array

[![NPM](https://nodei.co/npm/whitelist-merge.png?downloads=true&stars=true)](https://nodei.co/npm/whitelist-merge/)

[![Media Suite](http://mediasuite.co.nz/ms-badge.png)](http://mediasuite.co.nz)

[![Build Status](https://travis-ci.org/mediasuitenz/whitelist-merge.svg)](https://travis-ci.org/mediasuitenz/whitelist-merge)

## Installation

```
npm install whitelist-merge --save
```

## Usage

```js
const object1 = {name: 'bob', gender: 'male'}
const object2 = {age: 23, weight: '2.3'}
const whitelist = ['name', 'age']

merge(object1, object2, whitelist)
// -> {name: 'bob', age: 23}
```
