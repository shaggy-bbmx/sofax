import { Outlet } from "react-router-dom";
import Footer from "../../home/home-two/footer";
import Header from "../../home/home-two/header/one-page";

function OnePageLayoutTwo() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutTwo;
