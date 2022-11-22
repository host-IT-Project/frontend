/**
 *
 * @TODO
 * 이름이 아닌 고유식별자로 변경이 필요합니다.
 */
export const isAdmin = (id) => {
  switch (id) {
    case "김선화":
    case "양성욱":
    case "Hyun":
    case "희":
    case "현지":
      return true;
  }
  return false;
};
