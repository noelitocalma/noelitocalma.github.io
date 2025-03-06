import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "./providers";
import { Public_Sans } from "next/font/google";

const PublicSans = Public_Sans({
  variable: '--font-public-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={PublicSans.variable + ' h-full'}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </div>
  )
}
