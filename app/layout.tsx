import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "eConnector — Automatic KRA eTIMS compliance for QuickBooks",
  description:
    "eConnector syncs your QuickBooks Online invoices to KRA eTIMS automatically. No manual entry, no workflow changes — every invoice fiscalised with a valid KRA QR code and eTIMS number.",
  openGraph: {
    title: "eConnector — Automatic KRA eTIMS compliance for QuickBooks",
    description:
      "Get eTIMS compliant without changing how you invoice. eConnector bridges QuickBooks Online and KRA eTIMS in the background.",
    type: "website",
    siteName: "eConnector",
    locale: "en_KE",
  },
  twitter: {
    card: "summary",
    title: "eConnector — Automatic KRA eTIMS compliance for QuickBooks",
    description:
      "Get eTIMS compliant without changing how you invoice. Automatic QuickBooks → KRA eTIMS sync.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
