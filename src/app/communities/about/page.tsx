import { Markdown } from '@/components/Markdown/Markdown.component'
import type { ReactElement } from 'react'

const About = async (): Promise<ReactElement> => {
	const info = '## Что такое сообщество?\n\nСообщество в NextLink - это блог, посвященный какой - либо тематике.В нем каждый имеет свою роль.Вы можете сделать открытый доступ или доступ по приглашениям.Также вы можете назначать администраторов, которые смогут управлять участниками и создавать посты.\n\nСообщества в NextLink станут доступны в январе 2024'

	return <Markdown>
		{info}
	</Markdown>
}

export default About
