import type { ReactNode } from 'react'
import styles from './page.module.scss'

const Home = (): ReactNode => {
  return (
    <main className={styles.main}>
      <a href="/profile">Перейти в профиль</a>
    </main>
  )
}

export default Home
