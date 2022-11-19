import LoadingSpinner from '../LoadingSpinner';

const RedirectKakao = () => {
  const { handleKakaoLogin } = useKakoAuth();
  useEffect(() => {
    handleKakaoLogin();
  }, []);

  return <LoadingSpinner />;
};

export default RedirectKakao;
