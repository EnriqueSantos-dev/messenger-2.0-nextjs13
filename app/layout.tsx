import "./globals.css";
import { Inter } from "@next/font/google";
import { Header } from "./components/Header";
import { Providers } from "./components/Providers";
import { unstable_getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Providers>
          <Header session={session} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
