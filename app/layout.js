import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "🔥 Fireplace Palace",
  description: "The fireplace palace website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header text="🔥Fireplace Palace" />
        {children}
        <Footer />
      </body>
    </html>
  );
}