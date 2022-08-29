// toggle states
export function toggleStateObj(e, state, setStateObj) {
	const { name, value } = e.target;
	console.log(e.target);
}

export function toggleState(state = false, setState = () => undefined) {
	setState(!state);
}

// input change
export function inputObjectChangeHandler(
	e,
	objState,
	setObjState,
	index = null
) {
	const { name, value } = e.target;
	if (index !== null) {
		const list = [...objState];
		list[index][name] = value;
		setObjState(list);
	} else {
		// console.log(value);
		setObjState({ ...objState, [name]: value });
		// console.log(objState);
		// console.log({ [name]: value });
		// console.log(objState);
	}
}

export function singleStateChange(e, setState) {
	const { name, value } = e.target;
	console.log(`value: ${value}`);
	setState(value);
}
