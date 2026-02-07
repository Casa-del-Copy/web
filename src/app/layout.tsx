import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const ttRamillas = localFont({
  src: [
    {
      path: "../fonts/TTRamillas-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/TTRamillas-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/TTRamillas-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/TTRamillas-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/TTRamillas-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TTRamillas-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/TTRamillas-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/TTRamillas-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/TTRamillas-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/TTRamillas-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/TTRamillas-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/TTRamillas-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/TTRamillas-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/TTRamillas-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-ttramillas",
});

const ttRamillasOutline = localFont({
  src: [
    {
      path: "../fonts/TTRamillas-BlackOutline.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/TTRamillas-BlackOutlineItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-ttramillasoutline",
});

export const metadata: Metadata = {
  title: "Casa del Copy",
  description: "Content, ne sapunica. Kreativna agencija.",
  viewport: null,
  metadataBase: new URL("https://casadelcopy.hr"),
  openGraph: {
    title: "Casa del Copy",
    description: "Content, ne sapunica. Kreativna agencija.",
    url: "https://casadelcopy.hr",
    siteName: "Casa del Copy",
    images: [
      {
        url: "/hero-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Casa del Copy",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa del Copy",
    description: "Content, ne sapunica. Kreativna agencija.",
    images: ["/hero-og.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Casa del Copy",
    url: "https://casadelcopy.hr",
    email: "casadelcopy@gmail.com",
    description: "Content, ne sapunica. Kreativna agencija.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Štefanovec 143",
      addressLocality: "Zagreb",
      postalCode: "10000",
      addressCountry: "HR",
    },
    founders: [
      { "@type": "Person", name: "Anja Mađarević Lučin" },
      { "@type": "Person", name: "Marijana Galović" },
    ],
  };

  return (
    <html lang="hr" data-theme="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${ttRamillas.variable} ${ttRamillasOutline.variable} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
