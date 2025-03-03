import type { Metadata } from "next";
import "./globals.css";

// Components
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

// To do: Add OG metadata - LM
export const metadata: Metadata = {
  title: "Stupor Bowl Minneapolis",
  description: "The longest running messenger race in North America.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const htmlAttributes: { [key: string]: string } = {};

  // Prevents hydration error for development in Brave.
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "dev") {
    htmlAttributes["data-google-analytics-opt-out"] = "";
  }

  return (
    <html lang="en" {...htmlAttributes}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html >
  );
}
