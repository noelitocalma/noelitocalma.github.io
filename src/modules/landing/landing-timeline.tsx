"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const data = [{
  "position": "Asst. Manager | Frontend Development",
  "date": "Feb 14, 2022, - Present",
  "company": "Suntex Pte. Ltd",
  "location": "Phnom Penh, Cambodia",
  "tasks": [
    "Develops and maintains web applications for the company using Angular / React (NextJS - Typescript)",
    "Help team members/colleagues on the requirements",
    "Overseeing the junior developers on their tasks and guiding them if they are having difficulties"
  ]
},
{
  "position": "Senior Frontend Developer",
  "date": "July 01, 2021 - February 18, 2022",
  "company": "Allianz Technology (Thailand) Co., Ltd.",
  "location": "Bangkok, Thailand",
  "tasks": [
    "Develops web application for the company using Angular",
    "Help team members/colleagues on the requirements",
    "Guide other members of the team if they’re having difficulties on the requirements/coding",
    "Code Reviewer on the PRs"
  ]
},
{
  "position": "Web Developer Section Head",
  "date": "Aug 01, 2019 - June 12, 2021",
  "company": "Suntex Pte. Ltd",
  "location": "Phnom Penh, Cambodia",
  "tasks": [
    "Develops web and mobile applications for the company using Angular and Ionic/Capactior",
    "Daily user support for the applications that we developed",
    "Shares ideas on how to improve/enhance the systems/applications",
    "Help team members/colleagues on the requirements",
    "Guide other members of the team if they’re having difficulties on the requirements/coding"
  ]
},
{
  "position": "Web Developer Section Head",
  "date": "November 16, 2017 - July 31, 2019",
  "company": "Luen Thai Macao Commercial Offshore Company Limited (Philippines Branch)",
  "location": "Clark, Pampanga, Philippines",
  "tasks": [
    "Develops web and mobile applications for the company using Angular and Ionic",
    "Daily user support for the applications that we developed",
    "Shares ideas on how to improve/enhance the systems/applications",
    "Help team members/colleagues on the requirements",
    "Guide other members of the team if they’re having difficulties on the requirements/coding"
  ]
},
{
  "position": "Frontend Developer",
  "date": "March 2017 - November 2017",
  "company": "Freelance",
  "location": "Texas, USA",
  "tasks": [
    "Develops web applications / mobile apps (android using Ionic Framework)",
    "Act as a team leader on the project",
    "Guide team members on the requirements",
    "Helps the product owner on the ideas on how to improve the system/application"
  ]
},
{
  "position": "Frontend Developer",
  "date": "April 13, 2015 - November 10, 2017",
  "company": "TORO.IO",
  "location": "Clark, Pampanga, Philippines",
  "tasks": [
    "Develops/maintain company website",
    "Enhance existing company’s e-commerce websites",
    "Build web applications in ​AngularJS",
    "OJT Supervisor (in-charge on their tasks and projects) / guide new team members",
    "Prepares exam/problem sets for school hackathons for the frontend category sponsored by the company",
    "Collaborate with the backend developers to develop an awesome applications and to resolve issues easily if there is."
  ]
},
{
  "position": "Frontend Developer (Intern)",
  "date": "November 10, 2014 - February 06, 2015",
  "company": "TORO.IO",
  "location": "Clark, Pampanga, Philippines",
  "tasks": [
    "Develops e-commerce websites using the company’s own CMS platform"
  ]
}
]

export const LandingTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.date}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.company}
              </h3>
              {item.tasks.join("\n")}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
