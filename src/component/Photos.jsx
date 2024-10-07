import React from "react";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";
import img4 from "../image/img4.jpg";
import img5 from "../image/img5.jpg";
import img6 from "../image/img6.jpg";
import img7 from "../image/img7.jpg";

const team = [
	{
		imageUrl: img1,
	},
	{
		imageUrl: img3,
	},
	{
		imageUrl: img2,
	},
	{
		imageUrl: img6,
	},
	{
		imageUrl: img5,
	},
	{
		imageUrl: img7,
	},
	{
		imageUrl: img4,
	},
	// More people...
];

const Photos = () => {
	return (
		<>
			{" "}
			<div  id="photos" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40  lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
						Photos
					</h2>
				</div>
				<ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
					{team.map((person) => (
						<li key={person.name}>
							<img
								alt=""
								src={person.imageUrl}
								className="aspect-[10/12] w-full rounded-2xl object-cover"
							/>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Photos;
