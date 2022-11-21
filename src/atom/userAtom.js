import { atom, selector } from "recoil";
import { v1 } from "uuid";
import { getUserInfo } from "../api/user";

const userAtom = atom({
  key: `userAtom/${v1()}`,
  default: {
    isLogin: false,
    id: "",
    username: "",
    profileImgUrl: "",
  },
});

const userSelector = selector({
  key: `userSelector/${v1()}`,
  get: async ({ get }) => {
    const response = await getUserInfo();
    if (!response || !response.data) {
      return get(userAtom);
    } else {
      return { ...get(userAtom), ...response.data };
    }
  },
  set: ({ set }, data) => {
    if (data) set(userAtom, data);
  },
});

export { userSelector, userAtom };
