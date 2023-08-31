import React from 'react'
import { Inter } from 'next/font/google'
import styles from './Insult.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Insult(props: any) {
	return (
		<div className={`${ styles.main } ${ inter.className }`}>
			<h1>Insult of the day : </h1>
			<div>
				<h3>&ldquo; {props.data.insult} &rdquo;</h3>
				{ props.data.comment.length > 1 ? <p> What&lsquo;s this ?? --{'>'} {props.data.comment}</p> : null}
			</div>
		</div>
	)
}

// Incremental static generation
export async function getStaticProps() {
	const quote = await fetch ('https://evilinsult.com/generate_insult.php?lang=fr&type=json');
	const data = await quote.json();

	return { props : { data }, revalidate: 20 } // Ne fetch plus durant 20 secondes
}


