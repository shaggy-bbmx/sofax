import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumb1Img from "../../../../assets/images/v1/member1.png";
import Thumb2Img from "../../../../assets/images/v1/member2.png";
import Thumb3Img from "../../../../assets/images/v1/member3.png";
import thumbnail1 from '../../../../assets/images/vedio-1-thumbnail.jpg'
import PortfolioCard from "./PortfolioCard";
import VideoModal from "./VideoModal";
import { useState } from "react";



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
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/vedio-1_g5p2xm.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=BK0nmqHZmn8&t=9s'
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951798/vedio-2_wpm85p.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=T5EmKgfb3cg'
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"It’s an all-in-one solution to that the has turbocharged the growth. The lead generation & capbilities. our partner & result spesk.",
		author: "Smith Align",
		designation: "Web Developer",
		img: Thumb3Img,
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951798/vedio-3_irvbck.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=cDuiCJVBfhA'
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951806/vedio-4_magt7a.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=sEGu1TWfG9I'
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951797/vedio-5_nodfmm.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=aDwjwkmz-d4'
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
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951807/vedio-6_gpoqft.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=Z63RtdKd9pY'
	},
	{
		id: crypto.randomUUID(),
		rating: 5,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951803/vedio-8_wuia27.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=5c_fzAq5xzQ'
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "Smith Align",
		designation: "Web Developer",
		img: Thumb3Img,
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951813/vedio-9_vmd6yt.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=IdTznPAghok'
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: "William Jack",
		designation: "Co-Founder",
		img: Thumb1Img,
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951807/vedio-10_xj0pla.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=bRom40wffN0'
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb2Img,
		url: 'https://res.cloudinary.com/dgklcxqcy/video/upload/v1757951798/vedio-3_irvbck.mp4',
		thumbnail: thumbnail1,
		youtubeUrl: 'https://www.youtube.com/watch?v=dRuIVxg5_O0'
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

	const [selectedVideo, setSelectedVideo] = useState(null);

	const openVideo = (url) => {
		setSelectedVideo(url);
	};


	return (
		<section className="sofax-section-padding2 bg-black" id="testimonial">
			<div className="sofax-testimonial-slider">
				<Swiper {...swiperSettingsOne}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<PortfolioCard
								onClick={() => openVideo(testimonial.youtubeUrl)} testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="sofax-testimonial-slider-2">
				<Swiper {...swiperSettingsTwo}>
					{testimonialTwoData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<PortfolioCard
								onClick={() => openVideo(testimonial.youtubeUrl)}
								testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{selectedVideo && (
				<VideoModal youtubeUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />
			)}

			<div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
				<FadeInUp className="sofax-title-btn">
					<a href="https://www.youtube.com/@splay-video-production" className="sofax-default-btn pill" data-text="View portfolio">
						<span className="button-wraper">View portfolio</span>
					</a>
				</FadeInUp>
			</div>
		</section>
	);
}

export default Portfolio;
