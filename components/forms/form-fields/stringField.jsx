// states updating functions
import { inputObjectChangeHandler } from "../../../heplperFuncs/stateUpdateFuncs";

// css
// import field from "../../styles/components/form/FormFields.module.scss";

const StringField = ({
	containerClass = "",
	label = "",
	id = "",
	type = "",
	required = false,
	inputClass = "",
	value = "",
	statesObj = {},
	setStatesObj = function () {
		return;
	},
}) => {
	return (
		<div className="flex flex-col space-y-2 w-full md:w-2/4 xl:w-1/4 px-4">
			<label htmlFor={id} className="">
				{label}
			</label>
			<input
				type={type}
				required={required}
				id={id}
				name={id}
				value={value}
				onChange={(e) => inputObjectChangeHandler(e, statesObj, setStatesObj)}
			/>
		</div>
	);
};

export default StringField;
