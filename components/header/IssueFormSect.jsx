import React, { useRef, useState } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import Form from "../forms/form";

import { BiPaperPlane } from "react-icons/bi";
import { toggleState } from "../../heplperFuncs/stateUpdateFuncs";

function IssueFormSect() {
	// states
	const [showSection, setShowSection] = useState(false);
	const [issueFormState, setIssueFormState] = useState({
		issue: "",
		issueDetails: "",
	});

	// refs
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, setShowSection);

	// api functions
	const handleIssueSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
	};

	const issueOptions = [
		"Player Report",
		"Video request",
		"report abuse",
		"dmca abuse",
		"adds inquiries",
		"other",
	];
	const issueFormFields = [
		{
			fieldType: "select",
			label: "Select Reason :",
			id: "issue",
			disabledOptionTag: "Select a Issue",
			optionsArray: issueOptions,
			state: issueFormState,
			setState: setIssueFormState,
		},
		{
			fieldType: "area",
			id: "issueDetails",
			cols: "18",
			rows: "5",
			placeholder: "Your message here",
			state: issueFormState,
			setState: setIssueFormState,
		},
	];
	return (
		<div ref={wrapperRef} className="flex items-center">
			<button
				onClick={() => toggleState(showSection, setShowSection)}
				className="">
				<BiPaperPlane className="text-color-dark font-light" />
			</button>
			<section
				id="issue-section"
				className={`absolute w-[18.75rem] h-96 bottom-[-24rem] bg-color-green right-0  transition-all duration-300 ${
					showSection ? "bottom-[-24rem]" : "bottom-[24rem]"
				}`}>
				<h3 className="text-2xl text-center border-b-[1px] border-color-border p-2">
					Any Issue?
				</h3>

				<Form
					formClass="p-4"
					fieldsArray={issueFormFields}
					submitFunc={handleIssueSubmit}
					submitBtnText="send feedback"
				/>
			</section>
		</div>
	);
}

export default IssueFormSect;
