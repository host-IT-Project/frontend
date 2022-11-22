import { v1 } from "uuid";
import { atom } from "recoil";

export const loadingAtom = atom({
  key: `loadingAtom/${v1()}`,
  default: {
    loading: false,
  },
});
