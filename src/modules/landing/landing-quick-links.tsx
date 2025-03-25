import { routes } from "@/constants/routes";
import { Button, Card, CardFooter, CardHeader, Image } from "@heroui/react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import projectThumbnail from "./assets/projects.jpg";
import techStackThumbnail from "./assets/tech-stack.jpg";
import whoamiThumbnail from "./assets/whoami.jpg";
import workExpThumbnail from "./assets/work-experience.jpg";

export default function LandingQuickLinks() {
  const router = useRouter();
  const CardBaseWrapper = ({
    route,
    title,
    subtitle,
    image,
    credit = <></>,
    className = "col-span-12 sm:col-span-4 h-[300px]"
  }: {
    route: keyof typeof routes,
    title: string,
    subtitle: string,
    image: string,
    credit?: ReactNode,
    className?: string;
  }) => (
    <Card className={clsx(className, " h-[300px] group cursor-pointer transition")}>
      <CardHeader
        onClick={() => router.push(routes[route])}
        className="absolute z-20 top-1 flex-col !items-start ">
        <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
        <h4 className="text-white font-medium text-large">{subtitle}</h4>
      </CardHeader>

      <div
        onClick={() => router.push(routes[route])}
        className="bg-black/40 absolute top-0 bottom-0 z-10 w-full h-full"
      />

      <Image
        removeWrapper
        alt={subtitle}
        className="z-0 w-full h-full object-cover transition-all ease-in group-hover:blur-md"
        src={image}
      />

      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <>{credit}</>

        <Button
          onPress={() => router.push(routes[route])}
          isIconOnly
          className="text-tiny ml-auto bg-gray-600 text-white rounded-md flex items-center p-1 w-6 h-6 group-hover:scale-110"
        >
          <ArrowRight className="w-4" />
        </Button>
      </CardFooter>
    </Card>
  )

  return (
    <div className="max-w-[900px] gap-5 grid grid-cols-12 grid-rows-2">
      <CardBaseWrapper
        title="whoami"
        subtitle="Get to know more about me, personally..."
        image={whoamiThumbnail.src}
        className="col-span-12 sm:col-span-8"
        credit={
          <small className="text-white">
            Photo by <a href="https://unsplash.com/@lucabravo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luca Bravo</a> on <a href="https://unsplash.com/photos/apple-macbook-beside-computer-mouse-on-table-9l_326FISzk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </small>
        }
        route="personal"
      />

      <CardBaseWrapper
        title="work experience"
        subtitle="A Journey of Growth and Contribution"
        image={workExpThumbnail.src}
        className="col-span-12 sm:col-span-4"
        credit={
          <small className="text-white">
            Photo by <a href="https://unsplash.com/@marvelous?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marvin Meyer</a> on <a href="https://unsplash.com/photos/people-sitting-down-near-table-with-assorted-laptop-computers-SYTO3xs06fU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </small>
        }
        route="work"
      />

      <CardBaseWrapper
        title="tech stack"
        subtitle="Tech Expertise for the Modern World"
        image={techStackThumbnail.src}
        className="col-span-12 sm:col-span-4"
        credit={
          <small className="text-white">
            Photo by <a href="https://unsplash.com/@florianolv?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Florian Olivo</a> on <a href="https://unsplash.com/photos/lines-of-html-codes-4hbJ-eymZ1o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </small>
        }
        route="tech-stack"
      />

      <CardBaseWrapper
        title="projects"
        subtitle="Transforming Ideas into Digital Solutions"
        className="col-span-12 sm:col-span-8"
        image={projectThumbnail.src}
        credit={
          <small className="text-white">
            Photo by <a href="https://unsplash.com/@edenconstantin0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eden Constantino</a> on <a href="https://unsplash.com/photos/person-holding-purple-and-white-card-OXmym9cuaEY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </small>
        }
        route="projects"
      />
    </div>
  );
}
