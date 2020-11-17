export interface GenerateCasesArgs {
    depth : number,
    maxDepth : number,

    macroCallCount : number,
    parameterCount : number,
}

function generatePermutations (
    input : readonly string[],
    sequence : readonly string[],
    maxSequenceLength : number,
    onResult : (result : readonly string[]) => [string, readonly string[]],
    results : Map<string, readonly string[]> = new Map<string, readonly string[]>()
) : Map<string, readonly string[]> {
    if (input.length == 0 || (maxSequenceLength >= 0 && sequence.length >= maxSequenceLength)) {
        const [key, value] = onResult(sequence);
        results.set(key, value);
        return results;
    }

    for (let i=0; i<input.length; ++i) {
        const nextInput = [...input];
        nextInput.splice(i, 1);
        generatePermutations(
            nextInput,
            [...sequence, input[i]],
            maxSequenceLength,
            onResult,
            results,
        );
    }

    return results;
}

function generatePermutationsWithRepetition (
    input : readonly string[],
    sequenceLength : number,
    results : string[][] = []
) : string[][] {
    if (input.length == 0) {
        results.push([]);
        return results;
    }
    const sequence : number[] = [];
    for (let i=0; i<sequenceLength; ++i) {
        sequence.push(0);
    }
    function increment () {
        let carry = true;
        for (let i=sequenceLength-1; i>=0; --i) {
            const cur = sequence[i] + (carry ? 1 : 0);
            if (cur == input.length-1) {
                sequence[i] = 0;
                carry = true;
            } else {
                sequence[i] = cur;
                carry = false;
            }
        }
    }

    const max = Math.pow(input.length, sequenceLength);
    for (let i=0; i<max; ++i) {
        const result = sequence.map(index => input[index]);
        results.push(result);

        increment();
    }

    return results;
}

function generateCombinations (
    input : readonly string[],
    sequence : readonly string[],
    maxSequenceLength : number,
    onResult : (result : readonly string[]) => [string, readonly string[]],
    results : Map<string, readonly string[]> = new Map<string, readonly string[]>()
) : Map<string, readonly string[]> {
    if (input.length == 0 || (maxSequenceLength >= 0 && sequence.length >= maxSequenceLength)) {
        const [key, value] = onResult(sequence);
        results.set(key, value);
        return results;
    }

    for (let i=0; i<input.length; ++i) {
        const nextInput = input.slice(i+1);
        generateCombinations(
            nextInput,
            [...sequence, input[i]],
            maxSequenceLength,
            onResult,
            results,
        );
    }

    return results;
}

export function generateCases (
    {
        depth,
        maxDepth,

        macroCallCount,
        parameterCount,
    } : GenerateCasesArgs
) : Set<string> {
    macroCallCount = Math.max(0, macroCallCount);
    parameterCount = Math.max(0, parameterCount);

    console.log("Call", {
        depth,
        maxDepth,
        macroCallCount,
        parameterCount,
    })

    if (macroCallCount == 0 && parameterCount == 0) {
        //results.add(``);
        const results = new Set<string>();
        results.add(`n`);
        return results;
    }

    if (depth >= maxDepth) {
        //results.add(``);
        const results = new Set<string>();
        results.add(`n`);
        for (let i=0; i<parameterCount; ++i) {
            results.add(`${String.fromCharCode("a".charCodeAt(0) + i)}`);
        }
        return results;
    }

    const effectiveParameterCount = depth == 0 ? 0 : parameterCount;

    const content : string[] = [];
    //const nonMacroContentCount = macroCallCount + parameterCount + 1;
    for (let i=0; i<macroCallCount; ++i) {
        content.push("m");
    }
    for (let i=0; i<effectiveParameterCount; ++i) {
        content.push("a");
    }
    /*
    for (let i=0; i<nonMacroContentCount; ++i) {
        content.push("n");
    }
    */
    const contentPermutations = generatePermutations(
        content,
        [],
        -1,
        (result) => {
            const value = result
                /*.filter((cur, index) => {
                    if (cur == "n") {
                        const prv = result[index-1] as string|undefined;
                        //console.log(cur, prv, prv != "n");
                        return prv != "n";
                    } else {
                        return true;
                    }
                });*/
            return [value.join("-"), value];
        },
    );

    const parameters : string[] = [];
    for (let i=0; i<effectiveParameterCount; ++i) {
        parameters.push(String.fromCharCode("a".charCodeAt(0) + i));
    }

    const macros : Set<string> = new Set<string>();

    //for (let i=0; i<=macroCallCount; ++i) {
        //for (let j=0; j<=parameterCount; ++j) {
            const i = macroCallCount;
            const j = parameterCount-(depth%2 == 0 ? 0 : 1);

            //const args : Set<string> = new Set<string>();
            //for (let k=0; k<=macroCallCount; ++k) {
                const k = macroCallCount-1;
                const args = generateCases({
                    depth : depth+1,
                    maxDepth,
                    macroCallCount : k,
                    parameterCount : effectiveParameterCount-(depth%2 == 0 ? 0 : 1),
                });
            //}

            let argPermutations = [...generateCombinations(
                [...args],
                [],
                j,
                (result) => [result.join("-"), result]
            ).values()].filter(m => m.length == j);
            if (argPermutations.length == 0) {
                //throw new Error(`Empty argPermutations`)
                argPermutations = generatePermutationsWithRepetition(
                    [...args],
                    j
                );
            }
            /*
            const argPermutations = generatePermutationsWithRepetition(
                [...args],
                j
            );
            //*/

            //console.log(args.size)
/*
            const argPermutations2 = [...generatePermutations(
                [...args],
                [],
                j,
                (result) => [result.join("-"), result]
            ).values()];*/

            const macroContentPermutations = generateCases({
                depth : depth+1,
                maxDepth,
                macroCallCount : i-(depth%2 == 0 ? 0 : 1),
                parameterCount : j,
            });
            console.log("1", args.size, argPermutations.length, {
                depth : depth+1,
                maxDepth,
                macroCallCount : i-(depth%2 == 0 ? 0 : 1),
                parameterCount : j,
            }, macroContentPermutations.size);//, argPermutations2.length)

            for (const argPermutation of argPermutations) {
                for (const macroContentPermutation of macroContentPermutations) {
                    macros.add("m-"+argPermutation.map(arg => `(${arg})`).join("")+`(${macroContentPermutation})`);
                }
            }
        //}
    //}
    console.log("2", macros.size, macroCallCount)

    /*
    const macroPermutations = generatePermutationsWithRepetition(
        [...macros],
        macroCallCount
    );
    //*/
    /*[...generatePermutations(
        [...macros],
        [],
        macroCallCount,
        (result) => [result.join("-"), result]
    ).values()];
    //*/
    let macroPermutations = [...generateCombinations(
        [...macros],
        [],
        macroCallCount,
        (result) => [result.join("-"), result]
    ).values()].filter(m => m.length == macroCallCount);
    if (macroPermutations.length == 0) {
        //throw new Error(`Empty macroPermutations`)
        macroPermutations = generatePermutationsWithRepetition(
            [...macros],
            macroCallCount
        );
    }
    /*
    const parameterPermutations = generatePermutationsWithRepetition(
        parameters,
        parameterCount
    );
    //*/
    //*
    //*
    let parameterPermutations = [...generateCombinations(
        parameters,
        [],
        parameterCount,
        (result) => [result.join("-"), result]
    ).values()].filter(m => m.length == parameterCount);
    if (parameterPermutations.length == 0) {
        //throw new Error(`Empty parameterPermutations`)
        parameterPermutations = generatePermutationsWithRepetition(
            parameters,
            parameterCount
        );
    }
    //*/
    //*
    /*
    const parameterPermutations = [...generatePermutations(
        parameters,
        [],
        parameterCount,
        (result) => [result.join("-"), result]
    ).values()];
    //*/
    /*
    const parameterPermutations = generatePermutationsWithRepetition(
        parameters,
        parameterCount
    );
    //*/
    console.log("3", contentPermutations.size, macroPermutations.length, parameterPermutations.length)

    const results = new Set<string>();
    for (const [, contentPermutation] of contentPermutations) {
        for (const macroPermutation of macroPermutations) {
            for (const parameterPermutation of parameterPermutations) {
                let macroIndex = 0;
                let parameterIndex = 0;
                const permutation = contentPermutation.map((cur) => {
                    if (cur == "m") {
                        if (macroIndex >= macroPermutation.length) {
                            throw new Error(`macro: ${macroIndex} >= ${macroPermutation.length}; ${macroCallCount}`);
                        }
                        const r = macroPermutation[macroIndex];
                        ++macroIndex;
                        return r;
                    } else if (cur == "a") {
                        if (parameterIndex >= parameterPermutation.length) {
                            throw new Error(`parameter: ${parameterIndex} >= ${parameterPermutation.length}; ${parameterCount}`);
                        }
                        const r = parameterPermutation[parameterIndex];
                        ++parameterIndex;
                        return r;
                    } else {
                        throw new Error(`unknown ${cur}`);
                        //return cur;
                    }
                });
                const str = permutation.join("-");
                results.add(str == "" ? "n" : str);
            }
        }
    }

    return results;
}

function getHistogram (str : string) {
    const histogram = new Map<string, number>();
    for (const c of str) {
        if (c == "-" || c == "(" || c == ")" || c == "m") {
            continue;
        }
        const count = histogram.get(str);
        if (count == undefined) {
            histogram.set(c, 1);
        } else {
            histogram.set(c, count+1);
        }
    }
    return histogram;
}
const foo = generateCases({
    depth : 0,
    maxDepth : 1,

    macroCallCount : 2,
    parameterCount : 2,
});
const arr = [...foo];
arr.sort((a, b) => {
    const aHistogram = getHistogram(a);
    const bHistogram = getHistogram(b);

    if (aHistogram.size != bHistogram.size) {
        return bHistogram.size - aHistogram.size;
    }

    const aScore = [...aHistogram.values()].reduce(
        (memo, cur) => {
            return memo + cur*cur / aHistogram.size;
        },
        0
    );
    const bScore = [...bHistogram.values()].reduce(
        (memo, cur) => {
            return memo + cur*cur / bHistogram.size;
        },
        0
    );
    return aScore - bScore;
});
import * as util from "util";
console.log(util.inspect(
    arr,
    {
        maxArrayLength : 10,
        colors : true,
        compact : false,
    }
))
