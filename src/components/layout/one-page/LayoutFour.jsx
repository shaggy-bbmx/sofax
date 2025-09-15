import { Outlet } from "react-router-dom";
import Header from "../../home/home-four/header/one-page";

function OnePageLayoutFour() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default OnePageLayoutFour;
