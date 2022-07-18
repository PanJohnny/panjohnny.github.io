let stack = [0];
let stack_index = 0;
let log = "CAT SCRIPT OUTPUT:\n"
let reader_index = 0;
let cats = [];
const chars = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?!@#$%^&*()_+-=[]{}|;':\",./<>?`~".split("");

let ifStarted = false;
let inIf = false;
let ifEnded = false;
let ifResult = false;
let ifEvalStarted = false;
let shouldEnd = false;

const ifPatterns = {
    "😹😹": (a, b) => a == b,
    "🐱‍🏍": (a, b) => a > b,
    "🐱‍🐉": (a, b) => a < b,
    "🐶😹": (a, b) => a != b,
    "🐱‍🏍😹": (a, b) => a >= b,
    "🐱‍🐉😹": (a, b) => a <= b
}

const functions = {
    "🙀": () => {
        stack[stack_index] += 1;
    },
    "😿": () => {
        stack[stack_index] -= 1;
    },
    "😽": () => {
        stack_index++;
        if (stack[stack_index] == undefined) {
            stack[stack_index] = 0;
        }
    },
    "😾": () => {
        stack_index--;
        if (stack[stack_index] == undefined) {
            stack[stack_index] = 0;
        }
    },
    "😺": () => {
        return stack[stack_index];
    },
    "😸": () => {
        return stack.join("");
    },
    "🐱‍👓": () => {
        print(match(cats[reader_index + 1]));
        reader_index++;
    },
    "🐱‍💻": () => {
        if (cats[reader_index + 1] == "🐱‍💻")
            reader_index++;
        const a = chars[match(cats[reader_index + 1])];

        reader_index++;
        if (a==undefined) {
            return " ";
        } else {
            return a;
        }
    },
    "😼": () => {
        // this acts as the if statement
        ifStarted = true;
    },
    "🐈": () => {
        if (ifStarted) {
            ifStarted = false;
            inIf = true;
        } else if (inIf) {
            inIf = false;
            ifEnded = true;
        }
    },
    "🐭": () => {
        // ask for input
        let input = prompt("Enter input: ");
        if (input == null) {
            alert("Input was null, exiting script");
            shouldEnd = true;
        }

        // if input is not number convert it to number if possible using the chars array
        if (isNaN(input)) {
            let num = 0;
            for (let i = 0; i < input.length; i++) {
                num += chars.indexOf(input[i]);
            }
            input = num;
        }

        stack[stack_index] = input;
        return input;
    }

}

function match(cat) {
    const f = functions[cat];
    if (f) {
        const v = f();
        if (v) {
            return v;
        }
    }
}


function submit(str) {
    cats = splitEmoji(str);
    let currentStatement = "";
    for (a = 0; reader_index < cats.length; reader_index++) {
        if(shouldEnd) 
            break;
        const cat = cats[reader_index];
        if (cat == "🐱‍🚀") {
            break;
        }
        match(cat);
        if (inIf) {
            currentStatement += cat;
        }

        if (ifEnded) {
            ifEnded = false;
            if (currentStatement.length > 0) {
                ifResult = evaluateBoolean(currentStatement);
                currentStatement = "";
            }
        }

        if (cat == "😻") {
            if (ifResult) {
                if (ifEvalStarted) {
                    ifResult = false;
                    ifEvalStarted = false;
                } else {
                    ifEvalStarted = true;
                }
            } else {
                // skip to next appearance of 😻
                while (cats[reader_index] != "😻") {
                    reader_index++;
                }
            }
        }
    }

    print("Final stack: " + stack);

    var l = log;
    log = "CAT SCRIPT OUTPUT:\n";
    stack = [0];
    stack_index = 0;
    cats = [];
    reader_index = 0;
    return {
        log: l,
        stack: stack,
        cursor: stack[stack_index],
        stack_index: stack_index
    };
}

function submitOld(str, old_stack, old_stack_index) {
    stack = old_stack;
    stack_index = old_stack_index;
    return submit(str)
}

function evaluateBoolean(str) {
    // look if str contains any of key in ifPatterns object
    Object.keys(ifPatterns).forEach(key => {
        if (str.includes(key)) {
            const split = str.split(key);
            const a = evalEnclosed(split[0]).cursor;
            const b = evalEnclosed(split[1]).cursor;
            return ifPatterns[key](a, b);
        }
    });

    // if no key was found, return false
    return false;
}

function evalEnclosed(str) {
    // create a copy of everything
    const stack_copy = stack;
    const stack_index_copy = stack_index;
    const cats_copy = cats;
    const reader_index_copy = reader_index;
    const log_copy = log;

    // evaluate the string
    const result = submitOld(str, stack_copy, stack_index_copy);

    // restore the original values
    stack = stack_copy;
    stack_index = stack_index_copy;
    cats = cats_copy;
    reader_index = reader_index_copy;
    log = log_copy;

    return result;

}

function print(str) {
    log += str + "\n";
}

const splitEmoji = (string) => [...new Intl.Segmenter().segment(string)].map(x => x.segment)