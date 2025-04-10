import "./globals.css";
import { Montserrat, Poppins, Inter } from "next/font/google";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

// Load all fonts with `variable` to use with Tailwind
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Traliventa",
  description: "Traliventa",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body className="font-sans">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
