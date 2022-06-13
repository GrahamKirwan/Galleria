import React from 'react'
import { getAllPaintingSlugs } from '../lib/helpers'
import data from '../data.json'

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

    console.log(paintingData)
    
  return (
    <div>
        <h1>{paintingData.name}</h1>
        <p>{paintingData.description}</p>
        <img src={paintingData.images.gallery}></img>
    </div>
  )
}
