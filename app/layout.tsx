import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

const description = `${site.name} — Full-stack software engineer based in Los Angeles. JavaScript, TypeScript, React, Next.js, Node.js. Open to roles.`;

const title = `${site.name} · ${site.role}`;

const themeInitScript =
  '(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})()';

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
