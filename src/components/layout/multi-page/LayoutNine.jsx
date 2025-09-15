import { Outlet } from "react-router-dom";
import Footer from "../../home/home-nine/footer";
import Header from "../../home/home-nine/header/multi-page";
function LayoutNine() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutNine;
