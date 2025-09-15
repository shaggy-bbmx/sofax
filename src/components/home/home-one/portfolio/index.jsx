import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumb1Img from "../../../../assets/images/v1/member1.png";
import Thumb2Img from "../../../../assets/images/v1/member2.png";
import Thumb3Img from "../../../../assets/images/v1/member3.png";
import PortfolioCard from "./PortfolioCard";
import vedioFile1 from '../../../../assets/videos/vedio-1.mp4'
import vedioFile2 from '../../../../assets/videos/vedio-2.mp4'
import vedioFile3 from '../../../../assets/videos/vedio-3.mp4'
import vedioFile4 from '../../../../assets/videos/vedio-4.mp4'
import vedioFile5 from '../../../../assets/videos/vedio-5.mp4'
import vedioFile6 from '../../../../assets/videos/vedio-6.mp4'
import vedioFile7 from '../../../../assets/videos/vedio-7.mp4'
import vedioFile8 from '../../../../assets/videos/vedio-8.mp4'
import vedioFile9 from '../../../../assets/videos/vedio-9.mp4'
import vedioFile10 from '../../../../assets/videos/vedio-10.mp4'


import FadeInUp from "../../../animation/FadeInUp"
import { Link } from "react-router-dom";
//

const testimonialOneData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
		url: vedioFile1
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
		url: vedioFile2
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"It’s an all-in-one solution to that the has turbocharged the growth. The lead generation & capbilities. our partner & result spesk.",
		author: "Smith Align",
		designation: "Web Developer",
		img: Thumb3Img,
		url: vedioFile3
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
		url: vedioFile4
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
		url: vedioFile5
	},
];

const testimonialTwoData = [
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"  It’s an all-in-one solution to that the has turbocharged the growth. The lead generation & capbilities. our partner & result spesk.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
		url: vedioFile6
	},
	{
		id: crypto.randomUUID(),
		rating: 5,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
		url: vedioFile7
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "Smith Align",
		designation: "Web Developer",
		img: Thumb3Img,
		url: vedioFile8
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
		url: vedioFile9
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
		url: vedioFile10
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
			slidesPerView: 3,
		},
	},
};
const swiperSettingsTwo = {
	speed: 6000,
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
			slidesPerView: 3,
		},
	},
};
function Portfolio() {
	return (
		<section className="sofax-section-padding2" id="testimonial">
			{/* <div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>See what our users have to say about it</h2>
					</div>
				</div>
			</div> */}
			<div className="sofax-testimonial-slider">
				<Swiper {...swiperSettingsOne}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<PortfolioCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="sofax-testimonial-slider-2">
				<Swiper {...swiperSettingsTwo}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<PortfolioCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
				<FadeInUp className="sofax-title-btn">
					<Link className="sofax-default-btn pill" data-text="View all services" to="/services">
						<span className="button-wraper">View all services</span>
					</Link>
				</FadeInUp>
			</div>
		</section>
	);
}

export default Portfolio;
