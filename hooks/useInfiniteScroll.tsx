import { AUTO_LOAD_SCROLL_OFFSET } from "@/constants";
import { useCallback, useEffect, useRef } from "react";

const useInfiniteScroll = (onLoadMore: () => void) => {
  const lastScrollPosition = useRef(0);

  const isScrollingUpwards = () => {
    return window.scrollY < lastScrollPosition.current;
  };

  const handler = useCallback(() => {
    if (
      window.scrollY <= AUTO_LOAD_SCROLL_OFFSET &&
      window.scrollY >= 20 &&
      isScrollingUpwards()
    ) {
      onLoadMore();
    }
    lastScrollPosition.current = window.scrollY;
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
