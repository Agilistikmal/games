import random from 'random';

export const generateQuestion = (level: number = 1) => {
	let operators: string[] = [];
	let operator: string;
	let question: string | undefined;
	let answer: number | undefined;

	if (level == 1) {
		operators = ['+'];
		operator = operators[random.int(0, operators.length - 1)];
		const firstNumber = random.int(0, 10);
		const lastNumber = random.int(0, 10);
		question = `${firstNumber} ${operator} ${lastNumber}`;
		answer = calculate(operator, firstNumber, lastNumber);
	} else if (level == 2) {
		operators = ['+', '-'];
		operator = operators[random.int(0, operators.length - 1)];
		const firstNumber = random.int(0, 15);
		const lastNumber = random.int(0, 15);
		question = `${firstNumber} ${operator} ${lastNumber}`;
		answer = calculate(operator, firstNumber, lastNumber);
	} else if (level == 3) {
		operators = ['-', '*'];
		operator = operators[random.int(0, operators.length - 1)];
		const firstNumber = random.int(0, 20);
		const lastNumber = random.int(0, 20);
		question = `${firstNumber} ${operator} ${lastNumber}`;
		answer = calculate(operator, firstNumber, lastNumber);
	}

	return { question, answer };
};

const calculate = (operator: string, firstNumber: number, lastNumber: number) => {
	if (operator == '+') {
		return firstNumber + lastNumber;
	} else if (operator == '-') {
		return firstNumber - lastNumber;
	} else if (operator == '*') {
		return firstNumber * lastNumber;
	}
};
