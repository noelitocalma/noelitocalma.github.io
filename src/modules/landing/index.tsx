import SocialIcons from "@/components/SocialIcons";
import { TypingEffect } from "@/components/TypingEffect";
import * as motion from "motion/react-client";
import { ReactNode } from "react";

const HighligtedText = ({ children }: { children: ReactNode }) => <span className="bg-slate-200 dark:bg-slate-800 px-1 font-semibold rounded-sm">{children}</span>
const yearsOfExperience = (new Date()).getFullYear() - 2015;

export default function Landing() {
  return (
    <motion.div className="max-w-5xl"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: {
          type: "spring",
          visualDuration: 0.4,
          bounce: 0.5
        },
      }}
    >
      <div className="text-4xl sm:text-6xl lg:text-8xl font-bold uppercase">
        <h1>Noelito Calma</h1>
      </div>

      <div className="text-xl sm:text-2xl md:text-3xl font-bold min-h-10">
        <TypingEffect fullText={"<frontend developer />"} />
      </div>

      <div className="text-wrap whitespace-pre-wrap mt-10 flex flex-col gap-3">
        <p>Hello, I&apos;m Noelito from the Philippines, a seasoned front-end developer with almost {yearsOfExperience} years of experience creating everything from small-scale projects to large, complex enterprise applications. I hold a Bachelor&apos;s degree in Information Technology.</p>
        <p>My expertise lies in using <HighligtedText>Angular</HighligtedText> and <HighligtedText>React/NextJS</HighligtedText> to build dynamic, user-friendly interfaces. I&apos;m also highly proficient with modern styling frameworks like TailwindCSS, Bootstrap, shadcn/ui, HeroUI Ant Design, and Material UI, which allow me to create responsive and aesthetically pleasing designs.</p>
        <p>Additionally, I have a background in backend development with <HighligtedText>Node.js</HighligtedText> and <HighligtedText>PHP/Laravel</HighligtedText>, enabling me to contribute to full-stack projects when needed.</p>
        <p>Over the years, I&apos;ve worked across various industries, including e-commerce, healthcare, insurance, and manufacturing, which has broadened my understanding of different business needs and technical challenges.</p>
        <p>I thrive in both independent and collaborative environments, and I&apos;m always eager to take on new challenges and expand my skill set.
          I&apos;m passionate about continuous learning and am excited to explore new industries and technologies to further grow in my career.</p>
      </div>

      <div className="mt-5 py-2 flex gap-2 justify-between w-72">
        <SocialIcons />
      </div>
    </motion.div>
  )
}