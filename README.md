# what is this?

Parse Laravel error to list of messages(string)

### Features

- 💫 Client and SSR Support.
- 💪 Written in JavaScript.
- No dependencies.

# installation

`npm i lara-error-parser --save`

Then...

```
import { laraErrorParser } from 'lara-error-parser';

laraErrorParser(error).forEach((item) => {
    // toast or print error(item) here
});
```
### Nuxt 

plugins/lara-error-parser.js
```
import { laraErrorParser } from 'lara-error-parser'

export default (context, inject) => {
  inject('laraErrorParser', laraErrorParser)
  context.$laraErrorParser = laraErrorParser
}
```
nuxt.config.js
```
plugins: [{ src: '~/plugins/lara-error-parser.js' }]
```
Then ...
```
this.$laraErrorParser(error).forEach((item) => {
      // toast or print error(item) here
 });
```

Example error:

```
{
   "message":"The given data was invalid.",
   "errors":{
      "email":[
         "The email has already been taken."
      ],
      "contact_no":[
         "The contact no has already been taken."
      ]
   }
}
```
Example output:

```
[
   "The email has already been taken.",
   "The contact no has already been taken."
]
```

[Note: if errors object empty should return messages] 
