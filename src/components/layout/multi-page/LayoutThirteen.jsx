import { Outlet } from "react-router-dom";
import Header from "../../common/header/two";

function LayoutThirteen() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default LayoutThirteen;
