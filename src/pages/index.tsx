import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from "../components/Main"
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  const hendleClick = useCallback (() => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    }
  }, [count]);

  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください")
      return;
    }
    setText(e.target.value.trim())
  }, []);

  const handleDisplay = useCallback((e: any) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback((e: any) => {
    setArray((prevArray: string[]) => {
      // if (prevArray.some((item) => item === text)) {
      //   alert("同じ要素が既に存在します");
      //   return;
      // }
      return [...prevArray, text];
    })
  }, [text]);

  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header/>
      {isShow ? <h1>{count}</h1> : null}
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button onClick={hendleClick} >
        ボタン
      </button>
      <button onClick={handleDisplay} >
        {isShow ? "非表示" : "表示"}
      </button>
      <button onClick={handleAdd} >
        追加
      </button>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <Main page="index"/>
      <Footer/>
    </div>
  )
}