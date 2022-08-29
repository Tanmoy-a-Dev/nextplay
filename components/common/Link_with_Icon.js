import Link from "next/link";
import React from "react";

function Link_with_Icon({
	linkTo = "",
	linkText = "",
	linkClass = "",
	iconComponent,
}) {
	return (
		<Link href={linkTo}>
			<a className={linkClass}>
				{iconComponent}
				<span>{linkText}</span>
			</a>
		</Link>
	);
}

export default Link_with_Icon;
