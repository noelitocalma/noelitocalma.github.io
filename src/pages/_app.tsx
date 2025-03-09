import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "./providers";
import { Public_Sans } from "next/font/google";
import ThemeToggler from "@/components/ThemeToggler";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/atoms/theme.atoms";

const PublicSans = Public_Sans({
  variable: '--font-public-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  const theme = useAtomValue(themeAtom);

  return (
    <div className={`${PublicSans.variable} h-full ${theme}`}>
      <Providers>
        <Component {...pageProps} />
        <ThemeToggler />
      </Providers>
    </div>
  )
}
