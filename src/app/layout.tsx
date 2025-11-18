import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  description: "Content, ne sapunica.",
  viewport: null,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${ttRamillas.variable} ${ttRamillasOutline.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
