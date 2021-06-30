# types-regex
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Regular expression for email. [You shouldn't use RegExp for validating values.](http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/) Use it only for hinting to the user.


## Installation
```bash
$ npm install types-regex
```

## Usage
### Email
``` ts
import {emailRegex} from 'types-regex';

emailRegex.test('dev+bob@gmail.com');
// => true
```
### Phone
``` ts
import {phoneRegex} from 'types-regex';

phoneRegex.test('01012345678');
// => true
```

### Domain

``` ts
import {domainRegex} from 'types-regex';

// if doesn't include params
domainRegex.dom.test('www.devbob.com');
// => true

// if include params
domainRegex.dom.test('www.devbob.com?email=devbob@gmail.com');
// => true
```
### change phone forms

``` ts
import {phoneFormChange} from 'types-regex';

phoneFormChange('01012345678');
// => 010-1234-5678
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/types-regex?style=flat-square
[npm-url]: https://www.npmjs.com/package/types-regex
[downloads-image]: https://img.shields.io/npm/dt/types-regex?style=flat-square
[downloads-url]: https://www.npmjs.com/package/types-regex
