import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: "website" | "article" | "organization";
  title?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export default function StructuredData({
  type = "website",
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = "https://bylart.com";

    if (type === "organization") {
      return {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        name: "BYLART",
        description:
          "Bach Flower Therapy platform for emotional wellness and natural healing",
        url: baseUrl,
        logo: `${baseUrl}/34.png`,
        image: `${baseUrl}/34.png`,
        sameAs: [
          "https://www.facebook.com/bylart",
          "https://www.instagram.com/bylart",
          "https://twitter.com/bylart",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "127",
        },
      };
    }

    if (type === "article") {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        image: image || `${baseUrl}/34.png`,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
          "@type": "Person",
          name: author || "BYLART Team",
        },
        publisher: {
          "@type": "Organization",
          name: "BYLART",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/34.png`,
          },
        },
      };
    }

    // Default: Website
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BYLART - Bach Flower Therapy",
      description:
        "Comprehensive platform for Bach Flower Therapy, emotional wellness, and natural healing",
      url: baseUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
}
