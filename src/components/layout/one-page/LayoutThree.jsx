import { Outlet } from "react-router-dom";
import Footer from "../../home/home-three/footer";
import Header from "../../home/home-three/header/one-page";
function OnePageLayoutThree() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default OnePageLayoutThree;
