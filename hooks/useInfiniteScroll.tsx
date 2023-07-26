import { TMessage } from "@/types";
import { useCallback, useEffect, useRef } from "react";

const useInfiniteScroll = (messages: TMessage[], onLoadMore: () => void) => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const prevHeight = useRef<number>(0);

  const handler = useCallback(() => {
    if (containerRef.current == null) return;
    if (window.scrollY <= 50) {
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

  useEffect(() => {
    if (containerRef.current == null) return;
    const diff = containerRef.current.scrollHeight - prevHeight.current;

    containerRef.current.scrollTo({ top: diff, behavior: "smooth" });
    prevHeight.current = containerRef.current.scrollHeight;
    console.log("scroll- ", diff, containerRef.current);
  }, [messages]);

  return { containerRef };
};

export default useInfiniteScroll;
