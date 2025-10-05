import RatingFull from "../../../../assets/images/v1/rattingful.svg";
function PortfolioCard({ testimonial: { rating, title, description, author, designation, img, url, thumbnail,youtubeUrl } }) {
	return (
		<div className="sofax-portfolio-content">
			<a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
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
			</a>
		</div>
	);
}

export default PortfolioCard;
