import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MERN & Blockchain Developer Portfolio",
  description: "Portfolio website showcasing my skills and projects as a MERN stack and blockchain developer",
  keywords: ["MERN", "Blockchain", "Developer", "Portfolio", "React", "Next.js", "Node.js", "MongoDB", "Express", "Ethereum"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "MERN & Blockchain Developer Portfolio",
    description: "Portfolio website showcasing my skills and projects as a MERN stack and blockchain developer",
    siteName: "Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
