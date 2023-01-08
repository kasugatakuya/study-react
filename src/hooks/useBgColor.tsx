import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react'

export const useBgColor = (): void => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
    // return router.pathname === "/" ? "lightblue" : "beige"
  }, [router.pathname])

  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = bgColor;
    // アンマウント時
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
}