// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
// import Logo from "./components/Logo";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ard - get your daily dose",
  description: "Real art made by humans",
  openGraph: {
    images: "apple-touch-icon.png",
  },
};
export const viewport = {
  themeColor: "#938d85",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="content">{children}</main>
        <Navigation />
        {/* <Logo /> */}
      </body>
    </html>
  );
}
