import React from "react";
import { singleStateChange } from "../../../heplperFuncs/stateUpdateFuncs";

function RadioField({
	justLabel = true,
	classes = "",
	id = "",
	name = "",
	value = "",
	label = "",
	checked = false,
	setState = () => undefined,
}) {
	return (
		<span className={classes}>
			<input
				type="radio"
				id={id}
				value={value}
				name={name}
				className={`${justLabel && "hidden"} peer `}
				defaultChecked={checked}
				onChange={(e) => singleStateChange(e, setState)}
			/>
			<label
				htmlFor={id}
				className="cursor-pointer peer-checked:border-[1px] peer-checked:border-color-border peer-checked:rounded-lg p-2  ">
				{label}
			</label>
		</span>
	);
}

export default RadioField;
