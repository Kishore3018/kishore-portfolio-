import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kishore S - Full Stack Developer",
  description:
    "Full Stack Developer and Computer Science student. Building scalable web applications with PHP, Python, and Angular. Available for internships and software engineering opportunities.",
  keywords:
    "Full Stack Developer, PHP Developer, Python Developer, Software Engineer, Web Development, Angular, MySQL",
  authors: [{ name: "Kishore S" }],
  openGraph: {
    title: "Kishore S - Full Stack Developer",
    description:
      "Exploring the latest in web development and AI-driven applications. Let's build something amazing together.",
    type: "website",
    url: "https://kishore-portfolio.com",
    siteName: "Kishore S Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Kishore S Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishore S - Full Stack Developer",
    description: "Full Stack Developer | Computer Science Student",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0e27" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark text-gray-100 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
