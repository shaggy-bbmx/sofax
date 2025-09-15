import { useLocation } from "react-router-dom";
import DesktopMenu from "../../common/navigation/desktop-nav";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
function Header() {
	let location = useLocation();

	return (
		<header
			className={`site-header sofax-header-section site-header--menu-center  ${
				location.pathname !== "/" ? "dark-bg inner-header" : "bg-white"
			} `}
			id="sticky-menu"
		>
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopMenu />
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Aximo" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
