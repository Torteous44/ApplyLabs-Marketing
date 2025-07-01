'use client';

import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ApplyLabs",
    "description": "ApplyLabs applies, optimizes, and tracks—while you plan your next move. Auto-apply to jobs, AI-optimized resumes, and real-time tracking dashboard.",
    "url": "https://applylabs.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to get started"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "ApplyLabs",
      "url": "https://applylabs.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ApplyLabs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://applylabs.com/Logo.svg"
      }
    },
    "featureList": [
      "Auto-apply to job openings",
      "AI-powered resume optimization",
      "Cover letter generation",
      "Job application tracking",
      "ATS optimization",
      "Real-time dashboard"
    ],
    "screenshot": "https://applylabs.com/og-image.png",
    "softwareVersion": "1.0.0",
    "releaseNotes": "Initial release with core job search automation features"
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 