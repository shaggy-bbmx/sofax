import { Outlet } from "react-router-dom";
import Footer from "../../home/home-nine/footer";
import Header from "../../home/home-nine/header/one-page";
function OnePageLayoutNine() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutNine;
