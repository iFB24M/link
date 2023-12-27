import type { ReactElement } from 'react'
import styles from './page.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import type { IPost } from '@/interfaces/IPost.interface'
import { exists } from '../functions/exists'

import { Posts } from '@/components/Posts/Posts.component'
import { Container } from '@/components/Container/Container.component'

const Home = async (): Promise<ReactElement> => {
  const user = await getUser(false)
  let posts: IPost[] = []

  try {
    const subsribedTo: number[] =
      exists(user?.subscribedTo?.split(',').filter(item => exists(item) !== '' && !isNaN(+item)).map(item => +item))
    posts = await getPostsByAuthorId(subsribedTo)
  } catch {
    console.log('user is not logged in')
  }

  return (
    <Container className={styles.posts}>
      {typeof user !== 'undefined'
        ? <Posts posts={posts} />
        : 'Войдите, чтобы просматривать посты своих друзей в ленте'}
    </Container>
  )
}

export default Home
