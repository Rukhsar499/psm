"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";

  const hideHeaderFooter =
    pathname === "/thank-you" ||
     pathname === "/invoice" ||
    pathname === "/payment-success" ||
    pathname === "/payment-failed";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
