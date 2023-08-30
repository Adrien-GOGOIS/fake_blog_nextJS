import React from 'react'
import { Inter } from 'next/font/google'
import styles from './Blog.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
	<div className={`${ styles.main } ${ inter.className }`}>
		<h1>LE BLOG</h1>
		<Link href={`/blog/Fake Article`}>The first fake article of this fake blog --{'>'} </Link>
	</div>
  )
}
