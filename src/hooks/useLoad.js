import React, { useState } from "react";

const useLoad = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleIsLoading = (boolean) => setIsLoading(boolean);
  return [isLoading, handleIsLoading];
};

export default useLoad;
