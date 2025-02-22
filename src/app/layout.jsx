
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DDPIL_IITJMU",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="__next">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
