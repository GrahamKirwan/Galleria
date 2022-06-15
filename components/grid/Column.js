import React from 'react'
import styles from '../grid/Column.module.scss'

export default function Column({paintings, column}) {

    let colNum;

    if (column == 1) {
        colNum = styles.column1;
    }
    if (column == 2) {
        colNum = styles.column2;
    } 
    if (column == 3) {
        colNum = styles.column3;
    } 
    if (column == 4) {
        colNum = styles.column4;
    } 
    

  return (
    <div className={`${styles.column} ${colNum}`}>
        
        {paintings.map((item, key) => {
            return (
                <div key={key} style={{backgroundImage: `url(${item.images.gallery})`}}>
                    {/* <img src={item.images.gallery}></img> */}
                </div>
            )
        })}
    </div>
  )
}
