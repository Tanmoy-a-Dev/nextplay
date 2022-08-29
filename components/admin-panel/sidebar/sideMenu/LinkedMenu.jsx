import React from "react";
import CustomLink from "../../../common/CustomLink";

function LinkedMenu({ icon, menuName, link }) {
	return (
		<CustomLink
			linkFront={
				<div className="flex items-center">
					<button className="text-xl lg:text-base inline-block mr-3">
						{icon}
					</button>
					<span className="opacity-90 text-xl lg:text-base">{menuName}</span>
				</div>
			}
			linkTo={link}
		/>
	);
}

export default LinkedMenu;
