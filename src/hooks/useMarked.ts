import { useEffect, useState } from 'react'
import { marked } from 'marked'
// const marked =
// import { isPromise } from 'util/types'

export const useMarked = (markdown: string): string => {
	const [html, setHtml] = useState(markdown)

	useEffect(() => {
		const parse = async (): Promise<void> => {
			const md = await marked.parse(markdown)

			if (md !== '') setHtml(md)
		}
		parse().catch((e) => { console.log(e) })
	}, [])

	return html
}
