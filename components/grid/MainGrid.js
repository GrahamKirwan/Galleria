import React from 'react'
import styles from '../grid/MainGrid.module.scss'

export default function MainGrid({paintings}) {

    let paintingsCol1 = paintings.splice(0,4)
    let paintingsCol2 = paintings.splice(4,8)
    let paintingsCol3 = paintings.splice(8,11)
    let paintingsCol4 = paintings.splice(11,15)

  return (
    <div className={styles.mainGrid}>
        <Column paintings={paintingsCol1} />
        {lessPaintings.map((item, key) => {
            return (
                <div key={key}></div>
            )
        })}
    </div>
  )
}
