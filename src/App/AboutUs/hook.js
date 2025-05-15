import { useGlobalContext } from "../../Context";

export const useAboutUs = () => {
  const { showPopUp } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    showPopUp();
  };

  return [onSubmit];
};
