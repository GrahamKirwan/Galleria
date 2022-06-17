import React, {useEffect} from 'react'
import Head from 'next/head'
import { getAllPaintingSlugs } from '../lib/helpers'
import data from '../data.json'
import styles from '../styles/Home.module.css'
import Navbar from '../components/layout/Navbar'
import PaintingInfo from '../components/layout/PaintingInfo'
import FooterBar from '../components/layout/FooterBar'

import { useContext } from 'react'
import { SlideshowContext } from '../components/store/slideshowContext'


export async function getStaticPaths() {

    // Get all the painting slugs from the data file
    let paths = getAllPaintingSlugs()

    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps({ params }) {

    let paths = getAllPaintingSlugs()
    let id;

    // Find the id to match the current slug
    paths.forEach((item) => {
        if(item.params.slug == params.slug) {
            id = item.params.id
        }
    })

    let paintingData = data[id];

    return {
        props: {
            paintingData
        }
    }
}

export default function Painting({paintingData}) {

  const ctx = useContext(SlideshowContext);

    useEffect(() => {
        ctx.updateSlideshowContext(true)
    }, [])
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Galleria | {paintingData.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <PaintingInfo paintingData={paintingData} />
      <FooterBar paintingData={paintingData} />

    </div>
  )
}
