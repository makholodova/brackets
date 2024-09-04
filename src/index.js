module.exports = function check(str, bracketsConfig) {
	console.log(`str: ${str}`)
	console.log(`bracketsConfig: ${bracketsConfig}`)

	const obj = Object.fromEntries(bracketsConfig);
	const bracketsObj = Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

	const openBrackets = [];
	for (let i = 0; i < bracketsConfig.length; i++) {
		openBrackets.push(bracketsConfig[i][0])
	}
	
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		let currentBracket = str[i];
		
		if (openBrackets.includes(currentBracket)) {
			if (stack.length > 0 && stack[stack.length - 1] === currentBracket && bracketsObj[currentBracket] === currentBracket) {
				stack.pop();
			} else {
				stack.push(currentBracket); 
			}

		} else {
			if (stack[stack.length - 1] === bracketsObj[currentBracket]) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length === 0;
}
