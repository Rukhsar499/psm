import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "PSM Skating – Glide, Balance & Discover Pure Freedom",
  description: "Learn, practice, and enjoy skating on smooth, safe surfaces. Perfect for beginners and learners who want confidence and joy on wheels.",
};


export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
        </>
    )
}
