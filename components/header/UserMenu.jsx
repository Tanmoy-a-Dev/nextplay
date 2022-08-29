import React from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Link_with_Icon from "../common/Link_with_Icon";

function UserMenu() {
	return (
		<div className="absolute top-8 xl:top-12 w-64 right-0 xl:right-[-14rem] z-30 border-2 rounded-md transition-all duration-300 font-bolder bg-color-green">
			<ul className="w-full h-full flex flex-col space-y-2 py-3">
				<li>
					<Link_with_Icon
						linkTo="#"
						linkText="Profile"
						linkClass="user_menu_link"
						iconComponent={<RiMenuUnfoldLine />}
					/>
				</li>
				{/* premium membership, favourite, faq, exit */}
				<li>
					<Link_with_Icon
						linkTo="#"
						linkText="premium membership"
						linkClass="user_menu_link"
						iconComponent={<RiMenuUnfoldLine />}
					/>
				</li>

				<li>
					<Link_with_Icon
						linkTo="#"
						linkText="favourites"
						linkClass="user_menu_link"
						iconComponent={<RiMenuUnfoldLine />}
					/>
				</li>

				<li>
					<Link_with_Icon
						linkTo="#"
						linkText="faq"
						linkClass="user_menu_link"
						iconComponent={<RiMenuUnfoldLine />}
					/>
				</li>

				<li>
					<Link_with_Icon
						linkTo="#"
						linkText="exit"
						linkClass="user_menu_link"
						iconComponent={<RiMenuUnfoldLine />}
					/>
				</li>
			</ul>
		</div>
	);
}

export default UserMenu;
