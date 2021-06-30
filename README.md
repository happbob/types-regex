# regex-email
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Regular expression for email. [You shouldn't use RegExp for validating values.](http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/) Use it only for hinting to the user.


## Installation
```bash
$ npm install types-regex
```

## Usage
``` ts
import {emailRegex} from 'types-regex';

emailRegex.test('dev+bob@gmail.com');
// => true
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/types-regex?style=flat-square
[npm-url]: https://www.npmjs.com/package/types-regex
[downloads-image]: https://img.shields.io/npm/dt/types-regex?style=flat-square
[downloads-url]: https://www.npmjs.com/package/types-regex
