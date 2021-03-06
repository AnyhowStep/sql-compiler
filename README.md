### Projects (Current)

+ **Scanner**

  + `scanner-2`

    Intended to replace `scanner`.

    Takes a string and returns tokens.

  + `scanner-generator-2`

    Generates types for the scanner and parser.

+ **Parser**

  + `compiled-grammar`

    Contains interfaces for a compiled grammar; may safely be serialized to a JSON string.

  + `grammar-builder`

    Used to compile an arbitrary grammar.

  + `grammar-runtime`

    Takes a compiled grammar and a list of tokens, and returns a parse tree.

    Uses a modified version of the Earley algorithm to be robust in the face of
    missing and extra tokens.

    The goal is to return at least one parse tree, no matter how nonsensical the input.

  + `mysql-grammar-2`

    Intended to replace `mysql-grammar`.

    Contains a grammar for MySQL 5.7, based on this file,
    https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy

  + `syntax-kind-generator`

    Generates types for the parser.

-----

### Projects (To refactor)

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

+ `parser-linter`

  Checks a MySQL parse tree for errors.

  Has code `240000` diagnostics.

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

```
PARSE_EMIT_FILE=statement/from-clause/join/rhs-parenthesized-join-long.txt ./node_modules/.bin/mocha -- ./dist/test/parse-emit.test.js -u tdd --recursive
```

-----

### Notes on `nearley` problems

https://github.com/kach/nearley/issues/420

https://github.com/kach/nearley/issues/358

-----

### Notes on References

https://github.com/pingcap/parser

-----

### Notes about static analysis of SQL

https://stackoverflow.com/questions/900055/is-sql-or-even-tsql-turing-complete

http://assets.en.oreilly.com/1/event/27/High%20Performance%20SQL%20with%20PostgreSQL%20Presentation.pdf

https://course.ccs.neu.edu/cs4410sp19/lec_type-inference_notes.html
