'use client'

import type { ReactNode } from 'react'

const Error = (e: any): ReactNode => {
	console.log(e)

	return (
		<div>Ошибка. Подробная информация выведена в консоль. Пожалуйста, сообщите об ошибке здесь: <a href="https://github.com/iFB24M/link/issues">https://github.com/iFB24M/link/issues</a>. Если ошибка срочная (например, не работает весь сайт), добавьте метку &quot;Срочное&quot;. Мы разбереся как можно быстрее</div>
	)
}

export default Error
