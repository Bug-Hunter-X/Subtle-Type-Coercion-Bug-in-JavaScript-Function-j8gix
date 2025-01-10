# Subtle Type Coercion Bug in JavaScript

This repository demonstrates a subtle bug in a JavaScript function involving type coercion and null handling. The function `foo` aims to add two numbers but returns `null` if either input is `null`. However, the behavior is not entirely intuitive due to how JavaScript handles type coercion.

## Bug Description
The issue lies in the strict equality check (`===`) within the `if` condition. While seemingly straightforward, it can lead to unexpected results when dealing with numbers and `null`.  This example highlights the need for careful consideration of type coercion when working with potentially `null` values in JavaScript.

## Bug Solution
The solution involves explicitly checking for both `null` and `undefined` values and also handling other potential unexpected inputs using a more robust approach.