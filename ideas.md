## Proposed All-in-One Utility Package: `omniutils`

### Core Utilities

#### String Manipulation
* **`capitalize`**: Capitalizes the first letter of a string.
* **`decapitalize`**: Decapitalizes the first letter of a string.
* **`reverse`**: Reverses the characters of a string.
* **`truncate`**: Truncates a string to a specified length and adds an ellipsis.
* **`slugify`**: Converts a string to a URL-friendly slug.
* **`camelCase`**: Converts a string to camel case.
* **`kebabCase`**: Converts a string to kebab case.
* **`snakeCase`**: Converts a string to snake case.
* **`isPalindrome`**: Checks if a string is a palindrome.

#### Array Manipulation
* **`flatten`**: Flattens a nested array.
* **`groupBy`**: Groups elements of an array by a specified property.
* **`shuffle`**: Shuffles the elements of an array randomly.
* **`intersection`**: Finds the intersection of two arrays.
* **`difference`**: Finds the difference between two arrays.
* **`union`**: Finds the union of two arrays.
* **`unique`**: Removes duplicate elements from an array.

#### Object Manipulation
* **`clone`**: Creates a deep copy of an object.
* **`merge`**: Merges two objects, with later properties overwriting earlier ones.
* **`pick`**: Picks specific properties from an object.
* **`omit`**: Omits specific properties from an object.
* **`isEmpty`**: Checks if an object is empty.

#### Date and Time Utilities
* **`formatDate`**: Formats a date object according to a specified format.
* **`parseDate`**: Parses a date string into a Date object.
* **`getTimezoneOffset`**: Gets the timezone offset for a given location.
* **`addDays`**: Adds a specified number of days to a Date object.
* **`subtractDays`**: Subtracts a specified number of days from a Date object.

### Additional Features
* **HTTP Requests:**
  * `get`, `post`, `put`, `patch`, `delete` methods for making HTTP requests.
  * Options for setting headers, query parameters, and request body.
* **File System Operations:**
  * `readFile`, `writeFile`, `mkdir`, `rmdir`, `copyFile`, `deleteFile`
* **Data Validation:**
  * Functions for validating email addresses, phone numbers, URLs, etc.
* **Random Number Generation:**
  * `getRandomInt`, `getRandomFloat`, `getRandomBoolean`
* **Color Manipulation:**
  * Functions for converting between RGB, HEX, HSL, and HSV color models.
* **Cryptographic Functions:**
  * Encryption and decryption using various algorithms (e.g., AES, RSA).
* **Performance Optimization:**
  * Functions for profiling and optimizing code.

