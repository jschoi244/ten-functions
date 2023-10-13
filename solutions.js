"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

const isTrue = input => input === true;
const isFalse = input => input === false;
const not = input => !input;
const addOne = input => Number(input) + 1;
const isEven = input => {
    if (typeof(input) === 'number' || input !== false) {
        if (input % 2 === 0) {
            return true;
        }
    }
    return false;
}
const isIdentical = (input1, input2) => input1 === input2;
const isEqual = (input1, input2) => input1 == input2;
const or = (input1, input2) => input1 || input2;
const and = (input1, input2) => input1 && input2;
const concat = (input1, input2) => String(input1) + String(input2);
