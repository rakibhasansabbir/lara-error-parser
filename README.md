# what is this?

Parse Laravel error to list of messages

# installation

`npm i error-parser --save`

Then...

```
import { error-parser } from 'error-parser';

error-parser.parse(error).forEach((item) => {
    // toast or print error here
});
```