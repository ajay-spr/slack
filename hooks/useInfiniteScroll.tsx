import { AUTO_LOAD_SCROLL_OFFSET } from "@/constants";
import { useCallback, useEffect, useRef } from "react";

const useInfiniteScroll = (onLoadMore: () => void) => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const prevHeight = useRef<number>(0);

  const handler = useCallback(() => {
    if (containerRef.current == null) return;
    if (window.scrollY <= AUTO_LOAD_SCROLL_OFFSET) {
      onLoadMore();
    }
  }, [onLoadMore]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  useEffect(() => {
    if (containerRef.current == null) return;
    prevHeight.current = containerRef.current.scrollHeight;
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, [containerRef, handler]);

  return { containerRef };
};

export default useInfiniteScroll;
