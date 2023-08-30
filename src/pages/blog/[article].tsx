import { useRouter } from 'next/router'
import React from 'react'

export default function Article() {

	const router = useRouter()

	const handleClick = () => {
		router.push('/')
	}

	return (
		<>
			<div>article: { router.query.article }</div>
			<button onClick={ handleClick }>Return to home</button>
		</>
	)
}
