import { Outlet } from "react-router-dom";
import Footer from "../../home/home-eight/footer";
import Header from "../../home/home-eight/header/one-page";
function OnePageLayoutEight() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutEight;
