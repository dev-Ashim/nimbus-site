import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Preloader } from "@/components/Preloader";
import { Providers } from "@/components/Providers";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";
import "./pages.css";
import "./loading-effects.css";
import "./mobile.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Nimbus Facility Management | Your Assets, Our Responsibility",
    template: "%s | Nimbus Facility Management",
  },
  description:
    "Nimbus Facility Management delivers integrated hard, soft, security, premium facility services and Jal Jeevan Mission rural water supply across India.",
};

export const viewport: Viewport = {
  themeColor: "#072f4f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body id="top">
        <Providers>
          <Preloader />
          <SmoothScroll />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
