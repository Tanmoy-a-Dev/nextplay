import React, { useEffect, useState } from "react";
import CustomContainer from "../../components/containers/generalContainers/CustomContainer";

// temp imports
import { filterSection } from "../../heplperFuncs/constants";
import { testMovie } from "../../heplperFuncs/tempConstants";

function Country({ queryParam }) {
	const { country } = queryParam;
	const [data, setData] = useState([]);

	// temp useEffect
	useEffect(() => {
		setData(filterSection[5].fields.map((item) => item.value));
	}, []);

	return (
		<>
			<CustomContainer
				mainPage="countries"
				linksContainerData={data}
				dataContainerData={testMovie}
				queryParam={country}
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

export default Country;
