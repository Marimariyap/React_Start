import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  // 각 콜백을 저장한다
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // 인터벌을 구성한다
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}