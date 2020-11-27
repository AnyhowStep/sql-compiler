### Projects

+ `diagnostic`

  Contains interfaces that match the diagnostic interface of the language server protocol.

+ `emitter`

  Takes a MySQL parse tree and outputs source code.

+ `fault-tolerant-parser`

  Has code `210000` diagnostics.

+ `macro`

  Has code `220000` diagnostics.

+ `macro-grammar`

  Contains interfaces for a macro parse tree.

  Contains a macro parser.

+ `macro-grammar-generator`

  Generates a macro parser. Generated parser is built to `macro-grammar` project.

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

-----

### Testing Individual Files

```
EXPAND_PARSE_EMIT_FILE=depth-0/crazy-thing-6.txt ./node_modules/.bin/mocha -- ./dist/test/expand-parse-emit.test.js -u tdd --recursive
```
```
EXPAND_PARSE_EMIT_GET_EXPANSION_PATH_FILE=unnested-macro-2-twice/use-macro-thrice-2.txt ./node_modules/.bin/mocha -- ./dist/test/expand-parse-emit-get-expansion-path.test.js -u tdd --recursive
```
