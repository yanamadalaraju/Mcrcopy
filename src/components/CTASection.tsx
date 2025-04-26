
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// interface CTASectionProps {
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   buttonLink?: string;
//   bgColor?: string;
// }

// const CTASection = ({
//   title = "Ready to Transform Your Business?",
//   description = "Get in touch with our experts today and discover how our solutions can help your business grow.",
//   buttonText = "Contact Us",
//   buttonLink = "/contact",
//   bgColor = "bg-mcrt-blue",
// }: CTASectionProps) => {
//   return (
//     <section className={`${bgColor} py-16 px-4`}>
//       <div className="container-custom text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
//         <p className="text-white/90 max-w-2xl mx-auto mb-8">{description}</p>
//         <Button asChild className="btn-secondary px-8 py-6 text-lg">
//           <Link to={buttonLink}>{buttonText}</Link>
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default CTASection;


import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO"; // Import the SEO component

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
}

const CTASection = ({
  title = "Ready to Transform Your Business?",
  description = "Get in touch with our experts today and discover how our solutions can help your business grow.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  bgColor = "bg-mcrt-blue",
}: CTASectionProps) => {
  return (
    <>
      <SEO
        title="Contact MCR India | Digital Solutions & Business Growth"
        description="Get in touch with MCR India to transform your business with our digital solutions. Discover how our Tally ERP and custom web/mobile applications can help your business grow."
        keywords="Contact MCR India, Digital Solutions, Tally ERP, Business Growth, Tally Customization, Web Development, Mobile Application, Contact Us"
        url="http://mcrindia.in/contact"
      />
      
      <section className={`${bgColor} py-16 px-4`}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">{description}</p>
          <Button asChild className="btn-secondary px-8 py-6 text-lg">
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default CTASection;
