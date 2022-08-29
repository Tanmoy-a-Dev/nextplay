import React from "react";
import { inputObjectChangeHandler } from "../../../heplperFuncs/stateUpdateFuncs";

function TextArea({
	label = "",
	id = "",
	cols = "",
	rows = "",
	placeholder = "",
	state = "",
	setState = "",
}) {
	// if (label) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<textarea
				name={id}
				id={id}
				cols={cols}
				rows={rows}
				placeholder={placeholder}
				onChange={(e) => inputObjectChangeHandler(e, state, setState)}
				className="resize-none my-4 bg-color-green border-[1px] border-color-border rounded-lg text-color-dark px-2 py-1 placeholder:text-color-light text-base w-full focus:outline-none"></textarea>
		</div>
	);
	// }
	// else {
	// 	return (
	// 		<textarea
	// 			name={id}
	// 			id={id}
	// 			cols={cols}
	// 			rows={rows}
	// 			placeholder={placeholder}
	// 			onChange={(e) => inputObjectChangeHandler(e, state, setState)}
	// 			className="resize-none my-4 bg-transparent border-[1px] border-color-border rounded-lg text-white placeholder:text-base text-base w-full focus:outline-none"></textarea>
	// 	);
	// }
}

export default TextArea;
