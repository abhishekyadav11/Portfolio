import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

const title = "Abhishek Yadav — Frontend Developer";
const description =
  "Abhishek Yadav is a Frontend Developer with 2+ years of experience building fast, production-grade React and TypeScript web applications across Real Estate and EdTech.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Abhishek Yadav" },
  description,
  applicationName: "Abhishek Yadav Portfolio",
  keywords: [
    "Abhishek Yadav",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Redux",
    "TanStack Query",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Yadav", url: siteUrl }],
  creator: "Abhishek Yadav",
  publisher: "Abhishek Yadav",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "Abhishek Yadav", type: "profile", locale: "en_IN", firstName: "Abhishek", lastName: "Yadav" },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  // Optional: set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to verify the site in Google Search Console.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090c" },
    { media: "(prefers-color-scheme: light)", color: "#f5f6f9" },
  ],
  colorScheme: "dark light",
};

// Runs before first paint: saved choice wins, otherwise follow the OS setting, default dark.
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Without JavaScript the scroll animations never run, so show everything. */}
        <noscript>
          <style>{`[style*="opacity: 0"],[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
