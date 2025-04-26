// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MCR India",
          "url": url,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
