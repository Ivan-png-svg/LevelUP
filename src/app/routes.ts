import { createBrowserRouter } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import IndividualConsultations from "./pages/IndividualConsultations";
import GroupTrainings from "./pages/GroupTrainings";
import CorporatePrograms from "./pages/CorporatePrograms";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Tests from "./pages/Tests";
import CVForm from "./pages/CVForm";
import ReviewsForm from "./pages/ReviewsForm";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/individual", Component: IndividualConsultations },
      { path: "services/group", Component: GroupTrainings },
      { path: "services/corporate", Component: CorporatePrograms },
      { path: "pricing", Component: Pricing },
      { path: "tests", Component: Tests },
      { path: "cv", Component: CVForm },
      { path: "reviews", Component: ReviewsForm },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);