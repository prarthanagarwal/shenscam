export default function AboutPage() {
	return (
		<div className="bg-[#fbf4eb] min-h-screen">
			{/* Right image */}
			<div className="absolute top-0 right-0 bottom-0 w-1/2 hidden md:block">
				<img src="/aboutme_cam.png" alt="About Me" className="w-90 h-90 object-cover" />
			</div>

			{/* Content */}
			<div className="relative max-w-6xl mx-auto p-6">
				<div className="md:w-1/2 p-4">
					<h1 className="font-['Montserrat'] text-4xl font-bold mb-8 text-[#3D2314] text-left">About Me</h1>

					<div className="space-y-6">
						<p className="font-['Montserrat'] text-gray-800">
							Welcome to my portfolio! I'm a creative professional passionate about crafting engaging visual experiences.
						</p>
						<p className="font-['Montserrat'] text-gray-800">
							My work spans photography, videography, and design with a focus on authentic storytelling and visual impact.
						</p>
						<p className="font-['Montserrat'] text-gray-800">
							Feel free to explore my portfolio through the "Work" section to see my various projects and creative endeavors.
						</p>

						<div className="pt-4">
							<h2 className="text-xl font-semibold">Skills</h2>
							<ul className="grid grid-cols-2 gap-2 mt-3">
								<li className="font-['Montserrat'] text-gray-700 flex items-center"><span className="w-2 h-2 bg-[#d1385b] rounded-full mr-2"></span>Photography</li>
								<li className="font-['Montserrat'] text-gray-700 flex items-center"><span className="w-2 h-2 bg-[#d1385b] rounded-full mr-2"></span>Videography</li>
								<li className="font-['Montserrat'] text-gray-700 flex items-center"><span className="w-2 h-2 bg-[#d1385b] rounded-full mr-2"></span>Direction</li>
								<li className="font-['Montserrat'] text-gray-700 flex items-center"><span className="w-2 h-2 bg-[#d1385b] rounded-full mr-2"></span>Editing</li>
								<li className="font-['Montserrat'] text-gray-700 flex items-center"><span className="w-2 h-2 bg-[#d1385b] rounded-full mr-2"></span>Visual Design</li>
								<li className="font-['Montserrat'] text-gray-700 flex items-center"><span className="w-2 h-2 bg-[#d1385b] rounded-full mr-2"></span>Storytelling</li>
							</ul>
						</div>
					</div>

					{/* Mobile image */}
					<div className="md:hidden w-full mt-8 rounded-xl overflow-hidden min-h-[300px]">
						<img src="/aboutme_cam.png" alt="About Me" className="w-full h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
}
