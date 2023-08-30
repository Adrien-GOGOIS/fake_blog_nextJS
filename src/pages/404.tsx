import React from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function NotFound() {
  return (
	<h1 className={ `${ styles.main } ${ inter.className }` }>NOT FOUND SORRY</h1>
  )
}
