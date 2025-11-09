import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CD Track Coaching",
  description: "Nürburgring & European Track Day Coaching",
};

const zingRust = localFont({
  src: "/fonts/zing-rust.otf",
  variable: "--font-zing-rust",
  weight: "400",
  style: "normal",
  display: "swap",
});

const zingSans = localFont({
  src: "/fonts/zing-sans-light.otf",
  variable: "--font-zing-sans",
  weight: "400",
  style: "normal",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${zingRust.variable} ${zingSans.variable}`}>
      <body className="bg-brand-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
