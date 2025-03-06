import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Noelito Calma | Senior Frontend Developer</title>
        <meta name="description" content="Noelito Calma is a Senior Frontend Developer specializing in creating responsive, high-performance web applications using React, Angular, Tailwind CSS, and Laravel." />
        <meta name="keywords" content="Noelito Calma, Senior Frontend Developer, web development, JavaScript, React, Angular, Tailwind CSS, Laravel, frontend, HTML, CSS, web applications" />
        <meta name="author" content="Noelito Calma" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

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

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
