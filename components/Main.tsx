import styles from '../styles/Home.module.css'
import { Links } from "../components/Links"
import { Headline } from '../components/Headline'

export function  Main(props: { page: string }) {
  return (
      <main className={styles.main}>
        <Headline
          page={props.page}
          number={1111}
          array={[1, 2, 3]}
          obj={{ foo: "foo", bar: "bar" }}
          boolean
          onClick={() => alert("クリック")}
        >
        <code className={styles.code}>pages/{props.page}.tsx</code>
        </Headline>
        <Links/>
      </main>
  )
}