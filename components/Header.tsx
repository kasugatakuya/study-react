import classes from './Header.module.css'
import Link from "next/link"

export function Header() {
  return (
      <header className={classes.header}>
        <Link href="/">
          <span className={classes.anchor}>Index</span>
        </Link>
        <Link href="/about">
          <span className={classes.anchor}>About</span>
        </Link>
      </header>
  );
}
