import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "../components/Footer";
// import  localFont from "@next/font/local";
import { newyork,newyorkLg } from "@/components/Fonts"; 
// import customFont from "@next/font/local"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["400","600"]
});
// const newyork = localFont({
//   src:"./font/NewYork.ttf",
//   variable: "--newyork",
//   weight:"400"
// });




export const metadata = {
  title: "Ace",
  description: "Ace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={(poppins.variable,newyork.variable)} > */}
      <body className={`${poppins.variable} ${newyork.variable} ${newyorkLg.variable}`}>

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
