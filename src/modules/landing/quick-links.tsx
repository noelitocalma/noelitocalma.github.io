import { personalInfo } from "@/constants/info";
import { routes } from "@/constants/routes";
import { Card, CardHeader, CardFooter, Image, Button, Tooltip } from "@heroui/react";
import { ArrowRight, Copy } from "lucide-react";
import { useRouter } from "next/router";
import { useCopyToClipboard } from "react-use";

const Footer = ({ route }: { route: keyof typeof routes }) => {
  const router = useRouter();

  return (
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <Button
        className="text-tiny ml-auto p-1 w-2 h-6"
        onPress={() => router.push(routes[route])}
        isIconOnly
        radius="full"
        variant="shadow"
        size="sm"
      >
        <ArrowRight className="w-4" />
      </Button>
    </CardFooter>
  )
}

export default function QuickLinks() {
  const [_, copyToClipboard] = useCopyToClipboard();

  return (
    <div className="max-w-[900px] gap-5 grid grid-cols-12 grid-rows-2">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">WHOAMI</p>
          <h4 className="text-white font-medium text-large">Get to know more about me, personally...</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-4.jpeg"
        />

        <Footer route="personal" />
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">work experience</p>
          <h4 className="text-white font-medium text-large">A Journey of Growth and Contribution</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-3.jpeg"
        />

        <Footer route="work" />
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Skills</p>
          <h4 className="text-white font-medium text-large">Tech Expertise for the Modern World</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-2.jpeg"
        />

        <Footer route="skills" />
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Projects</p>
          <h4 className="text-white font-medium text-2xl">Transforming Ideas into Digital Solutions</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://heroui.com/images/card-example-6.jpeg"
        />

        <Footer route="projects" />
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Hire Me</p>
          <h4 className="text-white/90 font-medium text-xl">Let's work together!</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-5.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white uppercase">Ping me...</p>
              <p className="text-tiny text-white cursor-pointer flex items-center gap-1" onClick={() => copyToClipboard(personalInfo.email)}>
                {personalInfo.email}
                <Copy className="w-3" />
              </p>
            </div>
          </div>
          <a href={'mailto:' + personalInfo.email}>
            <Button radius="full" size="sm">
              Send Message
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
