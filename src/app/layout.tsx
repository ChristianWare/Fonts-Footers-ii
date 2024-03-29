import type { Metadata } from "next";
import { Oswald, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NoiseBg from "@/components/NoiseBg/NoiseBg";
import Nav from "@/components/Nav/Nav";
import FinalCta from "@/components/FinalCTA/FinalCTA";
import CallToAction from "@/components/CallToAction/CallToAction";
import { Toaster } from "react-hot-toast";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
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
    </html>
  );
}
