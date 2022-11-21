import { atom, selector } from "recoil";
import { v1 } from "uuid";

const userAtom = atom({
  key: `userAtom/${v1()}`,
  default: {
    isLogin: false,
    userId: "",
    username: "",
    profileImgUrl: "",
  },
});

const userSelector = selector({
  key: `userSelector/${v1()}`,
  get: ({ get }) => {
    return get(userAtom);
  },
  set: ({ set }, data) => {
    if (data) set(userAtom, { ...userAtom, data });
  },
});

export { userSelector, userAtom };
