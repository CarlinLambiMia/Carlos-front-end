//import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header"

export const metadata = {
  title: "Minha primeira aplicação",
  description: "Aplicação de front-end II",
  charset:'utf-8',
  author:'Carlos Eduardo',
  keywords:'Html, Css, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
