import { atom } from "jotai";

export const sidebarAtom = atom<{
  expanded: boolean
}>({
  expanded: false
});