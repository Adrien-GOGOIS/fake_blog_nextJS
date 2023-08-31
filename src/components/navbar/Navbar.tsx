import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
	<nav className={`${ styles.navbar } ${ inter.className }`}>
		<Link href='/'>Home</Link>
		<Link href='/blog'>Blog</Link>
		<Link href='/gallery'>Gallery</Link>
		<Link href='/insult'>French art of speach</Link>
	</nav>
  )
}
