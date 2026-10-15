import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { UserInterface } from "@/types";

const isLoggedInAtom = atomWithStorage<boolean>("isLoggedIn", false);

const userAtom = atom<UserInterface | null>(null);

export const webAtoms = {
  isLoggedInAtom: isLoggedInAtom,
  userAtom: userAtom,
};
