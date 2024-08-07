import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TagLink",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="3YGR93fHYMz4J1LhTJloMC3SZ5YuAUyJ0nbLGik_f9w" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
