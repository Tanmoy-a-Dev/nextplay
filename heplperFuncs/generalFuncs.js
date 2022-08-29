export function desiredYearsArray(range) {
	const yearsArray = [];
	const thisYear = new Date().getFullYear();
	for (let i = thisYear; i > thisYear - range; i--) {
		yearsArray.push(i);
	}
	return yearsArray;
}
