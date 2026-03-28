import { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./constants";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || `${SITE_URL}/images/og-default.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { sr: url, "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "sr_RS",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}
