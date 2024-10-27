import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevHost 2024",
    template: "%s - DevHost 2024",
  },
  description: "Expertise Redefined, Experience Reimagined.",
  keywords: [
    "sosc",
    "Sahyadri Open Source Community",
    "sosc devhost",
    "devhost 2024",
    "DevHost",
    "Devhost",
    "Devhost 2024",
    "DevHost 2024",
  ],
  creator: "so-sc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devhost.sosc.org.in/",
    title: "DevHost 2024",
    description: "Expertise Redefined, Experience Reimagined.",
    siteName: "DevHost 2024",
    images: [
      {
        url: "https://devhost.sosc.org.in/dhost_prev.png",
        width: 1200,
        height: 630,
        alt: "DevHost 2024",
      },
    ],
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Expertise Redefined, Experience Reimagined." />
        <meta name="keywords" content="sosc, Sahyadri Open Source Community, devhost, DevHost 2024" />
        <meta name="creator" content="so-sc" />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="shortcut icon" href="/favicons/favicon-16x16.png" />
        <link rel="canonical" href="https://devhost.sosc.org.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://devhost.sosc.org.in/" />
        <meta property="og:title" content="DevHost 2024" />
        <meta property="og:description" content="Expertise Redefined, Experience Reimagined." />
        <meta property="og:site_name" content="DevHost 2024" />
        <meta property="og:image" content="https://devhost.sosc.org.in/dhost_prev.png" />
      </head>
      <body className={poppins.className}>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
