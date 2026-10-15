import { Helmet } from "react-helmet-async";
import { getPageTitle, SHARE_IMAGE_URL, SITE_URL } from "@/lib/seo-metadata";

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

const Seo = ({ title, description, path }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const pageTitle = getPageTitle(path, title);
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={SHARE_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={SHARE_IMAGE_URL} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
