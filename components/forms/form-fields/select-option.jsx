import React from "react";

function SelectOption({ value, optionFront }) {
	return (
		<option
			value={value}
			// defaultValue={defaultValue}
			className="text-color-dark w-full bg-color-green overflow-x-hidden">
			{optionFront}
		</option>
	);
}

export default SelectOption;
