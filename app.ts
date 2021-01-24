let userInput: unknown; // VS any
let userName: string;

userInput = 5;
userInput = 'MAX';
// userName = userInput; // ERROR

if (typeof userInput === 'string') {
    userName = userInput;
}
// "never"
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while(true) {}
}

generateError('An error occured', 500)
