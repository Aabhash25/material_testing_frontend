import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageLoader from "./components/layout/PageLoader";
import { SERVICES } from "./data/siteData";

const GA_ID = "AW-18430464863";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function GAPageTracker() {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
  return null;
}

function Root() {
  return (
    <>
      <ScrollToTop />
      <GAPageTracker />
      <PageLoader />
      <Layout />
    </>
  );
}

const serviceRoutes = SERVICES.map((s) => ({
  path: `services/${s.slug}`,
  element: <ServiceDetail service={s} />,
}));

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      ...serviceRoutes,
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];
