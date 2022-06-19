import React from 'react'
import Image from 'next/image'
import styles from '../layout/PaintingInfo.module.scss'

export default function PaintingInfo({paintingData}) {

  console.log(paintingData)
  return (
    <div className={styles.container}>


    
      <div className={styles.leftContainer}>
        <div style={{width: '30rem', height: '37rem', position: 'relative'}}>
          <Image src={"/"+paintingData.images.gallery} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.artistInfo}>
          <h1>{paintingData.name}</h1>
          <h3>{paintingData.artist.name}</h3>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <p>Lorem ipsum</p>
      </div>
    
    </div>
  )
}
