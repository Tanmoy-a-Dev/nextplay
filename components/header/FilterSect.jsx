import React, { useRef, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { filterSection } from "../../heplperFuncs/constants";
import { toggleState } from "../../heplperFuncs/stateUpdateFuncs";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import CustomLink from "../common/CustomLink";
import CheckField from "../forms/form-fields/checkbox-field";
import RadioField from "../forms/form-fields/radio-field";

function FilterSect() {
	// states
	const [showSection, setShowSection] = useState(false);
	// filter states
	const [filterUrl, setFilterUrl] = useState("");
	const [sortBy, setSortBy] = useState("releaseYear");
	const [checkedState, setCheckedState] = useState({
		type: "all",
		quality: "all",
		release: "all",
		genre: "all",
		country: "all",
	});

	const handleOnChange = (e) => {
		const { name, value, checked } = e.target;
		const tempObj = checkedState;

		if (checked) {
			tempObj[name] === "all"
				? (tempObj[name] = value)
				: (tempObj[name] += `-${value}`);
		} else {
			tempObj[name].split("-").length > 1
				? (tempObj[name] = tempObj[name]
						.split("-")
						.filter((item) => item !== value)
						.join("-"))
				: (tempObj[name] = "all");
		}
		setCheckedState(tempObj);
		const { type, quality, release, genre, country } = tempObj;
		const url = `/filter/${genre}/${sortBy}/${type}/${country}/${release}/${quality}`;
		setFilterUrl(url);
	};
	// refs
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, setShowSection);
	return (
		<div ref={wrapperRef} className="flex items-center">
			<button onClick={() => toggleState(showSection, setShowSection)}>
				<BiFilterAlt className="text-3xl" />
			</button>
			<section
				className={`absolute right-0 xl:left-0 w-full h-[90vh] border-t-2 border-color-border p-4 max-w-6xl mx-auto bg-color-green   transition-all duration-300 ${
					showSection
						? "top-[8rem] md:top-[5rem] lg:top-[5rem]"
						: "top-[-400vh]"
				} overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-slate-900 `}>
				{filterSection.map(({ groupName, fieldType, fields }, index) => (
					<div key={index} className="mb-4">
						<h3
							key={index}
							className="uppercase text-lg my-2 font-bold tracking-widest border-b-[1px] border-dashed text-center md:text-left pb-3">
							{groupName}
						</h3>

						<div className="flex flex-wrap capitalize text-lg">
							{fieldType === "radio" &&
								fields.map(({ id, name, value, label, checked }, index) => (
									<RadioField
										key={index}
										classes="w-2/4 md:w-1/3 lg:w-1/5 xl:w-1/5 my-3"
										id={id}
										name={name}
										value={value}
										label={label}
										checked={checked}
										setState={setSortBy}
									/>
								))}

							{fieldType === "checkbox" &&
								fields.map(({ value }, i) => (
									<CheckField
										key={i}
										classes="w-2/4 md:w-1/3 lg:w-1/5 xl:w-1/5 my-3 space-x-1"
										id={`custom-checkbox-${value}`}
										name={groupName}
										value={value}
										onChangeFunc={(e) => handleOnChange(e)}
									/>
								))}
						</div>
					</div>
				))}

				<div className="w-full h-10 flex justify-center items-center">
					<CustomLink
						linkTo={`${filterUrl}`}
						linkTitle="go to filtered result"
						linkFront="Filter"
						linkClass="border-2 border-color-border text-lg tracking-widest font-bold py-1 px-5 rounded-md uppercase"
					/>
				</div>
			</section>
		</div>
	);
}

export default FilterSect;
