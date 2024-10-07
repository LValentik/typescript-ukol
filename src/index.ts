import * as readline from 'readline';
import { start } from 'repl';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ukol1() {   
    let boolVar :boolean = true;
    let numVar :number = 123;
    let strVar :string = "Hello World";
    let arrVar :number[] = [1, 2, 3];

    function multiply(a: number, b: number, c?: boolean): number {
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
    function getFullName(firstName: string, lastName: string): string {
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
function ukol3(){
    interface Car {
        make: string;
        model: string;
        year: number;
    }
    const car1: Car = {
        make: 'Ford',
        model: 'Fiesta',
        year: 2000
    };
    console.log(car1.make, car1.model);
}
function ukol4(){
    function greet(name: string, greeting: string = "Hello "): string {
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
function ukol5(){
    function printId(id: number | string): void {
    console.log(typeof id, id);
    }
    printId("Text");
    printId(40);
}
function ukol6(){
    function identity<T>(arg: T): T {
        return arg;
    }
    console.log(identity<string>("Hello"));
    console.log(identity<number>(123));
    console.log(identity<boolean>(true));
    console.log(identity<number[]>([1, 2, 3]));
    console.log(identity<string[]>(["Hello", "World"]));

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
