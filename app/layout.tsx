import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientWrapper from "@/components/Loader/ClientWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StarFlicks",
  description: "Movies Rated, Just For You!",

  robots: "index, follow",
  openGraph: {
    title: "StarFlicks",
    description: "Movie and Series Rating App",
    url: "https://glemify.com",
    type: "website",
    images: [
      {
        url: "https://glemify.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "StarFlicks | Movie and Series Rating App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-Black04`}
      >
        <div className="max-w-[1600px] mx-auto overflow-x-hidden text-TextColor">
          <ClientWrapper>{children}</ClientWrapper>
        </div>
      </body>
    </html>
  );
}
