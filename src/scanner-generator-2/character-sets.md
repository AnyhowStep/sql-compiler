```sql
SHOW CHARACTER SET;
```

```js
s
    .split("\n")
    .map(line => line.split("|").map(column => column.trim()))
    .map(line => line.filter(column => column != ""))
    .map(line => {
        const [
            characterSet,
            description,
            defaultCollation,
            maxLength,
        ] = line;
        return {
            characterSet,
            description,
            defaultCollation,
            maxLength : parseInt(maxLength, 10),
        };
    })
```
