import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Vocabulary } from '@/types/vocabulary.type';

const inter = Inter({ subsets: ['latin'] })

interface Props {
	array: Vocabulary[]
}

export default function Home(props: Props) {
	console.log(props.array);	
	return (
		<>
			<Head>
				<title>My Fake Blog</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={ `${ styles.main } ${ inter.className }` }>
				<h1>WELCOME TO MY FAKE BLOG</h1>
			</main>
		</>
	)
}

// Pour les données statiques :
export async function getStaticProps() {
	const data = await import('../../data/vocabulary.json')
	const array = data.vocabulary

	return { props: { array } }
}


