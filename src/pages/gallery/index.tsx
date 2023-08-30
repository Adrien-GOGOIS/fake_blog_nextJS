import React from 'react'
import { Inter } from 'next/font/google'
import styles from './Gallery.module.css'
import Image from 'next/image'
import pickle from '../../../public/assets/pickle.png'

const inter = Inter({ subsets: ['latin'] })

export default function Gallery() {
  return (
	<div className={`${ styles.main } ${ inter.className }`}>
		<h1>Gallery</h1>
		<Image 
			layout='responsive' 
			src={pickle}
			placeholder='blur'
			width='16'
			height='9'
			alt="rick_and_morty"
		/>
		{/* <img src='/assets/pickle.png' alt="rick_and_morty" /> */}
	</div>
  )
}
