import React, { useEffect, useState } from "react";
import CustomContainer from "../../components/containers/generalContainers/CustomContainer";
import { filterSection } from "../../heplperFuncs/constants";
import { testMovie } from "../../heplperFuncs/tempConstants";

/*
a. there will be 2 components to build this page
 - first component will be a #linksContainer component which will have all links for filtering
 - second component will be a #dataContainer component which will have all the data according to the query param

 b. 2nd part will contain pagination part

 ## all data will be updated through getServerSideProps(context) function

 $$ Will use demo data untill the backend is ready
*/

function Genres() {
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
			/>
		</>
	);
}

export default Genres;
