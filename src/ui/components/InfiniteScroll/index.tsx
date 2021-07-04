import { useEffect, useRef } from "react";

import { Container } from "ui/styles/components/infinite-scroll.styles";

type InfiniteScrollProps = {
  onBottomHit: () => void;
  isLoading: boolean;
  hasMoreData: boolean;
  children: React.ReactNode;
};

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false;
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

export function InfiniteScroll({
  onBottomHit,
  isLoading,
  hasMoreData,
  children,
}: InfiniteScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [onBottomHit, isLoading, hasMoreData]);

  return <Container ref={contentRef}>{children}</Container>;
}
