import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from "../components/Main"
import { Header } from '../components/Header'

export default function About({
  doubleCount,
  isShow,
  hendleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd
}: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header/>


      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={hendleClick} >ボタン</button>
      <button onClick={handleDisplay} >{isShow ? "非表示" : "表示"}</button>


      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd} >追加</button>
      <ul>
        {array.map((item: any, index: number) => {
          return <li key={index}>{item}</li>
        })}
      </ul>


      <Main page="about"/>
      <Footer/>
    </div>
  )
}
