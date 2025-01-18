import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Traliventa",
  description: "Traliventa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}

        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
