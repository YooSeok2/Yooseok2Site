import { useRef } from 'react';

function useMoveScroll():[any, () => void] {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMoveToEelement = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return [ref, onMoveToEelement];
}

export default useMoveScroll;
