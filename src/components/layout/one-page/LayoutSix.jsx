import { Outlet } from "react-router-dom";
import Header from "../../home/home-six/header/one-page";
function OnePageLayoutSix() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default OnePageLayoutSix;
