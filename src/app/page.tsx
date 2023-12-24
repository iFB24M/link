import type { ReactElement } from 'react'
import styles from './page.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import dynamic from 'next/dynamic'
import type { IPost } from '@/interfaces/IPost.interface'
import { exists } from '../functions/exists'

const Posts = dynamic(() => import('@/components/Posts/Posts.component'))
const Container = dynamic(() => import('@/components/Container/Container.component'))

const Home = async (): Promise<ReactElement> => {
  const user = await getUser()
  const subsribedTo: number[] =
    exists(user?.subscribedTo?.split(',').filter(item => exists(item) !== '' && !isNaN(+item)).map(item => +item))

  const posts = await getPostsByAuthorId(subsribedTo)

  return (
    <Container className={styles.posts}>
      <Posts posts={posts as IPost[]} />
    </Container>
  )
}

export default Home
