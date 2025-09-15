import Career from "../../components/career-page";
import LogoSlider from "../../components/career-page/logo-slider";
import BreadCrumb from "../../components/common/Breadcrumb";

function CareerPage() {
	return (
		<>
			<BreadCrumb title="Career" />
			<Career />
			<LogoSlider />
		</>
	);
}

export default CareerPage;
