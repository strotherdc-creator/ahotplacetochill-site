import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationServer } from "@/components/NavigationServer";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "A Hot Place To Chill | Recovery & Wellness Lounge | New Buffalo, MI",
    template: "%s | A Hot Place To Chill",
  },
  description:
    "Modern recovery and wellness lounge in New Buffalo, MI. Whole body cryotherapy, infrared sauna, red light therapy, Power Plate, and compression therapy. Personalized wellness plans through our app.",
  keywords: [
    "cryotherapy New Buffalo MI",
    "infrared sauna New Buffalo",
    "red light therapy southwest Michigan",
    "Power Plate vibration training",
    "wellness lounge Michigan",
    "recovery therapy New Buffalo",
    "compression therapy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ahotplacetochill.com",
    siteName: "A Hot Place To Chill",
    title: "A Hot Place To Chill | Recovery & Wellness Lounge",
    description:
      "Move better. Recover better. Stay active longer. Modern wellness services and guided recovery plans in New Buffalo, MI.",
    images: [
      {
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030573991/IqwoYZkJKxiMuTAA.png",
        width: 1200,
        height: 630,
        alt: "A Hot Place To Chill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Hot Place To Chill | Recovery & Wellness Lounge",
    description: "Move better. Recover better. Stay active longer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className={`${inter.className} bg-[#0A0A0A] text-[#F0F0F0] antialiased`}>
        <NavigationServer />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
