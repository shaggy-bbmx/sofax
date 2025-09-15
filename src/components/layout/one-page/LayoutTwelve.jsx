import { Outlet } from "react-router-dom";
import Header from "../common/header";

function OnePageLayoutTwelve() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default OnePageLayoutTwelve;
