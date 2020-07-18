# what is this?

Parse Laravel error or validation error to list of messages(string)

# installation

`npm i lara-error-parser --save`

Then...

```
import { laraErrorParser } from 'lara-error-parser';

laraErrorParser(error).forEach((item) => {
    // toast or print error here
});
```