import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Contact, Footer, Header, Hero, Portfolio, Product } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Product/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}