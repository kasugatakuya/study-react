import classes from './Main.module.css'
import { Links } from "../Links"
import { Headline } from '../Headline'

export function  Main(props: { page: string }) {
  return (
      <main className={classes.main}>
        <Headline
          page={props.page}
          number={1111}
          array={[1, 2, 3]}
          obj={{ foo: "foo", bar: "bar" }}
          boolean
          onClick={() => alert("クリック")}
        >
        <code className={classes.code}>pages/{props.page}.tsx</code>
        </Headline>
        <Links />
      </main>
  )
}