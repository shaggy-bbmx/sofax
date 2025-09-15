import { Link, useLocation } from "react-router-dom";
import LogoDark from "../../../assets/images/logo/logo-dark.svg";
import LogoLight from "../../../assets/images/logo/logo-white.svg";
function HeaderLogo() {
	let location = useLocation();

	return (
		<div className="brand-logo">
			<Link to="/">
				<img src={location.pathname !== "/" ? LogoLight : LogoDark} alt="Logo" />
			</Link>
		</div>
	);
}

export default HeaderLogo;
