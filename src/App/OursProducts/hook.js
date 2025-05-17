import { useGlobalContext } from "../../Context";

export const useOursProducts = () => {
  const { mockUps, colors } = useGlobalContext();
  return [mockUps, colors];
};
