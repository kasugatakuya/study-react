import { useCallback, useState } from 'react';


export function useInputArray(): { text: string; array: string[]; handleChange: (e: any) => void; handleAdd: (e: any) => void; } {
  const [text, setText] = useState<string>('');
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback((e: any) => {
    setArray((prevArray: string[]) => {
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
}
