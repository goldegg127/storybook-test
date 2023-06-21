import Link from 'next/link';
import './globals.css'
import layout from './layout.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품 사이트입니다.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={layout.header}>
          <h1><Link href='/'>logo</Link></h1>
          <nav className={layout.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <div className={layout.pageLayout}>{children}</div>
      </body>
    </html>
  )
}
