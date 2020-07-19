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
