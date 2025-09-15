import { Outlet } from "react-router-dom";
import Footer from "../../home/home-four/footer";
import Header from "../../home/home-four/header/multi-page";
function LayoutFour() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutFour;
