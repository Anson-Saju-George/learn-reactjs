// The various ways to export functions in JavaScript
export default function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

function addFour(a, b, c, d) {
    console.log(a + b + c + d);
}

export { addTwo, addThree, addFour };
// export default addFour;
// A module can only have one default export, but it can have as many named exports as needed.
// export default: A default export is a single value or function that is exported from a module.
// It can be imported without using curly braces and can be given any name when imported.
// For example, if we have a default export like this: