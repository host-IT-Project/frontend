import { atom, selector } from 'recoil';
import { v1 } from 'uuid';

const userAtom = atom({
  key: `userAtom/${v1()}`,
  default: {
    isLogin: true,
    userId: 'hoit',
    username: '호잇',
    email: 'hoit@gmail.com',
    profileImageUrl:
      'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    providerType: '',
    roleType: '',
  },
});

const userSelector = selector({
  key: `userSelector/${v1()}`,
  get: ({ get }) => {
    return get(userAtom);
  },
  set: ({ set }) => {
    // 추후 api.getUser(token)의 response로 변경될 예정입니다.
    const tmpUserInfo = {
      userId: 'hoit',
      username: '호잇',
      email: 'hoit@gmail.com',
      profileImageUrl:
        'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
      providerType: '',
      roleType: '',
    };
    set(userAtom, { isLogin: true, ...tmpUserInfo });
  },
});

export { userSelector, userAtom };
