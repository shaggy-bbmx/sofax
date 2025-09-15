import { Outlet } from "react-router-dom";
import Footer from "../../home/home-ten/footer";
import Header from "../../home/home-ten/header/one-page";

function OnePageLayoutTen() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutTen;
