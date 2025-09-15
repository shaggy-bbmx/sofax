import { Outlet } from "react-router-dom";
import Footer from "../../home/home-one/footer";
import Header from "../../home/home-one/header/one-page";

function OnePageLayoutOne() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutOne;
