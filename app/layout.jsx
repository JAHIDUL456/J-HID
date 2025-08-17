// app/layout.jsx
import Header from "@/components/Header";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],  // choose your needed weights
});

export const metadata = {
  title: "My App",
  description: "Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en ">
      <body className={jetbrainsMono.className}>
        <Header />
        
        
        {children}</body>
    </html>
  );
}
