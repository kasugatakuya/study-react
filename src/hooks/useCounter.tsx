import { useCallback, useState, useMemo } from 'react'

export const useCounter = (): { count: number; doubleCount:number; isShow: boolean; hendleClick: () => void; handleDisplay: (e: any) => void; } => {
  const [count, setCount] = useState<number>(1);
  const [isShow, setIsShow] = useState<boolean>(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const hendleClick = useCallback(() => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback((e: any) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, doubleCount, isShow, hendleClick, handleDisplay };
}