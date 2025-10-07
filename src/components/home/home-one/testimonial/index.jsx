import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumb1Img from "../../../../assets/images/v1/Bryan_1.png";
import Thumb2Img from "../../../../assets/images/v1/Bryan_2.png";
import Thumb3Img from "../../../../assets/images/v1/Bryan_3.png";
import Thumb4Img from "../../../../assets/images/v1/Bryan_4.png";
import Thumb5Img from "../../../../assets/images/v1/Bryan_5.png";
import Thumb6Img from "../../../../assets/images/v1/Bryan_6.png";
import Thumb7Img from "../../../../assets/images/v1/Bryan_1.png";
import Thumb8Img from "../../../../assets/images/v1/Bryan_1.png";
import Thumb9Img from "../../../../assets/images/v1/Bryan_1.png";
import Thumb10Img from "../../../../assets/images/v1/Bryan_1.png";
import TestimonialCard from "./TestimonialCard";
//

const testimonialOneData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"I am highly impressed by the professionalism and the quality of work. I've worked with many agencies, and this agency is my favorite. Hands down in terms of quality, speed, and budget. I highly recommend using them for your next B2B SaaS explainer video."
		,
		author: "Bryan Phillips",
		designation: "Marketing Strategist",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:

			" There were quite a few demos to build in this project and stripe did an excellent job. I'm very particular and created a very clean step by step walkthrough of what I wanted for each video. They nailed them and it took minimal revisions to get perfect.I also really appreciated the attention to detail they took in many areas that I didn't even call out in the original scope.Great job guys!"
		,
		author: "Jeff Soloman",
		designation: "Founder - Markup Hero",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Amazing work, totally understood what we were going for and kindly made small amends at then end - super helpful. Definitely will be working with Stripe Designs going forward for product animations!",
		author: "Charlotte Platts",
		designation: "Marketing Lead - Trumpet",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Splay Team was an absolute pleasure to work with on creating our SaaS intro video. Their responsiveness and professionalism were top-notch. They Were always quick to answer questions and provided excellent support throughout the entire process. The final video exceeded our expectations. I highly recommend Splay for any video production needs.",
		author: "Amit Ezar",
		designation: "Founder - Pebb",
		img: Thumb4Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"It was our first time working with splay, and definetly not the last time! Everything is 10/10 - super happy to have found such a talented creative here! You will be more than satisfied with his work :))",
		designation: "TA Lead - Enterprise Bot",
		author: "Shweta Singh",
		img: Thumb5Img,
	},
];

const testimonialTwoData = [
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"Splay Team completed a 2+ minute video for my company in only a few days. We had a very tight timeline, and he was able to execute a few rounds of feedback and deliver a great result in the allotted timeframe. This is the third project we have hired Splay for, and as always they were extremely professional and easy to work with.",
		author: "Allie Edgar",
		designation: "Creative Director - Nota",
		img: Thumb6Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"I am highly impressed by the professionalism and the quality of work. I've worked with many agencies, and this agency is my favorite. Hands down in terms of quality, speed, and budget. I highly recommend using them for your next B2B SaaS explainer video."
		,
		author: "Bryan Phillips",
		designation: "Marketing Strategist",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:

			" There were quite a few demos to build in this project and stripe did an excellent job. I'm very particular and created a very clean step by step walkthrough of what I wanted for each video. They nailed them and it took minimal revisions to get perfect.I also really appreciated the attention to detail they took in many areas that I didn't even call out in the original scope.Great job guys!"
		,
		author: "Jeff Soloman",
		designation: "Founder - Markup Hero",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Amazing work, totally understood what we were going for and kindly made small amends at then end - super helpful. Definitely will be working with Stripe Designs going forward for product animations!",
		author: "Charlotte Platts",
		designation: "Marketing Lead - Trumpet",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"Splay Team was an absolute pleasure to work with on creating our SaaS intro video. Their responsiveness and professionalism were top-notch. They Were always quick to answer questions and provided excellent support throughout the entire process. The final video exceeded our expectations. I highly recommend Splay for any video production needs.",
		author: "Amit Ezar",
		designation: "Founder - Pebb",
		img: Thumb4Img,
	},
];

const swiperSettingsOne = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 3.5,
		},
	},
};
const swiperSettingsTwo = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 3.5,
		},
	},
};
function Testimonial() {
	return (
		<section className="sofax-section-padding2" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>See what our users have to say about it</h2>
					</div>
				</div>
			</div>
			<div className="sofax-testimonial-slider">
				<Swiper {...swiperSettingsOne}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="sofax-testimonial-slider-2">
				<Swiper {...swiperSettingsTwo}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Testimonial;
