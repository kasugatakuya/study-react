import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from "../components/Main"
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [count, setCount] = useState(1);

  const hendleClick = useCallback (() => {
    if (count < 10) {
      setCount(count => count + 1);
    }
  }, [count]);
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
      <p>{count}</p>
      <button onClick={hendleClick} >
        ボタン
      </button>
      <Main page="index"/>
      <Footer/>
    </div>
  )
}