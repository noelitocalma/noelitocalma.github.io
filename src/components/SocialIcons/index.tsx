import { SquareArrowOutUpRight } from "lucide-react";
import GithubIcon from "./assets/github.png";
import EmailIcon from "./assets/gmail.png";
import LinkedInIcon from "./assets/linkedin.png";
import { Social } from "./models/social.model";
import Image from "next/image";

const socials: Social[] = [
  {
    link: "https://www.linkedin.com/in/noelitocalma",
    label: "linkedin",
    icon: LinkedInIcon.src
  },
  {
    link: "https://github.com/noelitocalma",
    icon: GithubIcon.src,
    label: "github"
  },
  {
    link: "mailto:noelitocalma@gmail.com",
    icon: EmailIcon.src,
    label: "email"
  }
]

export default function SocialIcons() {
  return (
    <>
      {socials.map(social => (
        <a
          key={social.label}
          className="flex gap-1 items-center bg-slate-200 dark:bg-slate-800  p-1 rounded-md flex-1 hover:bg-slate-200 dark:hover:bg-slate-700"
          href={social.link} target="_blank">
          <Image className="h-4" src={social.icon} alt="" />
          <h5 className="text-xs flex-1 tracking-tight dark:text-white">{social.label}</h5>
          <SquareArrowOutUpRight className="min-w-3 w-3 h-3 dark:text-white" />
        </a>
      ))}
    </>
  )
}