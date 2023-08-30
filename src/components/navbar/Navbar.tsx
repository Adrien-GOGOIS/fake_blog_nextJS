import Link from 'next/link'
import React from 'react'
import styles from '@/styles/navbar.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
	<nav className={`${ styles.navbar } ${ inter.className }`}>
		<Link href='/' className={ `${styles.link}` }>Home</Link>
		<Link href='/blog/article'>Blog</Link>
		<Link href='/contact'>Contact</Link>
	</nav>
  )
}
