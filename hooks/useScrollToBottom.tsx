import { useEffect, useRef } from "react";

const useScrollToBottom = () => {
  const elementRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current == null) return;
    elementRef.current.scrollIntoView();
  }, [elementRef]);

  return elementRef;
};

export default useScrollToBottom;
