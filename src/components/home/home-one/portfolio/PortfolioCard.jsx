import RatingFull from "../../../../assets/images/v1/rattingful.svg";
function PortfolioCard({
	testimonial: { rating, title, description, author, designation, img, url, thumbnail, youtubeUrl },
	onClick
}) {
	return (
		<div className="sofax-portfolio-content" onClick={onClick} style={{ cursor: 'pointer' }}>
			<video
				poster={thumbnail}
				autoPlay
				loop
				muted
				playsInline
				style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
			>
				<source src={url} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default PortfolioCard;
