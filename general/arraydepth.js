/*
Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

Examples:

depth([1, 2, 3, 4]) ➞ 1
depth([1, [2, 3, 4]]) ➞ 2
depth([1, [2, [3, 4]]]) ➞ 3
depth([1, [2, [3, [4]]]]) ➞ 4

Why? Relatively easy to solve if you go for recursion, which is a classic interview theme. Can ask followup questions about performance, max call stack depth, etc.
 */

function arraydepth(arr) {
    return Array.isArray(arr) ?
        1 + Math.max(...arr.map(depth)) :
        0;
}
