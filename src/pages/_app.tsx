import "@/styles/globals.css";

import { themeAtom } from "@/atoms/theme.atoms";
import ThemeToggler from "@/components/ThemeToggler";
import SideBar from "@/modules/sidebar";
import { useAtomValue } from "jotai";
import { Public_Sans } from "next/font/google";
import Head from "next/head";

import Providers from "../providers/providers";

import type { AppProps } from "next/app";
const PublicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  const theme = useAtomValue(themeAtom);

  return (
    <>
      <Head>
        <title>Noelito Calma | Senior Frontend Developer</title>
      </Head>
      <div className={`${PublicSans.variable} min-h-screen z-10 ${theme}`}>
        <Providers>
          <div className="flex">
            <SideBar />
            <div className="flex-1">
              <Component {...pageProps} />
            </div>
          </div>
          <ThemeToggler />
        </Providers>
      </div>
    </>
  )
}
