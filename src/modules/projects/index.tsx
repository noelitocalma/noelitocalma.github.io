import Error from "@/components/Error";
import LoadingScreen from "@/components/LoadingScreen";
import { Alert, Card, CardBody, CardHeader, Divider, Kbd } from "@heroui/react";
import { Images, NotebookTabs, Star } from "lucide-react";
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

      <motion.div
        className="max-w-full"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 120,
        }}
        exit={{ opacity: 0 }}
      >
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10" >
          {data?.details?.map((detail, index) => (

            <Card
              key={'detail.' + detail.name} radius="sm" className="shadow dark:bg-slate-900 h-full">
              <CardHeader className="justify-between items-start">
                <div>
                  <h1 className="leading-4 text-lg uppercase font-semibold">{detail.name}</h1>
                  <small style={{ fontSize: 11 }}>{detail.company}</small>
                </div>
                <div className="flex flex-col items-end">
                  <span className="leading-4">[{detail.year}]</span>
                  {detail.moreInfo && (
                    <a href={detail.moreInfo} target="_blank" className="text-default-400">
                      <small style={{ fontSize: 11 }}>more info</small>
                    </a>
                  )}
                </div>
              </CardHeader>

              {detail.image ? (
                <Image
                  alt={detail.name}
                  className="w-full object-contain bg-slate-100 dark:bg-slate-800 h-[140px]"
                  src={detail.image}
                  width={200}
                  height={200}
                />
              ) : (
                <div className="h-[140px] bg-slate-100 flex items-center flex-col dark:bg-slate-800  justify-center text-default-400">
                  <Images className="w-10 h-10 mb-2" />
                  <small className="uppercase">No preview available</small>
                </div>
              )}

              <CardBody>
                <div className="text-default-500 flex-1">
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

                <div className="flex flex-wrap gap-2 max-w-fit">
                  {detail.techStack.map(tech => (
                    <Kbd key={`work.${index}.${tech}`} className="text-xs" >{tech}</Kbd>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </motion.div>
      <Alert color="danger" className="mt-10">
        All projects shown in this portfolio are either personal or completed for clients/companies.
        All intellectual property rights remain with the respective companies.
        My role in these projects was to contribute in the capacity of Frontend Developer.
        If you are interested in the projects shown here, please directly contact the company.
      </Alert>
    </>
  )
}