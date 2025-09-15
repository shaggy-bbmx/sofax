import { Outlet } from "react-router-dom";
import Footer from "../../home/home-seven/footer";
import Header from "../../home/home-seven/header/multi-page";
function LayoutSeven() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutSeven;
