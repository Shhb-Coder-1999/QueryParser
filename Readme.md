# query-parser

> Parse URL query strings


## Install

```
$ npm i my_query_string_parser
```


## Usage

```js

const parseQuery = require('parseQuery')


const Query = "https://www.google.com/search?q=export+file+in+node+js&rlz=1C1GCEA_enIR994SE994&oq=export+file+i&aqs=chrome.0.69i59j69i57j0i20i263i512j0i512l7.5003j0j4&sourceid=chrome&ie=UTF-8";


console.log(parseQuery(Query)) 

/////////////result//////////////////////

/* {
  q: 'export+file+in+node+js',
  rlz: '1C1GCEA_enIR994SE994',
  oq: 'export+file+i',
  aqs: 'chrome.0.69i59j69i57j0i20i263i512j0i512l7.5003j0j4',
  sourceid: 'chrome',
  ie: 'UTF-8'
} */

```


