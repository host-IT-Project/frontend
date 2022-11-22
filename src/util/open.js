/**
 * 11월 23일 이후 이용 가능
 */
export const isAvailable = () => {
  const now = new Date();
  if (now.getMonth() >= 10 && now.getDate() >= 24 && now.getHours() >= 6) {
    return true;
  } else {
    return false;
  }
};
