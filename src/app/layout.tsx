import type { Metadata } from "next";
import { Oswald, Raleway, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NoiseBg from "@/components/NoiseBg/NoiseBg";
import Nav from "@/components/Nav/Nav";
import FinalCta from "@/components/FinalCTA/FinalCTA";
import CallToAction from "@/components/CallToAction/CallToAction";
import { Toaster } from "react-hot-toast";
import PlausibleProvider from "next-plausible";

const oswald = Oswald({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
  variable: "--oswald",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--raleway",
});

const thunder = localFont({
  src: "../../public/fonts/Thunder-SemiBoldLC.ttf",
  variable: "--thunder",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fonts & Footers",
    template: "%s - Fonts & Footers",
  },
  description:
    "Fonts & Footers empowers vacation rental owners with direct booking websites, reducing reliance on platforms like Airbnb and VRBO. Elevate your property's online presence with our web development and design expertise!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <PlausibleProvider
          domain='fontsandfooters.com'
          // trackLocalhost={true}
          // enabled={true}
        />
      </head>
      <body
        className={`${oswald.variable} ${raleway.variable} ${thunder.variable}`}
      >
        <Toaster
          position='top-center'
          toastOptions={{
            className: "toastFont",
            duration: 6000,
            style: {
              border: "2px solid #295f4e",
              borderRadius: "50px",
              textAlign: "center",
              whiteSpace: "nowrap",
            },
          }}
        />
        <NoiseBg>
          <Nav />
          {children}
          <CallToAction />
          <FinalCta />
        </NoiseBg>
      </body>
    </html>
  );
}
