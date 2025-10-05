import { Link } from "react-router-dom";
import Icon1 from "../../../../assets/images/v1/icon1.png";
import Icon2 from "../../../../assets/images/v1/icon2.png";
import Icon3 from "../../../../assets/images/v1/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Where Great Videos Begin: The Script",
		description:
			"Every unforgettable video starts with a killer script. At Splay, we blend creativity and strategy to craft scripts that speak to your audience and reflect your vision.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Visualizing Your Story: The Art of Storyboarding",
		description:
			"A great video starts with a clear vision, and that's where storyboarding comes in. At Splay, we transform ideas into detailed visual blueprints, setting the stage for a seamless production.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Action Time: Bringing Your Story to Life",
		description:
			"The video production stage is where ideas leap off the page and onto the screen. At Splay, we bring together creativity, precision, and cutting-edge technology to ensure your vision is flawlessly executed.",
	},
];
function Services() {
	return (
		<div className="section sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title max-width-770 ">
					<div className="row">
						<div className="col-xl-8 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Solution to organize your sales in one place</h2>
							</div>
						</div>
						{/* <div className="col-xl-4 col-lg-4 d-flex justify-content-end align-items-center">
							<FadeInUp className="sofax-title-btn">
								<Link className="sofax-default-btn pill" data-text="View all services" to="/services">
									<span className="button-wraper">View all services</span>
								</Link>
							</FadeInUp>
						</div> */}
					</div>
				</div>

				<div className="row">
					{servicesData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
