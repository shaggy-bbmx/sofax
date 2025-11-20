import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>
			<NavItem url="#portfolio">Portfolio</NavItem>
			<NavItem url="#testimonial">Testimonials</NavItem>
			<NavItem url="#footer">Contact</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
