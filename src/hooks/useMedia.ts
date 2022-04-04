import useWindowDimensions from "./useWindowDimensions";

const useMedia = (mediaWidth: number) => {
  const { width } = useWindowDimensions();

  return width < mediaWidth;
};

export default useMedia;
