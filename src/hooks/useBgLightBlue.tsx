import { useEffect } from 'react'

export function useBgLightBlue(): void {
  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
}