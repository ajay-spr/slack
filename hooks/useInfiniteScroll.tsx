import { AUTO_LOAD_SCROLL_OFFSET } from "@/constants";
import { useCallback, useEffect } from "react";

const useInfiniteScroll = (onLoadMore: () => void) => {
  const handler = useCallback(() => {
    if (window.scrollY <= AUTO_LOAD_SCROLL_OFFSET) {
      onLoadMore();
    }
  }, [onLoadMore]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, [handler]);
};

export default useInfiniteScroll;
