import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TanstackProviders from "./providers/TanstackProvider";
import ReduxProvider from "./providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <TanstackProviders>
            <div className="flex flex-col justify-between min-h-screen">
              <Nav />
              <main>
                {children}
              </main>
              <Footer />
            </div>
          </TanstackProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
