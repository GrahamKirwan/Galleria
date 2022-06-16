import Link from 'next/link';
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
                <Link href={'/'+item.slug} key={key}>
                    <a>
                        <section style={{backgroundImage: `url(${item.images.gallery})`}}>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.artist.name}</p>
                            </div>
                        </section>
                    </a>
                </Link>
            )
        })}
    </div>
  )
}
