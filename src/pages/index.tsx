import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from "../components/Main"
import { Header } from '../components/Header'

const Home = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header/>

      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.hendleClick} >ボタン</button>
      <button onClick={props.handleDisplay} >{props.isShow ? "非表示" : "表示"}</button>

      <input type="text" value={props.text} onChange={props.handleChange}/>
      <button onClick={props.handleAdd} >追加</button>
      <ul>
        {props.array.map((item: any, index: number) => {
          return <li key={index}>{item}</li>
        })}
      </ul>

      <Main page="index"/>
      <Footer/>
    </div>
  )
}

export default Home;