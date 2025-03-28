import Error from "@/components/Error";
import LoadingScreen from "@/components/LoadingScreen";
import { Card, CardBody, Progress } from "@heroui/react";
import * as motion from "motion/react-client";
import StackIcon from "tech-stack-icons";

import useTechStacks from "./hooks/use-tech-stack";
import Image from "next/image";
import styled from "styled-components";

const SVGWrapper = styled.span`
  svg {
    width: 100px;
  }
`

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

      <div className="flex flex-col gap-8 mt-10">
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
            <div className="text-xl uppercase font-bold mb-4">{detail.category}</div>
            <div className="flex flex-wrap gap-8">
              {detail.items.map(item => (
                <Card radius="sm" className="shadow dark:bg-slate-900">
                  <CardBody>
                    {!item.png && !item.svg && (<StackIcon name={item.icon} />)}
                    {item.png && (
                      <div className="h-[100px] flex items-center">
                        <Image alt={item.name} src={item.icon} height={100} width={100} />
                      </div>
                    )}

                    {item.svg && (
                      <div className="h-[100px] flex items-center">
                        <SVGWrapper dangerouslySetInnerHTML={{ __html: item.icon }}></SVGWrapper>
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-3 mb-1 text-default-400">
                      <small>{item.name}</small>
                      <small>{item.level} / 5</small>
                    </div>
                    <Progress size="sm" value={(item.level / 5) * 100} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}