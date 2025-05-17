import { useGlobalContext } from "../../Context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const useProduct = () => {
  const { name } = useParams();
  const { isMockUp, isColor, selectMockUps, showPopUp, colors } =
    useGlobalContext();

  useEffect(() => {
    selectMockUps(name);
  }, [name, selectMockUps]);

  return [isMockUp, isColor, showPopUp, colors];
};
