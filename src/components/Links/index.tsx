import classes from './Links.module.css'

export function Links({items}: any) {
  return (
        <div className={classes.grid}>
          {items.map((item: any) => {
            return (
              <a key={item.href} href={item.href} className={classes.card}>
                <h2 className={classes.title}>{item.title} &rarr;</h2>
                <p className={classes.description}>{item.description}</p>
              </a>
            )
          })}
        </div>
  )
}
