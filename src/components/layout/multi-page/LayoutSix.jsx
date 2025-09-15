import { Outlet } from "react-router-dom";
import Footer from "../../home/home-six/footer";
import Header from "../../home/home-six/header/multi-page";
function LayoutSix() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutSix;
