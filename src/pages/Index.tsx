
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CTASection from "@/components/CTASection";
// import ServiceCard from "@/components/ServiceCard";

// const Index = () => {
//   return (
//     <>
//       <Header />
      
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-mcrt-light via-white to-blue-50 pt-16 pb-20 md:pt-24 md:pb-28">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mcrt-dark leading-tight">
//                 Enterprise Solutions <br />
//                 <span className="text-mcrt-blue">Tailored for Your Business</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-700 max-w-lg">
//                 MCRT Software specializes in Tally ERP customization, mobile app development, and enterprise solutions that drive business growth.
//               </p>
//               <div className="flex flex-wrap gap-4 pt-2">
//                 <Button asChild className="btn-primary text-base">
//                   <Link to="/contact">Get a Free Consultation</Link>
//                 </Button>
//                 <Button asChild className="btn-outline text-base">
//                   <Link to="/services">Explore Our Services</Link>
//                 </Button>
//               </div>
//             </div>
//             <div className="hidden lg:block">
//               <img 
//                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400" 
//                 alt="Enterprise Software Development" 
//                 className="rounded-lg shadow-xl w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Services Section */}
//       <section className="section bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="section-title">Our Services</h2>
//             <p className="section-subtitle mx-auto">
//               We offer a comprehensive range of digital solutions to help businesses streamline operations and achieve growth.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <ServiceCard
//               title="Tally ERP Customization"
//               description="Custom Tally ERP solutions tailored to your business needs, with seamless integration and support services."
//               icon={
//                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
//                   <path d="M7 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                   <path d="M7 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                   <path d="M7 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               }
//               link="/services/tally-erp"
//             />
            
//             <ServiceCard
//               title="Mobile App Development"
//               description="Custom mobile applications that enhance customer engagement and streamline business operations."
//               icon={
//                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
//                   <path d="M10 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                   <circle cx="12" cy="17" r="1" fill="currentColor" />
//                 </svg>
//               }
//               link="/services/mobile-application"
//             />
            
//             <ServiceCard
//               title="Enterprise Solutions"
//               description="End-to-end enterprise software solutions that integrate with your existing systems and improve efficiency."
//               icon={
//                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="2" y="6" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
//                   <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                   <path d="M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               }
//               link="/services"
//             />

//             <ServiceCard
//               title="Tally Implementation"
//               description="Streamline your business setup with our expert-led Tally ERP implementation services."
//               icon={
//                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               }
//               link="/services/tally-implementation"
//             />

//             <ServiceCard
//               title="Tally Integration"
//               description="Seamlessly integrate Tally with your CRM, e-commerce, or other business tools."
//               icon={
//                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
//                   <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               }
//               link="/services/tally-integration"
//             />

//             <ServiceCard
//               title="Tally on Web"
//               description="Access Tally remotely and securely through any device with our web-based solutions."
//               icon={
//                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
//                   <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
//                 </svg>
//               }
//               link="/services/tally-web"
//             />

//           </div>
//         </div>
//       </section>
      
//       {/* Why Choose Us Section */}
//       <section className="section bg-mcrt-gray">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <img 
//                 src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400" 
//                 alt="Team collaboration" 
//                 className="rounded-lg shadow-md w-full"
//               />
//             </div>
//             <div>
//               <h2 className="section-title">Why Choose MCRT Software?</h2>
//               <div className="space-y-6 mt-6">
//                 <div className="flex gap-4">
//                   <div className="bg-mcrt-blue rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
//                     <span className="text-white font-medium">1</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Expertise & Experience</h3>
//                     <p className="text-gray-600">
//                       Our team brings years of industry experience and technical expertise to every project we undertake.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex gap-4">
//                   <div className="bg-mcrt-blue rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
//                     <span className="text-white font-medium">2</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
//                     <p className="text-gray-600">
//                       We don't believe in one-size-fits-all. Each solution is tailored to your specific business needs.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex gap-4">
//                   <div className="bg-mcrt-blue rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
//                     <span className="text-white font-medium">3</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
//                     <p className="text-gray-600">
//                       Our commitment doesn't end at deployment. We provide ongoing support to ensure your solutions continue to perform optimally.
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               <Button asChild className="btn-primary mt-8">
//                 <Link to="/about">Learn More About Us</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* CTA Section */}
//       <CTASection />
      
