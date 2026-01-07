import { Helmet } from "react-helmet-async"

const SEO = ({
  title,
  description,
  keywords,
  url,
  image
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google Rich Result */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ali Hasan Riyad",
          "url": "https://ahriyad.top",
          "jobTitle": "Frontend Developer",
          "sameAs": [
            "https://github.com/",
            "https://linkedin.com/"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO
