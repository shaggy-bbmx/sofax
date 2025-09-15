import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/home/home-five/faq";
import SingleServiceDetails from "../../components/service-page/single";
function SingleService() {
	return (
		<>
			<BreadCrumb title="Service Details" />
			<SingleServiceDetails />
			<Faq />
			<AutoSlider />
		</>
	);
}

export default SingleService;
