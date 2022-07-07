import { useRef, useCallback } from 'react';

function useMoveScroll():[any, () => void] {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMoveToEelement = useCallback(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, []);

  return [ref, onMoveToEelement];
}

export default useMoveScroll;
