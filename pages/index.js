import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/layout/Navbar'
import MainGrid from '../components/grid/MainGrid'
import data from '../data.json'
// import data from '../data/index'

export async function getStaticProps() {
  const paintingData = data;

  return {
      props: {
        paintingData
      }
  }
}

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Galleria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <MainGrid paintings={props.paintingData}/>

    </div>
  )
}
