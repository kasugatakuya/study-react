import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from "../components/Main"
import { Header } from '../components/Header'
import { useCounter } from '../hooks/useCounter'
import { useInputArray } from "../hooks/useInputArray"
import { useBgLightBlue } from '../hooks/useBgLightBlue'

export default function Home() {
  const { count, isShow, hendleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header/>


      {isShow ? <h1>{count}</h1> : null}
      <button onClick={hendleClick} >ボタン</button>
      <button onClick={handleDisplay} >{isShow ? "非表示" : "表示"}</button>


      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd} >追加</button>
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