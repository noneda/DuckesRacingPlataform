import { useEffect } from "react";
import { useGlobalContext } from "../../Context";
import { useParams } from "react-router-dom";

export const useSpecific = () => {
  const { name } = useParams();
  const { event, changeEvent, showPopUp } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    showPopUp();
  };

  useEffect(() => {
    changeEvent(name);
  }, [name]);

  return [event, onSubmit];
};
