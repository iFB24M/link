import type { ReactNode } from 'react'
import styles from './page.module.scss'

const Home = (): ReactNode => {
  return (
    <main className={styles.main}>
      Привт!
    </main>
  )
}

export default Home
