import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvestIntro",
  description: "Capsules d'éducation financière",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
