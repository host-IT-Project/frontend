const checkTime = (now) => {
  const limitTime = new Date(2022, 10, 23, 11);

  if (now > limitTime) {
    return false;
  } else {
    return true;
  }
};

export default checkTime;
