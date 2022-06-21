import React, {useState} from 'react'
import Image from 'next/image'
import styles from '../layout/PaintingInfo.module.scss'
import Link from 'next/link'

import {data} from '../../data/index'


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
          <div style={{width: '30rem', height: '37rem', position: 'relative'}}>
            {/* <Image priority src={"/"+paintingData.images.gallery} layout='fill' objectFit='cover' /> */}
            <Image priority src={data[paintingData.id-1].images.gallery} layout='fill' objectFit='cover' />
          </div>
          <div className={styles.viewImage} onClick={viewImageClickHandler}>
            <TbArrowsMaximize size="1.3rem" color="white" />
            <span>View Image</span>
          </div>
          <div className={styles.artistInfo}>
            <h1>{paintingData.name}</h1>
            <h3>{paintingData.artist.name}</h3>
          </div>
          <div className={styles.artistImage}>
            <div style={{width: '8rem', height: '8rem', position: 'relative'}}>
              {/* <Image src={"/"+paintingData.artist.image} layout='fill' objectFit='cover' alt={paintingData.artist.name} title={paintingData.artist.name} /> */}
              <Image src={data[paintingData.id-1].artist.image} layout='fill' objectFit='cover' alt={paintingData.artist.name} title={paintingData.artist.name} />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <span>{paintingData.year}</span>
          <p>{paintingData.description}</p>
          <Link href={paintingData.source}>
            <a target="_blank">GO TO SOURCE</a>  
          </Link>
        </div>
      </div>

      <div className={styles.overlay} style={{display: overlayVisible ? 'block' : 'none'}} onClick={overlayClickHandler}>
        <div style={{width: '30rem', height: '37rem', position: 'relative'}}>
          <Image priority src={"/"+paintingData.images.gallery} layout='fill' objectFit='cover' />
          <p className={styles.close}>CLOSE</p>
        </div>
      </div>
    </div>
  )
}
