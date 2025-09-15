import { Outlet } from "react-router-dom";
import Footer from "../../home/home-eight/footer";
import Header from "../../home/home-eight/header/multi-page";
function LayoutEight() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutEight;
