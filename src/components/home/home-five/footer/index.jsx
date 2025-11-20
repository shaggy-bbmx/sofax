import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Logo from "../../../../assets/images/logo/splay_icon.svg";
import Field from "../../../common/Field";
import FooterCopyright from "./FooterCopyright";
import FooterCta from "./FooterCta";
function Footer() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Form Submited!");
		reset();
		console.log("Submite Form Data = ", formData);
	};
	return (
		<footer className="sofax-footer-section">
			<ToastContainer position="bottom-right" />
			<div className="container">
				<FooterCta />

				<div className="sofax-footer-top">
					<div className="row">
						<div className="col-xl-4 col-md-12">
							<div className="sofax-footer-wrap mr-25">
								<Link to="/muti-page/home-five">
									<img src={Logo} alt="logo" className="max-w-50" />
								</Link>
								<p>
									Splay is scaling up — collaborating with great SaaS clients.
								</p>
								<div className="sofax-social-icon">
									<ul>
										<li>
											<a target="_blank" href="https://www.youtube.com/@splay-video-production">
												<svg fill="#f91a1a" width="150px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube</title> <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path> </g></svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-4" id="footer">
							<div className="sofax-footer-menu ml-50">
								<h5>Company</h5>
								<ul>
									<li>
										<a href="https://www.youtube.com/@splay-video-production">Portfolio</a>
									</li>
									<li>
										<a href="#testimonial">Testimonials</a>
									</li>
									<li>
										<a>Contact at</a>
									</li>
									{/* <li>
										<a href="terms&condition.html">Terms & Conditions</a>
									</li> */}
								</ul>
								<div>+91 8866 332 054</div>
								<div>create@splay.studio</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							{/* <div className="sofax-footer-menu">
								<h5>Utility pages</h5>
								<ul>
									<li>
										<a href="contact-us.html">Instructions</a>
									</li>
									<li>
										<a href="contact-us.html">Style guide</a>
									</li>
									<li>
										<a href="404.html">404 Pages</a>
									</li>
									<li>
										<a href="contact-us.html">Licenses</a>
									</li>
								</ul>
							</div> */}
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu">
								<h5>Let&apos;s make your SaaS story </h5>
								<div className="sofax-subscription-field5">
									<form onSubmit={handleSubmit(submitForm)}>
										<Field error={errors.email}>
											<input
												{...register("email", { required: "Email is required." })}
												type="email"
												name="email"
												id="email"
												className="field-item"
												placeholder="Enter Your Email"
											/>
										</Field>
										<button type="submit" className="sofax-subcribe-btn2">
											Get estimate in 1 min
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<FooterCopyright />
			</div>
		</footer>
	);
}

export default Footer;
