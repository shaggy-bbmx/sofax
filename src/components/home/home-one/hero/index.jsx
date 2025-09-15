import Rattingful from "../../../../assets/images/v1/rattingful.svg";
import Rattinghalf from "../../../../assets/images/v1/rattinghalf.svg";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
function HeroSection() {
	return (
		<div className="sofax-hero-section overflow-hidden" id="hero">
			<div className="container">
				<HeroContent />
				<div className="sofax-subscription-field blog-details-subscribe-btn">
					<input type="email" placeholder="Enter your email " />
					<button id="sofax-subscription-btn" type="submit">
						Start a 14 days free trail
					</button>
				</div>
				<div className="sofax-rating-icon">
					<ul>
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
						<li>
							<img src={Rattingful} alt="Rating" />
						</li>
						<li>
							<img src={Rattinghalf} alt="Rating" />
						</li>
						<li>4.8/5 rating software trusted by users</li>
					</ul>
				</div>
				<HeroThumbs />
			</div>
		</div>
	);
}

export default HeroSection;
