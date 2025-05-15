import { useEffect } from "react";
import { useGlobalContext } from "../../Context";
import { useParams } from "react-router-dom";

export const useSpecific = () => {
  const { name } = useParams();
  const { event, changeEvent } = useGlobalContext();

  useEffect(() => {
    changeEvent(name);
  }, [name]);

  return [event];
};
