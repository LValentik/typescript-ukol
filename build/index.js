"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ukol1() {
    let boolVar = true;
    let numVar = 123;
    let strVar = "Hello World";
    let arrVar = [1, 2, 3];
    function multiply(a, b, c) {
        if (c) {
            console.log(a * b);
        }
        return a * b;
    }
    rl.question('Enter first number: ', (num1) => {
        const number1 = parseInt(num1);
        rl.question('Enter second number: ', (num2) => {
            const number2 = parseInt(num2);
            rl.question('Do you want to print the result into console? (y/n) ', (print) => {
                if (print === 'y') {
                    var printResult = true;
                }
                else {
                    var printResult = false;
                }
                multiply(number1, number2, printResult);
                rl.close();
            });
        });
    });
}
function ukol2() {
    function getFullName(firstName, lastName) {
        return firstName.concat(" ", lastName);
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter first name: ', (name) => {
        rl.question('Enter last name: ', (surname) => {
            console.log(getFullName(name, surname));
            rl.close();
        });
    });
}
function ukol3() {
    const car1 = {
        make: 'Ford',
        model: 'Fiesta',
        year: 2000
    };
    console.log(car1.make, car1.model);
}
function ukol4() {
    function greet(name, greeting = "Hello ") {
        return greeting.concat(" ", name);
    }
    rl.question('Enter your name: ', (name) => {
        rl.question('Enter greeting (optional): ', (greeting) => {
            if (greeting === "") {
                console.log(greet(name));
            }
            else
                console.log(greet(name, greeting));
            rl.close();
        });
    });
}
function ukol5() {
    function printId(id) {
        console.log(typeof id, id);
    }
    printId("Text");
    printId(40);
}
function ukol6() {
    function identity(arg) {
        return arg;
    }
    console.log(identity("Hello"));
    console.log(identity(123));
    console.log(identity(true));
    console.log(identity([1, 2, 3]));
    console.log(identity(["Hello", "World"]));
}
rl.question('Enter task number: ', (task) => {
    switch (task) {
        case '1':
            ukol1();
            break;
        case '2':
            ukol2();
            break;
        case '3':
            ukol3();
            break;
        case '4':
            ukol4();
            break;
        case '5':
            ukol5();
            break;
        case '6':
            ukol6();
            break;
        default:
            console.log('Task not found');
            rl.close();
    }
});
