import React, { useEffect, useState } from "react";
import CustomContainer from "../../components/containers/generalContainers/CustomContainer";

// temp imports
import { filterSection } from "../../heplperFuncs/constants";
import { testMovie } from "../../heplperFuncs/tempConstants";

function Genre({ queryParam }) {
	const { genre } = queryParam;
	const [data, setData] = useState([]);

	// temp useEffect
	useEffect(() => {
		setData(filterSection[4].fields.map((item) => item.value));
	}, []);

	return (
		<>
			<CustomContainer
				mainPage="genres"
				linksContainerData={data}
				dataContainerData={testMovie}
				queryParam={genre}
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

export default Genre;
