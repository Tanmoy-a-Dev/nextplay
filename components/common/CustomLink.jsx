import Link from "next/link";
import React from "react";

function CustomLink({
	linkTo = "/",
	linkTitle = "",
	linkClass = "",
	linkFront,
}) {
	return (
		<Link href={linkTo}>
			<a title={linkTitle} className={linkClass}>
				{linkFront}
			</a>
		</Link>
	);
}

export default CustomLink;
