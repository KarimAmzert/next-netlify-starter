import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="E2069838 - Karim Amzert - applications web 2" />
        <p className="description">
          Patrick Pierre<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
