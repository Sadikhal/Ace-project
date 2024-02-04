import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ace",
  description: "Ace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <ThemeProvider
     
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
           
            
          >
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
          </body>  
    </html>
  );
}
