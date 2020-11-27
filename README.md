### Projects

+ `diagnostic`

  Contains interfaces that match the diagnostic interface of the language server protocol.

+ `emitter`

  Takes a MySQL parse tree and outputs source code.

+ `fault-tolerant-parser`

  Modifies the Earley algorithm implemented by `nearley` to be fault tolerant.

  Has code `210000` diagnostics.

+ `macro`

  Expands strings that call macros, provides human-friendly diagnostic traces.

  Has code `230000` diagnostics.

+ `macro-definition-grammar`

  Contains a macro definition parser.

  Has code `220000` diagnostics.

+ `macro-definition-node`

  Contains interfaces for a macro definition parse tree.

+ `mysql-grammar`

  Contains a MySQL parser.

  Has code `200000` diagnostics.

+ `mysql-grammar-generator`

  Generates a MySQL parser. Generated parser is built to `mysql-grammar` project.

+ `nearley-wrapper`

  Used by `x-grammar-generator` projects to generate parsers.

+ `parse-util`

  Contains utility functions used by `x-grammar-generator` projects.

+ `parser` (**deprecated**)

  Old MySQL parser.

+ `parser-node`

  Contains interfaces for a MySQL parse tree.

+ `parser-node-generator`

  Generates types related to the MySQL parse tree.

+ `scanner`

  Scans tokens found in MySQL grammar.

  Has code `100000` diagnostics.

+ `scanner-generator`

  Generates types related to the scanner.

+ `test`

  Contains tests for the entire repository.

+ `unexpanded-content-grammar`

  Contains interfaces for an unexpanded content parse tree.

  Contains an unexpanded content parser.

+ `unexpanded-content-grammar-generator`

  Generates an unexpanded content parser. Generated parser is built to `unexpanded content-grammar` project.

-----

### Testing Individual Files

```
EXPAND_PARSE_EMIT_FILE=depth-0/crazy-thing-6.txt ./node_modules/.bin/mocha -- ./dist/test/expand-parse-emit.test.js -u tdd --recursive
```
```
EXPAND_PARSE_EMIT_GET_EXPANSION_PATH_FILE=unnested-macro-2-twice/use-macro-thrice-2.txt ./node_modules/.bin/mocha -- ./dist/test/expand-parse-emit-get-expansion-path.test.js -u tdd --recursive
```

-----

### Notes on `nearley` problems

https://github.com/kach/nearley/issues/420

https://github.com/kach/nearley/issues/358
