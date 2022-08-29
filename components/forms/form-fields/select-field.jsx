// states updating functions
import {
	inputObjectChangeHandler,
	singleStateChange,
} from "../../../heplperFuncs/stateUpdateFuncs";
import SelectOption from "./select-option";

// css
// import field from "../../styles/components/form/FormFields.module.scss";

const SelectField = ({
	// containerClass = "",
	label = "",
	// selectClass = "",
	id = "",
	defaultValue = "select",
	disabledOptionValue = "select",
	disabledOptionTag = "select",
	optionsArray = [],
	keyOfValue = "",
	withLink = {
		show: false,
		mainLink: "",
	},
	state = {},
	setState = function () {
		return;
	},
}) => {
	const isStateObject =
		typeof state === "object" && !Array.isArray(state) && state !== null;
	return (
		<div className="flex flex-col xl:flex-row xl:h-10 xl:items-center xl:space-x-2 space-y-2 w-full">
			<label htmlFor={id} className="text-xl xl:text-base">
				{label}
			</label>
			<select
				name={id}
				id={id}
				defaultValue={defaultValue}
				className="text-color-dark h-8 text-lg capitalize focus:outline-none rounded-md bg-transparent border-[1px] border-color-border"
				onChange={
					isStateObject
						? (e) => inputObjectChangeHandler(e, state, setState)
						: (e) => singleStateChange(e, setState)
				}>
				<option
					value={disabledOptionValue}
					className="text-color-dark bg-color-green w-full">
					{disabledOptionTag}
				</option>

				{optionsArray.map((option, index) => {
					if (
						typeof option === "object" &&
						!Array.isArray(option) &&
						option !== null
					) {
						return (
							<SelectOption
								key={index}
								value={option[keyOfValue]}
								optionFront={option[keyOfValue]}
							/>
						);
					} else {
						return (
							<SelectOption key={index} value={option} optionFront={option} />
						);
					}
				})}
			</select>
		</div>
	);
	// }
};

export default SelectField;

/* {defaultValue ? (
				<select
					className="form-control form-select"
					required
					name={name}
					id={id}
					defaultValue={defaultValue}
					onChange={(e) => onChangeFunc(e, setStateValue, stateValue, index)}>
					{disabledOption && (
						<option value={disabledOptionValue} disabled>
							{disabledOptionTag}
						</option>
					)}
					{optionName &&
						optionsArray.map((item) => (
							<option
								key={item[optionName]}
								name={item[optionName]}
								value={item[optionName]}>
								{item[optionName]}
							</option>
						))}
					{!optionName &&
						optionsArray.map((item) => (
							<option key={item.id} name={item.name} value={item.name}>
								{item.name}
							</option>
						))}
				</select>
			) : (
				<select
					className="form-control form-select"
					required
					name={name}
					value={value}
					onChange={(e) => onChangeFunc(e, setStateValue, stateValue, index)}>
					{disabledOption && (
						<option value={disabledOptionValue} disabled>
							{disabledOptionTag}
						</option>
					)}
					{optionName &&
						optionsArray.map((item) => (
							<option
								key={item[optionName]}
								name={item[optionName]}
								value={item[optionName]}>
								{item[optionName]}
							</option>
						))}
					{optionsArray.map((item) => (
						<option key={item.id} name={item.name} value={item.name}>
							{item.name}
						</option>
					))}
				</select>
			)} */
