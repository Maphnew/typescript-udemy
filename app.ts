const add = (num1: number, num2: number, showResult: boolean, phrase: string):number => {
    
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
    
}

const n1 = 5;
const n2 = 2.6;
const printResult = true;
const resultPhrase = 'Result is: ';

add(n1, n2, printResult, resultPhrase);

