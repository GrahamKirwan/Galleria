import React from 'react'
import styles from '../layout/Navbar.module.scss'
import Image from 'next/image'
import logo from '../../public/assets/shared/logo.svg'
import Link from 'next/link'
 

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Image src={logo} alt="Logo" width={170} height={48}></Image>
        <Link href="/starry-night">Start Slideshow</Link>
    </nav>
  )
}

export default Navbar