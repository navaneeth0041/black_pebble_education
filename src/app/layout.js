import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Black Pebble Education",
    template: "%s ",
  },
  description:
    "Empowering kids and teens with fun, age-tailored financial literacy education.",
  metadataBase: new URL("https://black-pebble-education.vercel.app/"),
  openGraph: {
    title: "Black Pebble Education",
    description: "Empowering kids and teens with fun, age-tailored financial literacy education.",
    url: "https://black-pebble-education.vercel.app/",
    siteName: "Black Pebble Education",
    images: [
      {
        url: "/images/a.jpg", // Note: Consider converting to PNG/JPG for better compatibility
        width: 1200,
        height: 630,
        alt: "Black Pebble Education - Financial literacy for kids and teens",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Pebble Education",
    description: "Teaching money mastery to the young, one course at a time.",
    images: ["/images/a.jpg"], // Note: Consider converting to PNG/JPG for better compatibility
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}