import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import shoesStyles from '../../styles/Shoes.module.css'
import searchImage from '../../public/assets/shoes/search.png'
import cartImage from '../../public/assets/shoes/cart.png'
import userImage from '../../public/assets/shoes/user.png'
import shoesImage from '../../public/assets/shoes/shoe.png'
import bagImage from '../../public/assets/shoes/bag.png'
import playImage from '../../public/assets/shoes/play.png'


const Shoes: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shoe Product Page</title>
      </Head>

      <div className={shoesStyles.container}>
        <header className={shoesStyles.header}>
          <div>
            <a href="#">
              <h2>
                Zainoo
                <span>&trade;</span>
              </h2>
            </a>
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <Image src={searchImage} alt="Search" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src={cartImage} alt="Cart" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src={userImage} alt="User" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <aside className={shoesStyles.aside}>
          <nav>
            <ul>
              <li>
                <a href="#">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#">
                  Bags
                </a>
              </li>
              <li>
                <a href="#">
                  Accessoires
                  <span>New</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Support
                </a>
              </li>
            </ul>
          </nav>

          <div className={shoesStyles.extra}>
            <span>Extra</span> Foot
            <br />
            <span>Care</span> Tech
          </div>

          <div className={shoesStyles.more}>
            <a href="#">Learn more</a>
          </div>

          <a href="#" className={shoesStyles.scroll}>Scroll down</a>
        </aside>

        <main className={shoesStyles.main}>
          <ul className={shoesStyles.borders}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div>
            The best looks; Top Comfort
            <h1>
              Comfy Maxer
              <span>&#174;</span>
            </h1>
            Our shoes fuse together an insole that cushions every<br />
            move, laces that you’ll never need to tie again, and an<br />
            odor-fighting copper thread lining.<br />

            <button className={`${shoesStyles.btn} ${shoesStyles['btn-c2a']}`}>
              <Image src={bagImage} alt="Shopping bag icon" />
              &nbsp;&nbsp;
              <span>Add To Cart</span>
            </button>
            <button className={shoesStyles.btn}>
              <Image src={playImage} alt="Play icon" />
              &nbsp;&nbsp;
              <span>Watch Intro</span>
            </button>
          </div>

          <span className={shoesStyles.number}>94</span>
          <div className={shoesStyles.shoe}>
            <Image src={shoesImage} alt="Nike shoe" />
          </div>

          <div className={shoesStyles.count}>
            01 / 
            &nbsp;&nbsp;
            04
          </div>
        </main>

        <footer className={shoesStyles.footer}>
          <ul>
            <li>
              <a href="#">FB</a>
            </li>
            <li>
              <a href="#">TW</a>
            </li>
            <li>
              <a href="#">IN</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Manufacturing</a>
            </li>
            <li>
              <a href="#">Packaging</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Shoes
