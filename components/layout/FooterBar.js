import React from "react";
import Link from "next/link";
import styles from "./FooterBar.module.scss";
import containerStyles from "../../styles/Home.module.css";

import { TbPlayerSkipForward, TbPlayerSkipBack } from "react-icons/tb";

export default function FooterBar({ paintingData, data }) {

  let nextLink = data[paintingData.id] && data[paintingData.id].slug;
  let prevLink = data[paintingData.id - 2] && data[paintingData.id - 2].slug;

  let percentageBar = (100/15) * paintingData.id;

  percentageBar = percentageBar.toString().concat('%');


  return (
    <footer className={styles.footer}>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: percentageBar }}></div>
        <div className={containerStyles.container}>
          <div className={styles.footerContentContainer}>
            <div>
              <h3 className={styles.paintingName}>{paintingData.name}</h3>
              <h4>{paintingData.artist.name}</h4>
            </div>
            <div>
              {paintingData.slug == "starry-night" ? (
                <a>
                  <TbPlayerSkipBack size="2em" color="lightgrey" />
                </a>
              ) : (
                <Link href={"/" + prevLink}>
                  <a>
                    <TbPlayerSkipBack size="2em" color="black" />
                  </a>
                </Link>
              )}

              {paintingData.slug == "the-swing" ? (
                <a>
                  <TbPlayerSkipForward size="2em" color="lightgrey" />
                </a>
              ) : (
                <Link href={"/" + nextLink}>
                  <a>
                    <TbPlayerSkipForward size="2em" color="black" />
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
