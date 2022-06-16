import React from 'react'
import styles from '../layout/Navbar.module.scss'
import Image from 'next/image'
import logo from '../../public/assets/shared/logo.svg'
import Link from 'next/link'

 

function Navbar() {

  return (
    <nav className={styles.navbar}>
        <div className={styles.imageContainer}>
          <Image src={logo} alt="Logo" width={170} height={48}></Image>
        </div>

        <Link href='/starry-night'>
          <a>Start Slideshow</a>
        </Link>

        {/* {!ctx.slideshowActive ? (
          <Link href='/starry-night'>
          <a onClick={() => {ctx.updateSlideshowContext(true)}}>Start Slideshow</a>
          
        </Link>
        ) : (
        <Link href="/">
          <a onClick={() => {ctx.updateSlideshowContext(false)}}>Stop Slideshow</a>
          
        </Link>
        )} */}

       
    </nav>
  )
}

export default Navbar