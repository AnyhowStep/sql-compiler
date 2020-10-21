```sql
CREATE TABLE T (X INT, Y INT, A INT, B INT);

SELECT
    X + Y AS Z,
    -- OK, name not in GROUP BY but expr is
    X / Y AS Z2,
    -- OK, is aggregate expr
    AVG(A) AS AVG_A,
    (SELECT AVG(A)) AS SUBQUERY_AVG_A,
    -- NOT OK, cannot nest aggregate expr
    AVG(AVG(A)) AS AVG_A2,
    -- OK, is window expr
    ROW_NUMBER() OVER() AS RN,
    -- NOT OK, partition must use expr in GROUP BY, or be aggregate expr
    ROW_NUMBER() OVER(PARTITION BY X) AS RN,
    -- NOT OK, cannot use window func in window definition
    ROW_NUMBER() OVER(PARTITION BY ROW_NUMBER() OVER()) AS RN,
    -- NOT OK, must be in GROUP BY or be functionally dependent on PK
    B,
    -- OK, expr is in GROUP BY
    X * Y,
    -- NOT OK, must be in GROUP BY or be functionally dependent on PK
    X ^ Y
FROM
    T
GROUP BY
    -- OK
    Z,
    X * Y,
    X / Y,
    -- NOT OK, cannot group by aggregate expr
    AVG_A, SUBQUERY_AVG_A,
    -- NOT OK, cannot group by window expr
    RN
```

We need to make multiple passes.

1. Pass over SELECT clause and bind names

1. Pass over GROUP BY clause and bind names
   + If aggregate/window expr found, error

1. Pass over SELECT clause again
   If name not found in GROUP BY, then expr must satisfy one of following,
   + Must be functionally dependent on columns in GROUP BY
   + expr must be in GROUP BY
