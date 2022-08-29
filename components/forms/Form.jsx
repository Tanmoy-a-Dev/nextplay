import React from "react";
import SelectField from "./form-fields/select-field";
import StringField from "./form-fields/stringField";

import TextArea from "./form-fields/TextArea";
import SubmitBtn from "./form-utils/SubmitBtn";

function Form({
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
	submitFunc = () => null,
	submitBtnText = "Submit",
}) {
	return (
		<form className={formClass} onSubmit={submitFunc}>
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
							id={field.id}
							defaultValue={field.defaultValue}
							disabledOptionValue={field.disabledOptionValue}
							disabledOptionTag={field.disabledOptionTag}
							optionsArray={field.optionsArray}
							state={field.state}
							setState={field.setState}
						/>
					);
				} else if (field.fieldType === "area") {
					return (
						<TextArea
							key={index}
							label={field.label}
							id={field.id}
							cols={field.cols}
							rows={field.rows}
							placeholder={field.placeholder}
							state={field.state}
							setState={field.setState}
						/>
					);
				}
			})}
			<div className="w-full flex justify-center">
				<SubmitBtn btnText={submitBtnText} />
			</div>
		</form>
	);
}

export default Form;
