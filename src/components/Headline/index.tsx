import classes from './Headline.module.css'
import { ReactNode } from 'react'

export const Headline = (props: { page: string, number: number, array: number[], obj: object, handleReduce: any, boolean: boolean,  children: ReactNode
}) => {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>

      <p className={classes.description}>
        アイテム数は{props.children}個です。
      </p>

      <button onClick={props.handleReduce}>減らす</button>
    </div>
  )
}