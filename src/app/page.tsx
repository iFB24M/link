import type { ReactElement, ReactNode } from 'react'
import styles from './page.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import Posts from '@/components/Posts/Posts.component'
import Post from '@/components/Posts/Post/Post.component'
import Container from '@/components/Container/Container.component'

const Home = async (): Promise<ReactElement> => {
  const user = await getUser()
  const subsribedTo: number[] =
    user?.subscribedTo?.split(',').filter(item => item && !isNaN(+item)).map(item => +item!)!

  const posts = await getPostsByAuthorId(subsribedTo)

  return (
    <Container className={styles.posts}>

      {posts.length ? posts.map((post) => <Post authorId={post?.authorId!} content={post.content} />).reverse() : 'Похоже, вы ни на кого не подписаны :('}
      <a href="/profile">Перейти в профиль</a>
    </Container>
  )
}

export default Home
