# what is this?

Parse Laravel error to list of messages

# installation

`npm i lara-error-parser --save`

Then...

```
import { lara-error-parser } from 'lara-error-parser';

lara-error-parser.parse(error).forEach((item) => {
    // toast or print error here
});
```