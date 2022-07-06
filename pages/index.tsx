import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import 'typeface-martel-sans'
import '@fortawesome/fontawesome-free/css/all.min.css'
import styles from '../styles/Home.module.css'
import avatar from '../public/assets/home/avatar.jpg'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Integrations by Alexandre Farrenq</title>
      </Head>

      <main className={styles.container}>
        <div>
          <div className={styles.profile}>
            <ul className={styles.profile__icons}>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <div className={styles.profile__avatar}>
              <Image
                src={avatar}
                alt="Alexandre Farrenq"
                width={80}
                height={80}
              />
              <h3>
                Alexandre Farrenq<br />
                <span>Front-end Developer</span>
              </h3>
            </div>
          </div>

          <nav className={styles.menu}>
            <span>Menu</span>
            <ul className={styles.menu__items}>
              <li>
                <i className="fa-solid fa-computer-mouse"></i>
                <Link href="/agents">Valorant Agents</Link>
              </li>
              <li>
                <i className="fa-solid fa-address-card"></i>
                <Link href="/contacts">Contact Management</Link>
              </li>
              <li>
                <i className="fas fa-shoe-prints"></i>
                <Link href="/shoe">Shoe Product</Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  )
}

export default Home
