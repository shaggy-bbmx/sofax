import { Outlet } from "react-router-dom";
import Header from "../common/header";
import Footer from "../home/home-five/footer";
function OnePageLayoutEleven() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutEleven;
