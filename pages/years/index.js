import React from "react";
import CustomContainer from "../../components/containers/generalContainers/CustomContainer";
import { desiredYearsArray } from "../../heplperFuncs/generalFuncs";
import { testMovie } from "../../heplperFuncs/tempConstants";

function ReleaseYears() {
	const yearsTill2000 = desiredYearsArray(new Date().getFullYear() - 2000);
	return (
		<>
			<CustomContainer
				mainPage="years"
				linksContainerData={yearsTill2000}
				dataContainerData={testMovie}
			/>
		</>
	);
}

export default ReleaseYears;
