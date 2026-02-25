/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Providers = dynamic(
  () => import("@/components/providers"),
  { ssr: false }
);

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jack's Portfolio",
  description:
    "Hi, I'm a full-stack web developer experienced in building responsive, high-performance web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/image/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
