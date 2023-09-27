import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pelusa",
  description: "Predictive Engine for Legitimate & Unverified Site Assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center">
                {children}
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
