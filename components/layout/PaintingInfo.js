import React, {useState} from 'react'
import Image from 'next/image'
import styles from '../layout/PaintingInfo.module.scss'
import Link from 'next/link'

import {data} from '../../data/index'

import { framer_year, framer_desc, framer_image, framer_name, framer_name_heading } from './framer'
import { motion } from 'framer-motion'


import { TbArrowsMaximize } from "react-icons/tb";


export default function PaintingInfo({paintingData}) {

  const [overlayVisible, setOverlayVisible] = useState(false);

  function viewImageClickHandler() {
    setOverlayVisible(true)
  }
  
  function overlayClickHandler() {
    setOverlayVisible(false)
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {/* <div style={{width: '30rem', height: '37rem', position: 'relative'}}> */}
          <motion.div {...framer_image} className={styles.mainImageContainer}>
            <Image priority src={paintingData.images.gallery} layout='fill' objectFit='cover'  placeholder="blur" />
            {/* <Image priority src={data[paintingData.id-1].images.gallery} layout='fill' objectFit='cover' /> */}
          </motion.div>
          <motion.div {...framer_image} className={styles.viewImage} onClick={viewImageClickHandler}>
            <TbArrowsMaximize size="1.3rem" color="white" />
            <span>View Image</span>
          </motion.div>
          <motion.div {...framer_name} className={styles.artistInfo}>
            <motion.h1 {...framer_name_heading}>{paintingData.name}</motion.h1>
            <motion.h3 {...framer_name_heading}>{paintingData.artist.name}</motion.h3>
          </motion.div>
          <div className={styles.artistImage}>
            {/* <div style={{width: '8rem', height: '8rem', position: 'relative'}}> */}
            <motion.div {...framer_image} className={styles.artistImageContainer}>
              <Image src={paintingData.artist.image} layout='fill' objectFit='cover' alt={paintingData.artist.name} title={paintingData.artist.name} />
              {/* <Image src={data[paintingData.id-1].artist.image} layout='fill' objectFit='cover' alt={paintingData.artist.name} title={paintingData.artist.name} /> */}
            </motion.div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <motion.span {...framer_year}>{paintingData.year}</motion.span>
          <motion.div {...framer_desc}>
          <p>{paintingData.description}</p>
          <Link href={paintingData.source}>
            <a {...framer_desc} target="_blank">GO TO SOURCE</a>  
          </Link>
          </motion.div>
        </div>
      </div>

      <div className={styles.overlay} style={{display: overlayVisible ? 'block' : 'none'}} onClick={overlayClickHandler}>
        <div style={{width: '30rem', height: '37rem', position: 'relative'}}>
          <Image priority src={paintingData.images.gallery} layout='fill' objectFit='cover' placeholder="blur" />
          <p className={styles.close}>CLOSE</p>
        </div>
      </div>
    </div>
  )
}
