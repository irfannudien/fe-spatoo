import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "ShoeShop",
  description: "Landing page for ShoeShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
