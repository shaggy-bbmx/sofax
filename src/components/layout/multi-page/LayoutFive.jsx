import { Outlet } from "react-router-dom";
import Footer from "../../home/home-five/footer";
import Header from "../../home/home-five/header/multi-page";
function LayoutFive() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutFive;
