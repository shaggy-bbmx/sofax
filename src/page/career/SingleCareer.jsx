import JobDetails from "../../components/career-page/single/JobDetails";
import BreadCrumb from "../../components/common/Breadcrumb";
import LogoSlider from "../../components/common/logo-slider";
function SingleCareerPage() {
	return (
		<>
			<BreadCrumb title="UI/UX Designer" />
			<JobDetails />
			<LogoSlider light />
		</>
	);
}

export default SingleCareerPage;
