import { Helmet } from "react-helmet-async";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  type PageSeo,
} from "../data/seo";

type PageMetaProps = {
  seo: PageSeo;
};

export default function PageMeta({ seo }: PageMetaProps) {
  const {
    path,
    title,
    description,
    image = DEFAULT_OG_IMAGE,
    imageAlt = SITE_NAME,
  } = seo;

  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}
