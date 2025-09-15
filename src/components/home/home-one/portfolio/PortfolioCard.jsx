import RatingFull from "../../../../assets/images/v1/rattingful.svg";
function PortfolioCard({ testimonial: { rating, title, description, author, designation, img, url } }) {
	return (
		<div className="sofax-portfolio-content">
			<video
				autoPlay
				loop
				muted
				playsInline
				data-wf-ignore="true"
				data-object-fit="cover"
				style={{ width: '100%', height: 'auto' }}
			>
				<source src={url} type="video/mp4" data-wf-ignore="true" />
			</video>
		</div>
	);
}

export default PortfolioCard;
