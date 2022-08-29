import React from "react";

function CheckField({
	classes = "",
	id = "",
	name = "",
	value = "",
	checked = false,
	onChangeFunc = () => null,
	// index,
}) {
	return (
		<span className={classes}>
			<input
				type="checkbox"
				id={id}
				name={name}
				value={value}
				// checked={checked}
				onChange={onChangeFunc}
				className="cursor-pointer"
			/>
			<label className="cursor-pointer" htmlFor={id}>
				{value}
			</label>
		</span>
	);
}

export default CheckField;
