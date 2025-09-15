import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/home/home-five/faq";
import PortfolioList from "../../components/portfolio/PortfolioList";
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title="Our Portfolio" />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
