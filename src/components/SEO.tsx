// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  baseUrl: string; // Base URL, e.g., "https://mcrindia.in"
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, baseUrl }) => {
  const location = useLocation(); // Get current path
  const canonicalUrl = `${baseUrl}${location.pathname}`; // Dynamically generate canonical URL

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MCR India",
          "url": canonicalUrl,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
