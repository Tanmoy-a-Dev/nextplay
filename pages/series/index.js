import React from "react";
import CustomContainer from "../../components/containers/generalContainers/CustomContainer";
import { testMovie } from "../../heplperFuncs/tempConstants";

/*
a. there will be 2 components to build this page
 - first component will be a #linksContainer component which will have all links for filtering
 - second component will be a #dataContainer component which will have all the data according to the query param

 b. 2nd part will contain pagination part

 ## all data will be updated through getServerSideProps(context) function

 $$ Will use demo data untill the backend is ready
*/

function Series() {
	return (
		<>
			<CustomContainer mainPage="series" dataContainerData={testMovie} />
		</>
	);
}

export default Series;
