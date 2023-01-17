import useMediaQuery from "react-responsive";

const useIsMobile = () => {
  const MEDIA_QUERY_WIDTH_MOBILE_WIDTH = "max-width: 900px";
  return useMediaQuery({
    query: `(${MEDIA_QUERY_WIDTH_MOBILE_WIDTH})`,
  });
};

export default useIsMobile;
