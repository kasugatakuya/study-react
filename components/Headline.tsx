import styles from '../styles/Home.module.css'
import { ReactNode } from 'react'

export function Headline(props: { page: string, number: number, array: number[], obj: object, boolean: boolean, onClick: ()=>void, children: ReactNode
}) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>

      <p className={styles.description}>
        Get started by editing{props.children}
      </p>

      <button onClick={props.onClick}>ボタン</button>
    </div>
  )
}