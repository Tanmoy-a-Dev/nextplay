import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import LinkedMenu from "./LinkedMenu";

function SideMenu({ item, isDropped, dropFunc }) {
	const { nested, icon, name, link, nestedMenu } = item;
	return (
		<>
			{nested ? (
				<>
					<div
						className="flex items-center cursor-pointer"
						onClick={() => dropFunc(name)}>
						<button className="text-lg lg:text-base inline-block mr-3">
							{icon}
						</button>
						<span className="opacity-90 text-xl lg:text-base">{name}</span>
						<AiOutlineDown
							className={`ml-2 ${
								isDropped[name] ? "-rotate-180" : "rotate-0"
							} transition-all duration-300`}
						/>
					</div>
					<div
						className={`${
							isDropped[name] ? "block opacity-100" : "hidden opacity-0"
						} mt-4 transition-opacity duration-300`}>
						{nestedMenu.map(
							({ nested, icon, name, link }, index) =>
								!nested && (
									<div className="ml-2  mb-2" key={index}>
										<LinkedMenu icon={icon} menuName={name} link={link} />
									</div>
								)
						)}
					</div>
				</>
			) : (
				<LinkedMenu icon={icon} menuName={name} link={link} />
			)}
		</>
	);
}

export default SideMenu;
