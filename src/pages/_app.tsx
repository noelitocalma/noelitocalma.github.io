import "@/styles/globals.css";

import { themeAtom } from "@/atoms/theme.atoms";
import ThemeToggler from "@/components/ThemeToggler";
import SideBar from "@/components/SideBar";
import { useAtomValue } from "jotai";
import { Raleway } from "next/font/google";
import Head from "next/head";

import Providers from "../providers/providers";

import type { AppProps } from "next/app";
import RandomCircles from "@/components/AnimatedRandomBoxes";
const RalewaySans = Raleway({
  variable: '--font-raleway-sans',
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  const theme = useAtomValue(themeAtom);

  return (
    <>
      <Head>
        <title>Noelito Calma | Senior Frontend Developer</title>
        <meta name="description" content="Noelito Calma is a Senior Frontend Developer specializing in creating responsive, high-performance web applications using React, Angular, Tailwind CSS, and Laravel." />
        <meta name="keywords" content="Noelito Calma, Senior Frontend Developer, web development, JavaScript, React, Angular, Tailwind CSS, Laravel, frontend, HTML, CSS, web applications" />
        <meta name="author" content="Noelito Calma" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content="Noelito Calma | Senior Frontend Developer" />
        <meta property="og:description" content="Noelito Calma is a Senior Frontend Developer with expertise in building scalable and efficient web applications using React, Angular, Tailwind CSS, and Laravel." />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Noelito Calma | Senior Frontend Developer" />
        <meta name="twitter:description" content="Noelito Calma is a Senior Frontend Developer specializing in JavaScript frameworks like React, Angular, and Tailwind CSS, with experience in Laravel." />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="" />
      </Head>
      <div className={`${RalewaySans.variable} min-h-screen overflow-hidden z-10 ${theme}`}>
        <Providers>
          <div className="flex overflow-hidden md:ml-[300px]">
            <SideBar />

            <div className="flex-1 p-5 relative overflow-auto">
              <div className="z-50 relative">
                <Component {...pageProps} />
              </div>
              <RandomCircles />
            </div>
          </div>
          <ThemeToggler />
        </Providers>
      </div>
    </>
  )
}
