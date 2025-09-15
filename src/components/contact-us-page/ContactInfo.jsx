import Icon1 from "../../assets/images/contact/icon1.png";
import Icon2 from "../../assets/images/contact/icon2.png";
import Icon3 from "../../assets/images/contact/icon3.png";
function ContactInfo() {
	return (
		<div className="contactus-authore-wrapper">
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon1} alt="Icon chat" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Chat with us</h4>
					<p>We're waiting to help you every Monday-Friday from 9 am to 5 pm EST easily.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon2} alt="Call icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Give us a call</h4>
					<p>QGive us a ring at (+088-234-567-90). Every monday-friday from 9 am to 5 pm.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<img src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Email Us</h4>
					<p>Drop us an email at example@gmail.com and you'll receive a reply within 24 hours.</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
