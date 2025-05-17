import data, { ColorsMockUps, MockUps } from "./Data";

import { useState, useCallback } from "react";

export const useGlobalHook = () => {
  const [is] = useState(data);
  const [event, setEvent] = useState(undefined);

  const [colors] = useState(ColorsMockUps);
  const [isColor, setColor] = useState(ColorsMockUps);

  const [mockUps] = useState(MockUps);
  const [isMockUp, setIsMockUp] = useState(undefined);

  const [show, setShow] = useState(false);

  const showPopUp = useCallback(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  const changeEvent = useCallback(
    (name) => {
      const data = is.find((item) => item.clave === name);
      data.length === 0 ? setEvent(undefined) : setEvent(data);
    },
    [event]
  );

  const selectMockUps = useCallback(
    (name) => {
      const match = ColorsMockUps.find((e) => {
        return mockUps.some((item) => `${item.clave}${e}` === name);
      });

      if (!match) {
        setIsMockUp(undefined);
        setColor(undefined);
        return;
      }
      if (match) {
        const result = MockUps.find((item) => `${item.clave}${match}` === name);
        if (result) {
          setIsMockUp(result);
        }
        setColor(match);
      }
    },
    [isColor, isMockUp]
  );

  return [
    is,
    event,
    changeEvent,
    show,
    showPopUp,
    isMockUp,
    mockUps,
    isColor,
    colors,
    selectMockUps,
  ];
};
