import { Link, useLocation } from "react-router-dom";
// import LogoDark from "../../../assets/images/logo/logo-dark.svg";
// import LogoLight from "../../../assets/images/logo/logo-white.svg";
import LogoDark from "../../../assets/images/logo/splay_icon.svg";

function HeaderLogo() {
	let location = useLocation();

	return (
		<div className="brand-logo">
			<Link to="/">
				<img src={location.pathname !== "/" ? LogoDark : LogoDark} alt="Logo" />
			</Link>
		</div>
	);
}

export default HeaderLogo;
