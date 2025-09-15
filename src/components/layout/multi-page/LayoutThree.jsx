import { Outlet } from "react-router-dom";
import Footer from "../../home/home-three/footer";
import Header from "../../home/home-three/header/multi-page";

function LayoutThree() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutThree;
