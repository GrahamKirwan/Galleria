import React, {useEffect} from 'react'
import Head from 'next/head'
import { getAllPaintingSlugs } from '../lib/helpers'
// import data from '../data.json'
import {data} from '../data/index' 
import styles from '../styles/Home.module.css'
import Navbar from '../components/layout/Navbar'
import PaintingInfo from '../components/layout/PaintingInfo'
import FooterBar from '../components/layout/FooterBar'

import { useContext } from 'react'
import { SlideshowContext } from '../components/store/slideshowContext'

import { AnimatePresence } from 'framer-motion'


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
            paintingData,
            data
        }
    }
}

export default function Painting({paintingData, data}) {

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
      <AnimatePresence exitBeforeEnter initial={false}>
        <PaintingInfo paintingData={paintingData} key={paintingData.name}/>
      </AnimatePresence>
      <FooterBar paintingData={paintingData} data={data} key={paintingData.name}/>
      
      
    </div>
  )
}
