import { Link } from "react-router-dom";
import Shape4 from "../../../../assets/images/v1/shape4.png";
import FadeInUp from "../../../animation/FadeInUp";
function Cta() {
	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="sofax-cta-content">
					<div className="tg-heading-subheading animation-style3">
						<h2>Driving business growth with a new experience</h2>
					</div>
					<p>
						Start tracking your sales pipeline, manage leads, and automate your entire sales process in one
						place so you can easily focus on selling.
					</p>
					<FadeInUp className="extra-mt">
						<Link className="sofax-default-btn pill" data-text="Create a free account" to="/sign-up">
							<span className="button-wraper">Create a free account</span>
						</Link>
						<span className="cta-bottom">Full access. No credit card needed.</span>
					</FadeInUp>
					<div className="sofax-cta-shape">
						<img src={Shape4} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;
