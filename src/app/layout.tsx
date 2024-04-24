import type { Metadata } from "next";
import { Oswald, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NoiseBg from "@/components/NoiseBg/NoiseBg";
import Nav from "@/components/Nav/Nav";
import FinalCta from "@/components/FinalCTA/FinalCTA";
import CallToAction from "@/components/CallToAction/CallToAction";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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

const adedisplay = localFont({
  src: "../../public/fonts/adedisplay.otf",
  variable: "--adedisplay",
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
        <Script
          id='gtm'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PFXJQHBD');`,
          }}
        ></Script>
      </head>
      <body
        className={`${oswald.variable} ${raleway.variable} ${adedisplay.variable}`}
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
      <GoogleAnalytics gaId='G-93GBMVZ4E0' />
    </html>
  );
}
