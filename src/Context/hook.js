import data from "./Data";

import { useState, useCallBack } from "react";

export const useGlobalHook = () => {
  const [is, set] = useState(data);
  const [event, setEvent] = useState(undefined);

  const [show, setShow] = useState(false);

  const showPopUp = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const changeEvent = (name) => {
    const data = is.filter((item) => item.clave === name);
    data.length === 0 ? setEvent(undefined) : setEvent(data[0]);
  };
  return [is, event, changeEvent, show, showPopUp];
};
