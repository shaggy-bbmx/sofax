import { Outlet } from "react-router-dom";
import Footer from "../../home/home-five/footer";
import Header from "../../home/home-five/header/one-page";
function OnePageLayoutFive() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutFive;
