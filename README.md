# pt-id
[![Build Status](https://travis-ci.org/asmarques/pt-id.svg)](https://travis-ci.org/asmarques/pt-id)

A library for validating and generating Portuguese identity numbers.

The following identity numbers are supported:
- Número de Identificação Civil / Bilhete de Identidade (BI) - Civil Identification Number
- Número de Identificação Fiscal (NIF) - Fiscal Identification Number
- Número de Documento do Cartão de Cidadão (CC) - Citizen's Card Document Number

## Installation

```bash
npm install pt-id
```

## Usage

```javascript
var nif = require('pt-id').nif;
var bi = require('pt-id').bi;
var cc = require('pt-id').cc;

console.log(nif.generate('company'));
console.log(bi.generate());
console.log(cc.generate());

if (nif.validate('100000002', 'personal')) {
	console.log('is valid');
}

if (bi.validate('900000007')) {
    console.log('is valid');
}

if (cc.validate('000000000ZZ4')) {
    console.log('is valid');
}
```

## License

[MIT](LICENSE)