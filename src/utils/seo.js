export const generateMetaTags = (title, description, image, url) => ({
  title,
  description,
  canonical: url,
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    image
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    image
  }
});