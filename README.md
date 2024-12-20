# TypeScript Optional Property Handling and Unexpected Properties

This example demonstrates a subtle issue in TypeScript related to optional properties and how the compiler handles unexpected properties in objects passed to functions.

The `printName` function is designed to handle objects with a `firstName` and an optional `lastName`. However, it doesn't explicitly handle cases where an object has other properties beyond `firstName` and `lastName`.  This can lead to unexpected behavior or compiler errors depending on how strictly you've defined your types.

The `bug.ts` file contains the original code demonstrating the issue. The `bugSolution.ts` provides a possible solution.