//       <Footer />
//     </>
//   );
// };

// export default Index;

import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Home | MCR India"
        description="Welcome to MCR India. We offer digital solutions like Tally ERP implementation, web development, and more."
        keywords="Home, MCR India, Digital Solutions, Tally ERP, Web Development, Best tally in Bangalore, Tally ERP customization, Mobile app development, Enterprise software solutions, Tally on web, Business automation, MCRT Software, Digital transformation services, Tally services"
        baseUrl="https://mcrindia.in"
      />

      <Helmet>
        <meta property="og:title" content="MCR India | Tally ERP & Enterprise Solutions" />
        <meta property="og:description" content="MCRT Software specializes in Tally ERP customization, mobile apps, and digital business solutions. Get a free consultation today!" />
        <meta property="og:url" content="https://mcrindia.in" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        {/* Adding Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@MCRIndia" />
        <meta name="twitter:title" content="MCR India | Tally ERP & Enterprise Solutions" />
        <meta name="twitter:description" content="MCRT Software specializes in Tally ERP customization, mobile apps, and digital business solutions. Get a free consultation today!" />
        <meta name="twitter:image" content="https://mcrindia.in/logo.png" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mcrt-light via-white to-blue-50 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mcrt-dark leading-tight">
                Enterprise Solutions <br />
                <span className="text-mcrt-blue">Tailored for Your Business</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                MCRT Software specializes in Tally ERP customization, mobile app development, and enterprise solutions that drive business growth.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild className="btn-primary text-base">
                  <Link to="/contact" aria-label="Get a free consultation">Get a Free Consultation</Link>
                </Button>
                <Button asChild className="btn-outline text-base">
                  <Link to="/services" aria-label="Explore our services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format"
                alt="Enterprise Software Development"
                width="600"
                height="400"
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              We offer a comprehensive range of digital solutions to help businesses streamline operations and achieve growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <ServiceCard
              title="Tally ERP Customization"
              description="Tailored Tally ERP solutions, seamless integrations, and ongoing support for your business needs."
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 10H17M7 14H17M7 18H12" strokeLinecap="round" />
                </svg>
              }
              link="/services/tally-erp"
            />
            <ServiceCard
              title="Mobile App Development"
              description="Custom mobile apps that enhance engagement and streamline business processes."
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="6" y="3" width="12" height="18" rx="2" />
                  <path d="M10 6H14" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1" fill="currentColor" />
                </svg>
              }
              link="/services/mobile-application"
            />
            <ServiceCard
              title="Enterprise Solutions"
              description="Robust enterprise software solutions to improve efficiency and integrate seamlessly with existing systems."
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="6" width="20" height="12" rx="1" />
                  <path d="M6 12H18M12 9V15" strokeLinecap="round" />
                </svg>
              }
              link="/services"
            />
            <ServiceCard
              title="Tally Implementation"
              description="Efficient setup and deployment of Tally ERP for optimized business management."
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 6H21M3 12H21M3 18H21" strokeLinecap="round" />
                </svg>
              }
              link="/services/tally-implementation"
            />
            <ServiceCard
              title="Tally Integration"
              description="Seamlessly integrate Tally with CRM, e-commerce, and other business tools."
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12H16M12 8V16" strokeLinecap="round" />
                </svg>
              }
              link="/services/tally-integration"
            />
            <ServiceCard
              title="Tally on Web"
              description="Access your Tally remotely and securely on any device via our web solutions."
              icon={
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 10H21" />
                </svg>
              }
              link="/services/tally-web"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-mcrt-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80&auto=format"
                alt="Why Choose Us"
                width="600"
                height="400"
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-mcrt-dark">Why Choose MCR India?</h3>
              <p className="text-lg text-gray-700">
                We deliver customized solutions that are tailored to your specific business needs, ensuring streamlined operations and enhanced growth.
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>Customized Tally ERP solutions</li>
                <li>Seamless integrations with your systems</li>
                <li>Experienced team of professionals</li>
                <li>Cost-effective pricing options</li>
                <li>Excellent customer support</li>
              </ul>
              <Link to="/contact" className="text-lg text-mcrt-blue font-semibold hover:underline">
                Get in touch with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </>
  );
};

export default Index;

