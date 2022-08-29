import Image from "next/image";
import React, { useState } from "react";
import { ImHappy2 } from "react-icons/im";
// from locals
import { socialLinks, upperFooterPages } from "../../heplperFuncs/constants";
import { desiredYearsArray } from "../../heplperFuncs/generalFuncs";
import CustomLink from "../common/CustomLink";

function Footer() {
	const years = desiredYearsArray(8);

	// states
	const [email, setEmail] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};
	return (
		<footer className="font-mont text-color-dark bg-color-green border-t-2 p-4 w-full ">
			{/* section for website small info */}
			<section className="md:flex items-center justify-around ">
				{/* logo & social area */}
				<div className="basis-1/2">
					<div className="relative w-[180px] h-[5.5rem] mx-auto mb-4">
						<CustomLink
							linkTo="/"
							linkFront={
								<Image
									src="/logo.png"
									alt="Logo of Next Movie website"
									layout="fill"
									objectFit="contain"
									objectPosition="center center"
								/>
							}
						/>
					</div>

					<div className="flex justify-center space-x-4">
						{socialLinks.map(({ slug, icon }, index) => (
							<CustomLink
								key={index}
								linkTo={slug}
								linkClass="text-xl text-color-dark hover:text-base"
								linkFront={icon}
							/>
						))}
					</div>
				</div>

				{/* mailing area */}
				<div className="my-4 md:my-0 basis-1/2 self-end">
					<h4 className="text-sm md:text-lg text-center tracking-widest border-b-[1px] border-dashed border-color-border pb-2 md:mr-4">
						<span className="font-semibold uppercase">Subscribe!&nbsp;</span>
						to our mailing list
					</h4>
					{/* form */}
					<form
						onSubmit={handleSubmit}
						className="flex w-full semiTab:w-2/3 mx-auto my-4 md:mb-0 ">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="johnDoe@email.com"
							className="w-3/4 xl:w-full h-9 text-lg bg-color-green border-2 border-color-border rounded-2xl rounded-r-none border-r-0 placeholder:text-color-dark placeholder:opacity-50 focus:outline-none pl-2"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button
							type="submit"
							className="w-1/4 xl:w-12 border-2 border-color-dark rounded-tr-2xl rounded-br-2xl border-l-0 flex justify-center items-center text-2xl text-color-icon">
							<ImHappy2 />
						</button>
					</form>
				</div>
			</section>

			{/* section for website small info */}
			<section className="md:mt-6">
				{/* text area */}
				{/* <div className="my-4 md:ml-[14%] md:mr-[2%] md:text-justify">
					<p className="text-base">
						<span className="text-color-dark font-semibold text-lg">
							NextPlay
						</span>
						- Movies &amp; Series Streaming Script is a complete &amp;
						outstanding movie streaming solution build on a powerful Next.Js and
						Express.Js framework.
					</p>
				</div> */}
				{/* pages area */}
				<div className="text-[12px] uppercase flex flex-col semiTab:flex-row semiTab:flex-wrap justify-center md:justify-between items-center max-w-[768px] mx-auto mt-8 ">
					{upperFooterPages.map(({ slug, name }, index) => (
						<CustomLink
							key={index}
							linkTo={slug}
							linkClass="border-b-2 border-color-border semiTab:mr-2 w-2/3 semiTab:w-[40%] md:w-[30%]  pb-[2px] my-[4px]"
							linkFront={name}
						/>
					))}
				</div>
				{/* copyright area */}
				<div className="text-center mt-4">
					<small className="w-full">
						<span className="text-color-dark font-semibold">
							&copy; {new Date().getFullYear()}- NextStream
						</span>{" "}
						- All rights reserved.
					</small>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
