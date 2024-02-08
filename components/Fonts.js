import localFont from "@next/font/local";




const newyork = localFont({
  src:[{ path:"../font/NewYork.ttf"}],
  variable: "--newyork",
  weight:"400"
});



const newyorkLg = localFont({
  src:[{ path:"../font/NewYorkLg.ttf"}],
  variable: "--newyorkLg",
  
});
export {newyork,newyorkLg};
