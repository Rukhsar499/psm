import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "PSM Sports – Play Cricket & Feel the Joy of Every Shot",
  description: "Experience lively cricket sessions at PSM’s well-kept grounds. Perfect for practice, friendly matches, and growing your love for the game.",
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
