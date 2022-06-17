import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './FooterBar.module.scss'
import containerStyles from '../../styles/Home.module.css'
import arrowNext from '../../public/assets/shared/icon-next-button.svg'
import arrowPrev from '../../public/assets/shared/icon-back-button.svg'

import { TbPlayerSkipForward, TbPlayerSkipBack } from 'react-icons/tb'


export default function FooterBar({paintingData}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}></div>
        <div className={containerStyles.container}>
          <div className={styles.footerContentContainer}>
            <div>
              <h3 className={styles.paintingName}>{paintingData.name}</h3>
              <h4>{paintingData.artist.name}</h4>
            </div>
            <div>
              <Link href="/starry-night">
                <a>
                  <TbPlayerSkipBack size="2em" color='lightgrey'/>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <TbPlayerSkipForward size="2em" color='black'/>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
