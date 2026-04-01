"use client";

import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";

const Navigation = dynamic(
  () => import("@/components/Navigation").then((m) => m.Navigation),
  { ssr: false }
);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
