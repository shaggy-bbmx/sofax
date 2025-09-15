import { Outlet } from "react-router-dom";
import Footer from "../../home/home-ten/footer";
import Header from "../../home/home-ten/header/multi-page";
function LayoutTen() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutTen;
