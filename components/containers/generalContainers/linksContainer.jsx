import React from "react";
import CustomLink from "../../common/CustomLink";

function LinksContainer({ data = [], mainLink, queryParam = "" }) {
	return (
		<>
			<div className="flex space-x-2 space-y-2 flex-wrap tracking-wider my-4">
				<CustomLink
					linkTitle={`link to ${mainLink}`}
					linkTo={`/${mainLink}`}
					linkFront="all"
					linkClass={`linksContainer_link ${
						queryParam == ""
							? "bg-color-green text-color-dark font-semibold"
							: ""
					}`}
				/>
				{data.map((item, index) => (
					<CustomLink
						key={index}
						linkTitle={`link to ${item} ${mainLink}`}
						linkTo={`/${mainLink}/${item}`}
						linkFront={item}
						linkClass={`linksContainer_link ${
							queryParam == item
								? "bg-color-orange text-color-dark font-semibold"
								: ""
						}`}
					/>
				))}
			</div>
		</>
	);
}

export default LinksContainer;
