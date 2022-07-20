# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anhcodes/lotide`

**Require it:**

`const _ = require('@anhcodes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element of array
* `middle`: returns the middle element(s) of the array
* `tail`: returns the array excluding the first element
* `flatten`: Returns a single array from an array of arrays
* `countOnly`: Counts the amount a string appears in an array
* `letterPositions`: Returns the index(s) of the letter
* `findKeyByValue`: It will return the key of the associated value from an object
* `eqObjects`: Checks if two objects are equal and return true/false
* `eqArrays`: Checks if two arrays are equal and returns true/false