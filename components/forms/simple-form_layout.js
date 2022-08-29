import SelectField from "../form-fields/select-field";
import StringField from "../form-fields/stringField";

const SimpleForm = ({
	submitFunc = function (e) {
		e.prevenDefault();
		return;
	},
	formClass = "",
	fieldsArray = [
		{
			fieldType: "string",
			containerClass: "",
			label: "Text Demo Field",
			inputId: "text_demo",
			InputType: "text",
			inputClass: "",
			inputValue: "",
			statesObj: {},
			setStatesObj: function () {
				return;
			},
		},
		{
			fieldType: "string",
			containerClass: "",
			label: "Number Demo Field",
			inputId: "number_demo",
			InputType: "number",
			inputClass: "",
			inputValue: "",
			statesObj: {},
			setStatesObj: function () {
				return;
			},
		},
		{
			fieldType: "select",
			containerClass: "",
			label: "Select Demo Field",
			inputId: "select_demo",
			inputClass: "",
			defaultValue: "select",
			disabledOptionValue: "select",
			disabledOptionTag: "Select from dropdown",
			optionsArray: [],
			statesObj: {},
			setStatesObj: function () {
				return;
			},
		},
	],
	submitBtnText = "Submit",
}) => {
	return (
		<form
			onSubmit={submitFunc}
			className="py-5 space-y-2 md:space-y-0 w-full bg-slate-800 flex flex-col md:flex-row justify-center md:justify-start xl:justify-center flex-wrap text-white items-center">
			{fieldsArray.map((field, index) => {
				if (field.fieldType === "string") {
					return (
						<StringField
							key={index}
							label={field.label}
							id={field.inputId}
							type={field.InputType}
							value={field.inputValue}
							statesObj={field.statesObj}
							setStatesObj={field.setStatesObj}
						/>
					);
				} else if (field.fieldType === "select") {
					return (
						<SelectField
							key={index}
							label={field.label}
							id={field.inputId}
							defaultValue={field.defaultValue}
							disabledOptionValue={field.disabledOptionValue}
							disabledOptionTag={field.disabledOptionTag}
							optionsArray={field.optionsArray}
							statesObj={field.statesObj}
							setStatesObj={field.setStatesObj}
						/>
					);
				}
			})}

			<div className="w-full flex justify-center">
				<button
					type="submit"
					className="bg-white text-slate-800 py-2 px-4 rounded-lg tracking-wider uppercase font-bold m-4">
					{submitBtnText}
				</button>
			</div>
		</form>
	);
};

export default SimpleForm;
