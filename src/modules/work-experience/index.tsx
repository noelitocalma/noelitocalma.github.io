import Error from "@/components/Error";
import LoadingScreen from "@/components/LoadingScreen";
import { Card, CardBody, Divider, Kbd } from "@heroui/react";
import { AtSign, Calendar, MapPin, Star } from "lucide-react";
import * as motion from "motion/react-client";

import useWorkExperience from "./hooks/use-work-experience";

export default function WorkExperiencePage() {
  const { data, error, loading } = useWorkExperience();

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

      <div className="flex flex-col gap-8 mt-10">
        {data?.details?.map((detail, index) => (
          <motion.div
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
            <Card radius="sm" className="shadow dark:bg-slate-900">
              <CardBody>
                <h1 className="text-lg uppercase font-semibold mb-2 ">{detail.position}</h1>
                <div className="text-default-500">
                  <p className="text-sm flex items-center gap-2">
                    <AtSign className="w-4" />
                    {detail.company}
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <Calendar className="w-4" />
                    {detail.duration}
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <MapPin className="w-4" />
                    {detail.location}
                  </p>

                  <Divider className="my-2" />

                  <ul className="flex flex-col gap-3">
                    {detail.responsibilities.map(item => (
                      <li key={`work.${index}.${item}`} className="text-sm flex items-start gap-2">
                        <Star className="min-w-3 max-w-3 h-3 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Divider className="my-2" />

                <div className="flex gap-2">
                  {detail.techStack.map(tech => (<Kbd
                    key={`work.${index}.${tech}`}
                    className="text-xs"
                  >
                    {tech}
                  </Kbd>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}