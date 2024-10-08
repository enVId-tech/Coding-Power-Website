// DO NOT REMOVE
import "@/styles/globals.scss";

// Next.js imports
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

// Components
import Navbar from "./_components/navbar";

// SCSS
import styles from "@/styles/_components/layout.module.scss";

// Assets
import CPL from "@/public/CodingPowerLogo.webp";

const Montserrat300 = Montserrat({
  weight: '300',
  display: 'swap',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Coding Power | Home",
  description: "The homepage of the Coding Power website.",
  keywords: ["Coding Power", "Coding", "Power", "Java", "Python", "Classes", "Research", "Next Generation"],
  icons: {
    icon: CPL.src,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Montserrat300.className}>
      <body>
        <div className={styles.container}>
          <Navbar activePage="Home" />
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
