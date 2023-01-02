import { useCallback, useState } from 'react'

export function useCounter(): { count: number; isShow: boolean; hendleClick: () => void; handleDisplay: (e: any) => void; } {
  const [count, setCount] = useState<number>(1);
  const [isShow, setIsShow] = useState<boolean>(true);

  const hendleClick = useCallback(() => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback((e: any) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, hendleClick, handleDisplay };
}