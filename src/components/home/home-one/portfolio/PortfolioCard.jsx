import RatingFull from "../../../../assets/images/v1/rattingful.svg";
function PortfolioCard({ testimonial: { rating, title, description, author, designation, img, url, thumbnail } }) {
	return (
		<div className="sofax-portfolio-content">
			<video
				poster={thumbnail}
				autoPlay
				loop
				muted
				playsInline
				style={{ width: '100%', height: 'auto' }}
			>
				<source src={url} type="video/mp4" data-wf-ignore="true" />
			</video>
		</div>
	);
}

export default PortfolioCard;
