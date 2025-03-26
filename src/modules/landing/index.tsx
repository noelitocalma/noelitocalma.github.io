import { themeAtom } from "@/atoms/theme.atoms";
import { TypingEffect } from "@/components/TypingEffect";
import { Divider } from "@heroui/react";
import { useAtomValue } from "jotai";
import { BedSingle, Code, Repeat1, Soup } from "lucide-react";
import * as motion from "motion/react-client";
import { ReactNode } from "react";
import GitHubCalendar from "react-github-calendar";

const HighligtedText = ({ children }: { children: ReactNode }) => <span className="bg-slate-200 dark:bg-slate-800 px-1 font-semibold rounded-sm">{children}</span>
const yearsOfExperience = (new Date()).getFullYear() - 2015;

export default function Landing() {
  const theme = useAtomValue(themeAtom);

  return (
    <motion.div className="max-w-4xl"
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
      <div className="text-4xl sm:text-6xl lg:text-8xl uppercase ">
        <h1>Noelito Calma</h1>
      </div>

      <div className="text-xl sm:text-2xl md:text-3xl min-h-10">
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

      <Divider className="my-3" />

      <div className="overflow-auto">
        <h1 className="mb-3 flex items-center uppercase gap-2 text-xs">
          <span className="flex items-center gap-2">
            Eat <Soup className="w-4" />
          </span>
          <span>|</span>
          <span className="flex items-center gap-2">
            Code <Code className="w-4" />
          </span>
          <span>|</span>
          <span className="flex items-center gap-2">
            Sleep <BedSingle className="w-4" />
          </span>
          <span>|</span>
          <span className="flex items-center gap-2">
            Repeat <Repeat1 className="w-4" />
          </span>
        </h1>
        <Divider className="mb-3" />
        <GitHubCalendar colorScheme={theme ?? 'light'} username="noelitocalma" />
      </div>
    </motion.div>
  )
}