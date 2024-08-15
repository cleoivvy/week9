import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./about/components/Navbar";
import Footer from "./about/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create a movie app",
  description: "A movie application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="min-h-screen">
          {children}
          </div>
          
          <Footer />
          </body>
    </html>
  );
}
