// _app.js or _app.tsx
"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import {Toaster} from "react-hot-toast"
import { Provider } from "react-redux";
import { store } from "@/GlobalRedux/store";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body className={inter.className}>
        <Toaster  />
        {children}
      </body>
    </html>
    </Provider>
  );
}
