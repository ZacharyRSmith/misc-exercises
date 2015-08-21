// CLEANER SOLUTION:
function superFizzBuzz (num) {
	for (var i = 0; i <= num; i++)
		console.log(_convert(i));
}

function _convert (int) {
	if (int % 3 === 0 && int % 5 === 0 && int % 7 === 0)
		return "SuperFizzBuzz";
	if (int % 3 === 0 && int % 7 === 0)
		return "SuperFizz";
	if (int % 5 === 0 && int % 7 === 0)
		return "SuperBuzz";
	if (int % 3 === 0)
		return "Fizz";
	if (int % 5 === 0)
		return "Buzz";
	if (int % 7 === 0)
		return "Super";

	return int;
}

// FEWER CONDITIONALS:
// function superFizzBuzz (num) {
// 	for (var i = 0; i <= num; i++)
// 		if (int % 7 === 0) {
// 			if (int % 5 === 0) {
// 				if (int % 3 === 0)
// 					console.log("SuperFizzBuzz");
// 				else
// 					console.log("SuperBuzz");
// 			}
// 			else if (int % 3 === 0)
// 				console.log("SuperFizz");
// 			else
// 				console.log("Super");
// 		}
// 		else if (int % 3 === 0)
// 			console.log("Fizz");
// 		else if (int % 5 === 0)
// 			console.log("Buzz");
// 		else
// 			console.log(int);
// }

superFizzBuzz(1000);
