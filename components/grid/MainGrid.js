import React from 'react'
import styles from '../grid/MainGrid.module.scss'
import Column from './Column'

export default function MainGrid({paintings}) {

    // let paintingsCol1 = paintings.slice(0,4)
    // let paintingsCol2 = paintings.slice(4,8)
    // let paintingsCol3 = paintings.slice(8,11)
    // let paintingsCol4 = paintings.slice(11,15)

    let paintingsCol1 = paintings.filter((item) => {
        if (item.gridColumn == 1) {
            return item
        }
    })
    let paintingsCol2 = paintings.filter((item) => {
        if (item.gridColumn == 2) {
            return item
        }
    })
    let paintingsCol3 = paintings.filter((item) => {
        if (item.gridColumn == 3) {
            return item
        }
    })
    let paintingsCol4 = paintings.filter((item) => {
        if (item.gridColumn == 4) {
            return item
        }
    })

    console.log(paintingsCol1)


  return (
    <div className={styles.mainGrid}>
        <Column paintings={paintingsCol1} column={1} />
        <Column paintings={paintingsCol2} column={2} />
        <Column paintings={paintingsCol3} column={3} />
        <Column paintings={paintingsCol4} column={4} />
    </div>
  )
}
