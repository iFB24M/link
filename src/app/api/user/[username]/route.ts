/**
 * Эта функция TypeScript извлекает пользователя из базы данных, используя его имя пользователя, и
 * возвращает ответ JSON с информацией о пользователе, исключая его пароль.
 * @param {NextRequest} request - Параметр request — это объект, который представляет входящий
 * HTTP-запрос. Он содержит такую информацию, как метод запроса, заголовки и тело.
 * @param  - Фрагмент кода представляет собой серверную функцию, написанную на TypeScript с
 * использованием платформы Next.js. Он определяет обработчик запроса GET, который извлекает
 * пользователя из базы данных Prisma на основе предоставленного параметра имени пользователя.
 * @returns Код возвращает ответ JSON со следующими свойствами:
 * - ok: логическое значение, указывающее, был ли запрос успешным.
 * - код: целочисленное значение, представляющее код состояния ответа.
 * - сообщение: строковое значение, описывающее результат запроса.
 * - пользователь: объект, содержащий данные пользователя, для свойства пароля которого установлено
 * значение undef, чтобы гарантировать, что он не будет включен в ответ.
 */
import { prisma } from '@/services/Prisma.service'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest, { params }: { params: { username: string } }) => {
	console.log(params.username)

	const user = await prisma.user.findUnique({
		where: { username: params.username }
	})

	const safeUser = { ...user, password: undefined }

	return Response.json({ ok: true, code: 200, message: 'success', user: safeUser })
}
