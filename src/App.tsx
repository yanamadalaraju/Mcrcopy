// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import TallyImplementationPage from "./pages/services/TallyImplementationPage";
// import TallyIntegrationPage from "./pages/services/TallyIntegrationPage";
// import TallyCustomizationPage from "./pages/services/TallyCustomizationPage";
// import TallyWebPage from "./pages/services/TallyWebPage";
// import WebApplicationsPage from "./pages/services/WebApplicationsPage";
// import MobileAppPage from "./pages/MobileAppPage";
// import ContactPage from "./pages/ContactPage";
// import NotFound from "./pages/NotFound";
// import QuotePage from "./pages/QuotePage";
// import TallyServices from "./pages/TallyServices";


// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
      
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/services/tally-implementation" element={<TallyImplementationPage />} />
//           <Route path="/services/tally-integration" element={<TallyIntegrationPage />} />
//           <Route path="/services/tally-customization" element={<TallyCustomizationPage />} />
//           <Route path="/services/tally-web" element={<TallyWebPage />} />
//           <Route path="/services/web-applications" element={<WebApplicationsPage />} />
//           <Route path="/services/mobile-application" element={<MobileAppPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/quote" element={<QuotePage />} />
//           <Route path="/services/tally-erp" element={<TallyCustomizationPage />} />
//           <Route path="/tally-services" element={<TallyServices />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TallyImplementationPage from "./pages/services/TallyImplementationPage";
import TallyIntegrationPage from "./pages/services/TallyIntegrationPage";
import TallyCustomizationPage from "./pages/services/TallyCustomizationPage";
import TallyWebPage from "./pages/services/TallyWebPage";
import WebApplicationsPage from "./pages/services/WebApplicationsPage";
import MobileAppPage from "./pages/MobileAppPage";
import ContactPage from "./pages/ContactPage";
// import NotFound from "./pages/NotFound";
import QuotePage from "./pages/QuotePage";
import TallyServices from "./pages/TallyServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Home | Your Company Name</title>
                    <meta
                      name="description"
                      content="Welcome to our homepage. We offer professional software solutions for your business."
                    />
                    <meta
                      name="keywords"
                      content="software solutions, professional services, business applications, web development, mobile apps"
                    />
                  </Helmet>
                  <Index />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Helmet>
                    <title>About Us | Your Company Name</title>
                    <meta
                      name="description"
                      content="Learn more about our company, our values, and our team of experts."
                    />
                    <meta
                      name="keywords"
                      content="about us, company profile, software experts, business values, team"
                    />
                  </Helmet>
                  <AboutPage />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Helmet>
                    <title>Our Services | Your Company Name</title>
                    <meta
                      name="description"
                      content="Explore our diverse range of software services including web apps, mobile apps, and more."
                    />
                    <meta
                      name="keywords"
                      content="software services, web apps, mobile apps, IT consulting, tech solutions"
                    />
                  </Helmet>
                  <ServicesPage />
                </>
              }
            />
            <Route
              path="/services/tally-implementation"
              element={
                <>
                  <Helmet>
                    <title>Tally Implementation | Your Company Name</title>
                    <meta
                      name="description"
                      content="Professional Tally ERP implementation to streamline your business processes."
                    />
                    <meta
                      name="keywords"
                      content="Tally ERP, Tally implementation, business process automation, Tally solutions"
                    />
                  </Helmet>
                  <TallyImplementationPage />
                </>
              }
            />
            <Route
              path="/services/tally-integration"
              element={
                <>
                  <Helmet>
                    <title>Tally Integration | Your Company Name</title>
                    <meta
                      name="description"
                      content="Integrate Tally ERP with your existing business systems for seamless data flow."
                    />
                    <meta
                      name="keywords"
                      content="Tally integration, ERP integration, business software integration, Tally solutions"
                    />
                  </Helmet>
                  <TallyIntegrationPage />
                </>
              }
            />
            <Route
              path="/services/tally-customization"
              element={
                <>
                  <Helmet>
                    <title>Tally Customization | Your Company Name</title>
                    <meta
                      name="description"
                      content="Get custom Tally ERP solutions tailored to your business needs."
                    />
                    <meta
                      name="keywords"
                      content="Tally customization, custom ERP solutions, Tally software, business solutions"
                    />
                  </Helmet>
                  <TallyCustomizationPage />
                </>
              }
            />
            <Route
              path="/services/tally-web"
              element={
                <>
                  <Helmet>
                    <title>Tally Web Solutions | Your Company Name</title>
                    <meta
                      name="description"
                      content="Access your Tally ERP online with our web solutions for real-time updates."
                    />
                    <meta
                      name="keywords"
                      content="Tally web, online Tally, Tally ERP online, business web solutions"
                    />
                  </Helmet>
                  <TallyWebPage />
                </>
              }
            />
            <Route
              path="/services/web-applications"
              element={
                <>
                  <Helmet>
                    <title>Web Applications | Your Company Name</title>
                    <meta
                      name="description"
                      content="Custom web applications designed to meet your business needs."
                    />
                    <meta
                      name="keywords"
                      content="web applications, custom web apps, business applications, software solutions"
                    />
                  </Helmet>
                  <WebApplicationsPage />
                </>
              }
            />
            <Route
              path="/services/mobile-application"
              element={
                <>
                  <Helmet>
                    <title>Mobile Application Development | Your Company Name</title>
                    <meta
                      name="description"
                      content="We develop custom mobile applications for iOS and Android platforms."
                    />
                    <meta
                      name="keywords"
                      content="mobile apps, iOS app development, Android apps, mobile application development"
                    />
                  </Helmet>
                  <MobileAppPage />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Helmet>
                    <title>Contact Us | Your Company Name</title>
                    <meta
                      name="description"
                      content="Get in touch with us for any queries or to request a quote for your project."
                    />
                    <meta
                      name="keywords"
                      content="contact us, customer support, business inquiry, software solutions"
                    />
                  </Helmet>
                  <ContactPage />
                </>
              }
            />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/tally-services" element={<TallyServices />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
