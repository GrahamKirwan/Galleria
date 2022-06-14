import React from 'react'
import styles from '../grid/MainGrid.module.scss'

export default function MainGrid({paintings}) {

  return (
    <div className={styles.mainGrid}>
        {paintings.map((item) => {
            return (
                <img src={item.images.gallery}></img>
            )
        })}
    </div>
  )
}
