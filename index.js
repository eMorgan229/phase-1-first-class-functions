
function receivesAFunction(morningRoutine) {
    morningRoutine();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log("this is a named function");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("this is an anonymous function")
    }
}