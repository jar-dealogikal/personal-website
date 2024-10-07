import img1 from "../image/img7.jpg";
import img3 from "../image/img6.jpg";
import img4 from "../image/img5.jpg";

// const posts = [
// 	{
// 		id: 0,
// 		image: img1,
// 	},
// 	{
// 		id: 2,
// 		image: img3,
// 	},
// ];

const blogs = [
	{
		id: 1,
		image: img1,
	},
	{
		id: 2,
		image: img3,
  },
  {
		id: 3,
		image: img4,
	},
];
export default function BlogPost() {
	return (
		<div id="blog" className="py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Check out my latest blog
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Learn how to grow your business with our expert advice.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{blogs.map((blog) => (
						<div
							key={blog.id}
							className="flex flex-col items-start justify-between"
						>
							<div className="relative w-full">
								<img
									alt=""
									src={blog.image}
									className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[2/3] shadow-lg shadow-rose-300"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
