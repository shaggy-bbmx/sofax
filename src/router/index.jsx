import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/index.jsx";
import LayoutEight from "../components/layout/multi-page/LayoutEight.jsx";
import LayoutEleven from "../components/layout/multi-page/LayoutEleven.jsx";
import LayoutFive from "../components/layout/multi-page/LayoutFive.jsx";
import LayoutFour from "../components/layout/multi-page/LayoutFour.jsx";
import LayoutNine from "../components/layout/multi-page/LayoutNine.jsx";
import LayoutOne from "../components/layout/multi-page/LayoutOne.jsx";
import LayoutSeven from "../components/layout/multi-page/LayoutSeven.jsx";
import LayoutSix from "../components/layout/multi-page/LayoutSix.jsx";
import LayoutTen from "../components/layout/multi-page/LayoutTen.jsx";
import LayoutThirteen from "../components/layout/multi-page/LayoutThirteen.jsx";
import LayoutThree from "../components/layout/multi-page/LayoutThree.jsx";
import LayoutTwelve from "../components/layout/multi-page/LayoutTwelve.jsx";
import LayoutTwo from "../components/layout/multi-page/LayoutTwo.jsx";

import OnePageLayoutEight from "../components/layout/one-page/LayoutEight.jsx";
import OnePageLayoutFive from "../components/layout/one-page/LayoutFive.jsx";
import OnePageLayoutFour from "../components/layout/one-page/LayoutFour.jsx";
import OnePageLayoutNine from "../components/layout/one-page/LayoutNine.jsx";
import OnePageLayoutOne from "../components/layout/one-page/LayoutOne.jsx";
import OnePageLayoutSeven from "../components/layout/one-page/LayoutSeven.jsx";
import OnePageLayoutSix from "../components/layout/one-page/LayoutSix.jsx";
import OnePageLayoutTen from "../components/layout/one-page/LayoutTen.jsx";
import OnePageLayoutThree from "../components/layout/one-page/LayoutThree.jsx";
import OnePageLayoutTwo from "../components/layout/one-page/LayoutTwo.jsx";
import ErrorPage from "../error-page.jsx";
import AboutUs from "../page/about-us/index.jsx";
import ResetPassword from "../page/auth/ResetPassword.jsx";
import SignIn from "../page/auth/SignIn.jsx";
import SignUp from "../page/auth/SignUp.jsx";
import BlogPage from "../page/blog/index.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import CareerPage from "../page/career/index.jsx";
import SingleCareerPage from "../page/career/SingleCareer.jsx";
import ContactUs from "../page/contact-us/index.jsx";
import HomeEight from "../page/home/HomeEight.jsx";
import HomeFive from "../page/home/HomeFive.jsx";
import HomeFour from "../page/home/HomeFour.jsx";
import HomeNine from "../page/home/HomeNine.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import HomeSeven from "../page/home/HomeSeven.jsx";
import HomeSix from "../page/home/HomeSix.jsx";
import HomeTen from "../page/home/HomeTen.jsx";
import HomeThree from "../page/home/HomeThree.jsx";
import HomeTwo from "../page/home/HomeTwo.jsx";
import PortfolioPage from "../page/portfolio/index.jsx";
import SinglePortfolioPage from "../page/portfolio/SinglePortfolio.jsx";
import Pricing from "../page/pricing/index.jsx";
import ServicePage from "../page/service/index.jsx";
import SingleService from "../page/service/SingleService.jsx";
import TeamPage from "../page/team/index.jsx";
import SingleTeamPage from "../page/team/SingleTeam.jsx";
import ComingSoonPage from "../page/utility/ComingSoon.jsx";
import FaqPage from "../page/utility/Faq.jsx";
import TermsAndConditionPage from "../page/utility/TermsAndCondition.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutEleven />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "about-us",
						element: <AboutUs />,
					},
					{
						path: "contact-us",
						element: <ContactUs />,
					},
					{
						path: "faq",
						element: <FaqPage />,
					},
					{
						path: "terms-and-condition",
						element: <TermsAndConditionPage />,
					},
					{
						path: "error-page",
						element: <ErrorPage />,
					},
					{
						path: "pricing",
						element: <Pricing />,
					},
					{
						path: "blog",
						element: <BlogPage />,
					},
					{
						path: "single-blog",
						element: <SingleBlogPage />,
					},

					{
						path: "service",
						element: <ServicePage />,
					},
					{
						path: "single-service",
						element: <SingleService />,
					},
					{
						path: "team",
						element: <TeamPage />,
					},
					{
						path: "single-team",
						element: <SingleTeamPage />,
					},
					{
						path: "career",
						element: <CareerPage />,
					},
					{
						path: "single-career",
						element: <SingleCareerPage />,
					},
					{
						path: "portfolio",
						element: <PortfolioPage />,
					},

					{
						path: "single-portfolio",
						element: <SinglePortfolioPage />,
					},

					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},

			{
				path: "multi-page",
				element: <LayoutOne />,
				children: [
					{
						path: "home-one",
						element: <HomeOne />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutTwo />,
				children: [
					{
						path: "home-two",
						element: <HomeTwo />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutThree />,
				children: [
					{
						path: "home-three",
						element: <HomeThree />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutFour />,
				children: [
					{
						path: "home-four",
						element: <HomeFour />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutFive />,
				children: [
					{
						path: "home-five",
						element: <HomeFive />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutSix />,
				children: [
					{
						path: "home-six",
						element: <HomeSix />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutSix />,
				children: [
					{
						path: "home-six",
						element: <HomeSix />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutSeven />,
				children: [
					{
						path: "home-seven",
						element: <HomeSeven />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutEight />,
				children: [
					{
						path: "home-eight",
						element: <HomeEight />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutNine />,
				children: [
					{
						path: "home-nine",
						element: <HomeNine />,
					},
				],
			},
			{
				path: "multi-page",
				element: <LayoutTen />,
				children: [
					{
						path: "home-ten",
						element: <HomeTen />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutOne />,
				children: [
					{
						path: "home-one",
						element: <HomeOne />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutTwo />,
				children: [
					{
						path: "home-two",
						element: <HomeTwo />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutThree />,
				children: [
					{
						path: "home-three",
						element: <HomeThree />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutFour />,
				children: [
					{
						path: "home-four",
						element: <HomeFour />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutFive />,
				children: [
					{
						path: "home-five",
						element: <HomeFive />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutSix />,
				children: [
					{
						path: "home-six",
						element: <HomeSix />,
					},
				],
			},

			{
				path: "one-page",
				element: <OnePageLayoutSeven />,
				children: [
					{
						path: "home-seven",
						element: <HomeSeven />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutEight />,
				children: [
					{
						path: "home-eight",
						element: <HomeEight />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutNine />,
				children: [
					{
						path: "home-nine",
						element: <HomeNine />,
					},
				],
			},
			{
				path: "one-page",
				element: <OnePageLayoutTen />,
				children: [
					{
						path: "home-ten",
						element: <HomeTen />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutTwelve />,
				children: [
					{
						path: "coming-soon",
						element: <ComingSoonPage />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutThirteen />,
				children: [
					{
						path: "sign-up",
						element: <SignUp />,
					},
					{
						path: "sign-in",
						element: <SignIn />,
					},
					{
						path: "reset-password",
						element: <ResetPassword />,
					},
				],
			},
		],
	},
]);
