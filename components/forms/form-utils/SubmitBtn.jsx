import React from "react";

function SubmitBtn({ btnText = "" }) {
	return (
		<button
			type="submit"
			className="flex items-center px-4 py-2 border-2 border-color-border rounded-md">
			<span className="text-lg capitalize font-bold tracking-wide">
				{btnText}
			</span>
		</button>
	);
}

export default SubmitBtn;
