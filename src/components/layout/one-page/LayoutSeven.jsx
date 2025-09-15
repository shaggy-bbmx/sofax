import { Outlet } from "react-router-dom";
import Footer from "../../home/home-seven/footer";
import Header from "../../home/home-seven/header/one-page";
function OnePageLayoutSeven() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutSeven;
