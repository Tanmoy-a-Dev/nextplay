import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { toggleState } from "../../heplperFuncs/stateUpdateFuncs";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import UserMenu from "./UserMenu";

function User() {
	const [showSection, setShowSection] = useState(false);
	const login = true;
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, setShowSection);

	return (
		<div ref={wrapperRef} className="flex px-4 xl:px-0 xl:py-3 text-color-dark">
			{!login ? (
				<AiOutlineLogin className="text-3xl cursor-pointer" />
			) : (
				<div
					className="relative w-8 h-8 cursor-pointer "
					onClick={() => toggleState(showSection, setShowSection)}>
					<Image
						src="/use.png"
						alt="Logged in user image"
						className="w-7 h-4 rounded-full"
						layout="fill"
						objectFit="cover"
						objectPosition="center center"
					/>
					{showSection && <UserMenu />}
				</div>
			)}
		</div>
	);
}

export default User;
