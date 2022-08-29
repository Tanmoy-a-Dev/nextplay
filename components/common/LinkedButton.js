import Link from "next/link";
import React from "react";

function LinkedButton({ linkTo = "", linkText = "" }) {
	return (
		<Link href={linkTo}>
			<a className="px-4 py-2 border-[1px] border-yellow-400 rounded-xl capitalize hover:text-sm hover:text-yellow-400">
				{linkText}
			</a>
		</Link>
	);
}

export default LinkedButton;
