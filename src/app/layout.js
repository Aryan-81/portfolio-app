
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
