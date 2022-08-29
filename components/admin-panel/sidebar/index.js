import Image from "next/image";
import React, { useMemo, useState } from "react";

import { GoEyeClosed } from "react-icons/go";
import { sideNav } from "../../../heplperFuncs/tempConstants";
import SideMenu from "./sideMenu/SideMenu";

function Sidebar({ isCollapsed, collapsedFunc }) {
	const nestedMenu = useMemo(() => {
		let c = {};
		sideNav
			.filter((item) => item.nested)
			.map((item) => {
				c[item.name] = false;
			});
		return c;
	}, []);
	const [isDropped, setIsDropped] = useState(nestedMenu);

	const handleDrop = (name) => {
		setIsDropped((state) => ({ ...state, [name]: !state[name] }));
	};
	return (
		<aside
			className={`bg-color-green text-color-dark h-[100%] fixed top-0 lg:static transition-all duration-300 block w-full lg:w-56  ${
				isCollapsed ? "-left-full lg:w-0 " : "left-0"
			} z-[1000] lg:z-0 overflow-x-hidden`}>
			<div>
				{/* logo area */}
				<div className="h-32 border-b-2 border-color-light flex items-center justify-between lg:justify-center">
					<div className="relative h-[6rem] w-36 ml-6 lg:ml-0">
						<Image src="/logo.png" alt="Website Logo" layout="fill" />
					</div>
					<button
						className="text-3xl text-color-dark mr-2 lg:hidden"
						onClick={collapsedFunc}>
						<GoEyeClosed />
					</button>
				</div>

				{/* menu area */}

				<div
					className={`flex flex-col h-[calc(100vh-10rem)] overflow-y-auto w-full py-8 px-8 lg:px-4 space-y-4 lg:items-start`}>
					{sideNav.map((item, index) => {
						return (
							<div
								key={index}
								className="text-base font-semibold capitalize tracking-wider">
								<SideMenu
									item={item}
									dropFunc={handleDrop}
									isDropped={isDropped}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
