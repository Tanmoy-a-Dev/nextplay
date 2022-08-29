import { useRouter } from "next/router";
import React from "react";
function Filtered() {
	const router = useRouter();
	const { genres, sort, type, countries, years, qualities } = router.query;
	return (
		<div>
			<p className="text-white">hello</p>
			{console.log({ genres, sort, type, countries, years, qualities })}
		</div>
	);
}

export default Filtered;
