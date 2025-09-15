import { Outlet } from "react-router-dom";
import Header from "../common/header/two";

function OnePageLayoutThirteen() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default OnePageLayoutThirteen;
