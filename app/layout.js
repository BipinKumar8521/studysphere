import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

import "@stream-io/video-react-sdk/dist/css/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StudySphere",
  description:
    "studySphere is a platform for students and teachers to connect and learn together",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          {/* <ClerkProvider>
            <StreamVideoProvider>{children}</StreamVideoProvider>
          </ClerkProvider> */}
         
          <ClerkProvider>
            {children}
            </ClerkProvider>
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
