import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Integrations by Alexandre Farrenq</title>
      </Head>

      <main>
        <div>
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <h3>Alexandre Farrenq</h3>
          </div>

          <nav>
            <span>Menu</span>
            <ul>
              <li>
                <Link href="/agents">Valorant Agents Page</Link>
              </li>
              <li>
                <Link href="/contacts">Contact Management Dashboard</Link>
              </li>
              <li>
                <Link href="/shoe">Shoe Product Page</Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  )
}

export default Home
