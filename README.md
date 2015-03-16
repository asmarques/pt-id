# pt-id

A library for validating and generating Portuguese specific identity numbers.

## Installation

```bash
npm install pt-id
```

## Usage

```javascript
var nif = require('pt-id').nif;

console.log(nif.generate());

if (nif.validate('100000002')) {
	console.log('is valid');
}
```