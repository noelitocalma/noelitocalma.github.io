import Error from "@/components/Error";
import LoadingScreen from "@/components/LoadingScreen";
import { Card, CardBody } from "@heroui/react";
import * as motion from "motion/react-client";
import StackIcon from "tech-stack-icons";

import useTechStacks from "./hooks/use-tech-stack";

export default function TechStack() {
  const { data, error, loading } = useTechStacks();

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

      <div className="flex flex-wrap gap-8 mt-10">
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
            <Card radius="sm" className="shadow dark:bg-slate-900">
              <CardBody>
                <StackIcon name={detail.icon} />
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}