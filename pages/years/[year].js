import React from "react";
import CustomContainer from "../../components/containers/generalContainers/CustomContainer";
import { desiredYearsArray } from "../../heplperFuncs/generalFuncs";
import { testMovie } from "../../heplperFuncs/tempConstants";
function Year({ queryParam }) {
	const { year } = queryParam;
	const yearsTill2000 = desiredYearsArray(new Date().getFullYear() - 2000);
	return (
		<>
			<CustomContainer
				mainPage="years"
				linksContainerData={yearsTill2000}
				dataContainerData={testMovie}
				queryParam={year}
			/>
		</>
	);
}

export async function getServerSideProps(context) {
	const queryParam = context.query;
	return {
		props: { queryParam }, // will be passed to the page component as props
	};
}

export default Year;
