import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ui/ToastContainer";

export const metadata: Metadata = {
  title: "BLAZR Fast Food Karachi | Burgers, Pizza, Broast & More",
  description:
    "Order delicious burgers, pizza, broast, sandwiches, chicken and deals from BLAZR Fast Food in Karachi. Fresh, crispy and packed with flavour.",
  keywords:
    "BLAZR fast food Karachi, burgers Karachi, pizza Karachi, broast Karachi, online food order Karachi, best fast food Karachi",
  openGraph: {
    title: "BLAZR Fast Food Karachi | Flavour That Hits Hard",
    description:
      "Bold flavours, crispy bites and Karachi's favourite fast food — delivered hot and fresh.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-blazr-dark text-blazr-light antialiased">
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
              <ToastContainer />
            </WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
