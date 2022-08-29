import Image from "next/image";
import React from "react";
import {
	BsLayoutSidebarInset,
	BsLayoutSidebarInsetReverse,
} from "react-icons/bs";
import CustomLink from "../../common/CustomLink";

function AdminHeader({ collapsedFunc, isCollapsed }) {
	// temp var
	const username = "Next";

	// modifier
	const modifiedUsername =
		username.length > 5 ? username.slice(0, 5).concat("...") : username;
	return (
		<header className="border-b-2 w-full bg-color-light text-color-dark h-16 flex items-center justify-between px-4 border-color-border">
			<div className="flex space-x-[30px] semiTab:space-x-[60px] ">
				<button className="transition-all duration-300">
					<BsLayoutSidebarInsetReverse
						className={`text-3xl  rounded-md text-color-green ${
							isCollapsed && "hidden"
						}`}
						onClick={collapsedFunc}
					/>
					<BsLayoutSidebarInset
						className={`text-3xl h-8 rounded-lg text-red-500 ${
							!isCollapsed && "hidden"
						}`}
						onClick={collapsedFunc}
					/>
				</button>
				<CustomLink
					linkTo="/"
					linkTitle="go to http://localhost:3000"
					linkFront="Visit Site"
					linkClass="border-b-2 border-t-2 border-color-green px-2 lg:px-4 py-[4px] rounded-lg  tracking-wider font-semibold uppercase"
				/>
			</div>

			{/* profile area */}
			<div className="flex items-center">
				<div className="relative w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-red-500">
					<Image src="/next-logo.png" alt="adminImg" layout="fill" />
				</div>
				<p className="ml-2">
					<span>Hello,</span>
					<span>{modifiedUsername}</span>
				</p>
			</div>
		</header>
	);
}

export default AdminHeader;
