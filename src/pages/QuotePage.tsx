
// import React from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";

// const QuotePage = () => {
//   const form = useForm();

//   const onSubmit = (data: any) => {
//     console.log(data);
//     toast.success("Thank you for your inquiry! We'll get back to you soon.");
//   };

//   return (
//     <>
//       <Header />
//       <main className="py-16">
//         <div className="container-custom max-w-2xl">
//           <h1 className="text-4xl font-bold mb-8 text-center">Get a Quote</h1>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Name</label>
//                   <Input {...form.register("name")} placeholder="Your name" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Email</label>
//                   <Input {...form.register("email")} type="email" placeholder="your@email.com" required />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Phone</label>
//                 <Input {...form.register("phone")} placeholder="Your phone number" required />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Message</label>
//                 <Textarea 
//                   {...form.register("message")} 
//                   placeholder="Tell us about your requirements"
//                   className="min-h-[120px]"
//                   required
//                 />
//               </div>
//               <Button type="submit" className="w-full">Submit Quote Request</Button>
//             </form>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default QuotePage;


import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Helmet } from "react-helmet";
import SEO from "@/components/SEO";

const QuotePage = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <>
     <SEO
  title="Home | MCR India"
  description="Welcome to MCR India. We offer digital solutions like Tally ERP implementation, web development, and more."
  keywords="Home, MCR India, Digital Solutions, Tally ERP, Web Development, Best tally in Bangalore, Tally ERP customization, Mobile app development, Enterprise software solutions, Tally on web, Business automation, MCRT Software, Digital transformation services, Tally services"
  baseUrl="https://mcrindia.in"
/>

      <Helmet>
        <title>Get a Quote - MCRT Software</title>
        <meta
          name="description"
          content="Request a custom quote for mobile app development services from MCRT Software. Get in touch with us for your business's mobile app needs."
        />
        <meta
          name="keywords"
          content="quote, mobile app development, iOS, Android, custom mobile apps, MCRT Software"
        />
        <meta name="author" content="MCRT Software" />
        <meta property="og:title" content="Get a Quote - MCRT Software" />
        <meta
          property="og:description"
          content="Request a custom quote for mobile app development services from MCRT Software. Get in touch with us for your business's mobile app needs."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="http://mcrindia.in/quote" />
        <meta name="twitter:title" content="Get a Quote - MCRT Software" />
        <meta
          name="twitter:description"
          content="Request a custom quote for mobile app development services from MCRT Software. Get in touch with us for your business's mobile app needs."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
      </Helmet>
      <Header />
      <main className="py-16">
        <div className="container-custom max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Get a Quote</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input {...form.register("name")} placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input {...form.register("email")} type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input {...form.register("phone")} placeholder="Your phone number" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  {...form.register("message")}
                  placeholder="Tell us about your requirements"
                  className="min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Submit Quote Request</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QuotePage;
