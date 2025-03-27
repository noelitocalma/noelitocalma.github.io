import Error from "@/components/Error";
import LoadingScreen from "@/components/LoadingScreen";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Kbd } from "@heroui/react";
import { AtSign, Calendar, Link, MapPin, NotebookTabs, Star } from "lucide-react";
import * as motion from "motion/react-client";

import useProjects from "./hooks/use-projects";
import Image from "next/image";

export default function Projects() {
  const { data, error, loading } = useProjects();

  if (loading) {
    return <LoadingScreen />
  }

  if (error) {
    return <Error />
  }

  return (
    <>
      <h1 className="text-4xl">{data?.title}</h1>
      <h3>{data?.subtitle}</h3>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {data?.details?.map((detail, index) => (
          <motion.div
            className="max-w-full"
            key={`work.${index}`}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              type: 'spring',
              stiffness: 120,
            }}
            style={{
              zIndex: data?.details?.length - index
            }}
            exit={{ opacity: 0 }}
          >
            <Card radius="sm" className="shadow dark:bg-slate-900 h-full">
              <CardHeader className="justify-between">
                <h1 className="text-lg uppercase font-semibold">{detail.name}</h1>
                <span>[{detail.year}]</span>
              </CardHeader>

              <Image
                alt={detail.name}
                className="w-full object-cover h-[140px]"
                src="https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                height={200}
              />

              <CardBody>
                <div className="text-default-500">
                  <p className="text-sm flex items-center gap-2">
                    <NotebookTabs className="w-4 min-w-4" />
                    {detail.description}
                  </p>

                  <Divider className="my-2" />

                  <ul className="flex flex-col gap-1">
                    {detail.contributions.map(item => (
                      <li key={`work.${index}.${item}`} className="text-sm flex items-start gap-2">
                        <Star className="min-w-3 max-w-3 h-3 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Divider className="my-2" />

                <div className="flex flex-wrap gap-2">
                  {detail.techStack.map(tech => (<Kbd
                    key={`work.${index}.${tech}`}
                    className="text-xs"
                  >
                    {tech}
                  </Kbd>
                  ))}
                </div>
              </CardBody>

              <CardFooter className="">
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Notify me
                </Button>
              </CardFooter>

            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}