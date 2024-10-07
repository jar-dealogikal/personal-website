import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import BlogPost from "./BlogPost";
import Footer from "./Footer";
import Photos from "./Photos";

const LandingPage = () => {
	return (
		<div className="bg-white">
			<HeroSection />
			<AboutMe />
			<BlogPost />
			<Photos />
			<Footer />
		</div>
	);
};

export default LandingPage;
