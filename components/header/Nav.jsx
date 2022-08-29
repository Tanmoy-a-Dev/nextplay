import { useRouter } from "next/router";
import React, { useState } from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { mainNavigationLinks } from "../../heplperFuncs/constants";
import { toggleState } from "../../heplperFuncs/stateUpdateFuncs";
import CustomLink from "../common/CustomLink";

function Nav() {
	const [showSection, setShowSection] = useState(false);
	const router = useRouter();
	return (
		<>
			<RiMenuUnfoldLine
				className="lg:hidden text-3xl cursor-pointer mr-5"
				onClick={() => toggleState(showSection, setShowSection)}
			/>
			<nav
				className={`fixed z-10 lg:static left-0 w-full h-screen overflow-x-hidden overflow-y-auto lg:h-full flex justify-center lg:justify-center items-center p-10 lg:p-0 lg:py-2 bg-color-green lg:bg-transparent text-color-dark transition-all duration-300 ${
					showSection ? "top-0" : "top-[-100vh]"
				}`}>
				<VscChromeClose
					className="text-3xl cursor-pointer absolute top-4 right-4 lg:hidden"
					onClick={() => toggleState(showSection, setShowSection)}
				/>

				{/* menu item box */}
				<ul className="flex w-full xl:w-full h-full flex-col lg:flex-row md:justify-center items-center uppercase space-y-4 lg:space-y-0 px-4 lg:py-2 md:px-0 tracking-wider ">
					{mainNavigationLinks.map(({ slug, text }, index) => (
						<li
							key={index}
							className="menu_list"
							onClick={() => toggleState(showSection, setShowSection)}>
							<CustomLink
								linkTo={slug}
								linkClass={`menu_link ${
									router.pathname.startsWith(slug)
										? "border-b-[1px] border-color-light"
										: ""
								}`}
								linkFront={text}
							/>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default Nav;
