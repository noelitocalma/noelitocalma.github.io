import { Theme } from "@/constants/theme";
import { atom } from "jotai";

export const themeAtom = atom<Theme>(Theme.Dark);