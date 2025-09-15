import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/home/home-five/faq";
import TeamMembers from "../../components/team-page/TeamMembers";

function TeamPage() {
	return (
		<>
			<BreadCrumb title="Our Team" />
			<TeamMembers />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default TeamPage;
