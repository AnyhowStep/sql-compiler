Inside a `.d.ts` file,

```ts
import {SyntaxKind} from "../parser-node";

declare module "../nearley-wrapper" {
    interface CustomSubstitutionToData {
        [SyntaxKind.DecimalLiteral] : 1
        [SyntaxKind.DeclareFunctionParameterList] : 2
    }
}
```
