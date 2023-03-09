import Head from "next/head";
import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "André Koga",
  description: "André Koga's Portfolio - Web designer, software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-dark p-3 font-grotesk">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
