import classes from './Headline.module.css'
import { ReactNode } from 'react'

export function Headline(props: { page: string, number: number, array: number[], obj: object, boolean: boolean, onClick: ()=>void, children: ReactNode
}) {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>

      <p className={classes.description}>
        Get started by editing{props.children}
      </p>

      <button onClick={props.onClick}>ボタン</button>
    </div>
  )
}