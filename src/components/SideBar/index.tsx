import SocialIcons from "@/components/SocialIcons";
import { TypingEffect } from "@/components/TypingEffect";
import { Button, Card, CardHeader, Divider } from "@heroui/react";
import clsx from "clsx";
import { useAtom } from "jotai";
import { Brain, Code, Heart, HomeIcon, LayoutGrid, Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import { useWindowSize } from "react-use";
import styled from "styled-components";

import NextJSIcon from "./assets/nextjs.svg";
import SidebarBg from "./assets/sidebar-bg.png";
import { Page } from "./models/page.model";
import { sidebarAtom } from "./sidebar.atom";
import Image from "next/image";

const MOBILE_WIDTH_THRESHOLD = 767;
const pages: Page[] = [
  {
    label: "Home",
    path: "/",
    slogan: "Where it begins",
    icon: () => <HomeIcon />
  },
  {
    label: "Work Experience",
    path: "/work-experience",
    slogan: "Shaping real-world impact",
    icon: () => <Code />
  },
  {
    label: "Projects",
    path: "/projects",
    slogan: "Ideas into action",
    icon: () => <LayoutGrid />
  },
  {
    label: "Tech Stack",
    path: "/tech-stack",
    slogan: "The foundation of innovation",
    icon: () => <Brain />
  }
]

const SidebarWrapper = styled.div`
  min-width: 300px;
  z-index: 1000;

  &.sidebar__mobile {
    top: 0;
    bottom: 0;
    position: fixed;
    background-color: var(--background);
    transition: margin-left ease 0.1s;
    margin-left: -100%;

    &.sidebar__expanded {
      margin-left: 0;

      &::before {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: calc(100% - 300px);
        backdrop-filter: blur(5px);
        transition: backdrop-filter ease 0.1s;
        z-index: -1;
      }
    }
  }
`

export default function SideBar() {
  const router = useRouter();
  const { width } = useWindowSize();
  const isMobile = width < MOBILE_WIDTH_THRESHOLD;
  const activePath = router.pathname;
  const [sidebar, setSidebar] = useAtom(sidebarAtom);

  return (
    <>
      {isMobile && (
        <Button isIconOnly className="sidebar-toggler rounded-full"
          onPress={() => setSidebar({ expanded: !sidebar.expanded })}>
          {sidebar.expanded ? <X /> : <Menu />}
        </Button>
      )}

      <SidebarWrapper
        className={clsx(
          "overflow-auto shadow-lg fixed left-0 top-0 bottom-0 bg-slate-50 dark:bg-slate-900",
          isMobile ? 'sidebar__mobile' : '',
          sidebar.expanded ? 'sidebar__expanded' : ''
        )}
      >
        <div className="min-w-[300px] h-full">
          <Card
            radius="none"
            className="h-full min-w-[300px]"
            style={{
              backgroundSize: "cover !important",
              backgroundPosition: "bottom",
              background: `url(${SidebarBg.src})`
            }}>
            <CardHeader className="justify-between">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 items-start justify-center">
                  <h1 className="text-2xl uppercase leading-none">Noelito Calma</h1>
                  <h5 className="text-xs uppercase tracking-tight text-default-400 h-4 dark:text-white">
                    <TypingEffect fullText={"<frontend developer />"} />
                  </h5>
                </div>
              </div>
            </CardHeader>

            <Divider />

            <div className="p-2 flex gap-1">
              <SocialIcons />
            </div>

            <Divider />

            <div className="p-3 flex flex-col gap-1 flex-1">
              {pages.map(page => (
                <>
                  <a
                    className={clsx(
                      "hover:bg-slate-200 hover:dark:bg-slate-800 p-2 rounded-md",
                      activePath === page.path ? 'bg-slate-200 dark:bg-slate-800' : ''
                    )}
                    key={page.path} href={page.path}>
                    <div className="flex gap-2 items-center group py-2">
                      <div className="p-1 rounded-md flex items-center">{page.icon()}</div>
                      <div className="flex flex-col">
                        <span className="uppercase font-semibold text-sm">{page.label}</span>
                        <small className="text-default-400 dark:text-slate-400 font-normal text-xs">{page.slogan}</small>
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </div>

            <div className="uppercase text-xs flex items-center justify-center p-3 border-t dark:border-slate-700 font-bold">
              Made with <Heart className="w-4 mx-1" /> using <Image alt="nextjs" width={16} height={16} className="ml-1" src={NextJSIcon.src} />
            </div>
          </Card>
        </div>
      </SidebarWrapper>
    </>
  )
}