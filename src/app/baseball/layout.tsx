import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "PSM Baseball – Swing Strong, Run Free, Love the Game",
  description: "Step onto a well-maintained baseball field where every pitch, hit, and run brings excitement, growth, and unforgettable moments.",
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
