import { Outlet } from "react-router-dom";
import Footer from "../../home/home-two/footer";
import Header from "../../home/home-two/header/multi-page";

function LayoutTwo() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutTwo;
