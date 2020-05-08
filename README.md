What is happening ?

This is a Key-value store cli
How to ?

run `npm i .`

Function - ADD/ REMOVE/ GET

1. kvs ADD TEST 123 -> will add 123 to store (json file)
2. kvs REMOVE TEST -> will remove TEST or throw an error if Key not found
3. kvs GET TEST -> will get TEST or throw an error if Key not found

To run test

run `npm run i && npm run test`

Files:

1. bin/kvs -> for node runtime
2. StoreJsonFile -> the current cli store
3. InternalModule -> function that calls store and validates the cli arguments
4. Validation.js contains validation
5. Constants.js -> contains constants
