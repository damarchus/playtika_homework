const pwdShortError = <li key={1}>Password should be 6 symbols or longer</li>;
const pwdLongError = <li key={2}>Password should be 10 symbols or less</li>;
const pwdNumberError = <li key={3}>Password should contain at least 1 digit</li>;
const pwdCapError = <li key={4}>Password should contain at least 1 capital letter</li>;
const emailError = <li key={5}>Is not valid email</li>;
const nameShortError = <li key={6}>Name should be 2 symbols or longer</li>;
const nameDigitError = <li key={7}>Name should not contain digits(yes, Elon, it shouldn't)</li>;

const isEmail = (str) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str);
const containsUppercase = (str) => /[A-Z]/.test(str);
const containsDigit = (str) => /[0-9]/i.test(str);

export class ValidationResult {
    isError: boolean;
    errorDetails: Element[];

    constructor(isError: boolean = false, errorDetails: Element[] = []) {
        this.isError = isError;
        this.errorDetails = errorDetails;
    }
}

export const validatePassword = (str: String) => {
    const validationsMap: Map<Function, Element> = new Map([
        [(str: String) => (str.length < 6), pwdShortError],
        [(str: String) => (str.length > 10), pwdLongError],
        [(str: String) => (!containsDigit(str)), pwdNumberError],
        [(str: String) => (!containsUppercase(str)), pwdCapError],
    ])

    return validateInput(str, validationsMap);
}

export const validateEmail = (str: String) => {
    const validationsMap: Map<Function, Element> = new Map([
        [(str: String) => (!isEmail(str)), emailError]
    ])

    return validateInput(str, validationsMap);
}

export const validateName = (str: String) => {
    const validationsMap: Map<Function, Element> = new Map([
        [(str: String) => (str.length < 2), nameShortError],
        [(str: String) => (containsDigit(str)), nameDigitError],
    ])

    return validateInput(str, validationsMap);
}

const validateInput = (inputText: String, validations: Map<Function, Element>) => {
    let errors: Element[] = [];

    validations.forEach((error, validate) => {
        validate(inputText) && errors.push(error)
    })

    return new ValidationResult(errors.length !== 0, errors);
}