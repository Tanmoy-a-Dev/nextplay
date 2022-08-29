import React from "react";

function Movie({ queryParam }) {
	const { movie } = queryParam;
	return (
		<div className="text-white">
			<p>{movie}</p>
		</div>
	);
}

export async function getServerSideProps(context) {
	const queryParam = context.query;
	return {
		props: { queryParam }, // will be passed to the page component as props
	};
}

export default Movie;
