"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [showImage, setShowImage] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerColumn}>
          <h5>Casa del Copy d.o.o.</h5>
          <ul>
            <li> casadelcopy@gmail.com </li>
          </ul>
          <ul>
            <li>Štefanovec 143</li>
            <li>10000 Zagreb</li>
          </ul>
          <ul>
            <li>OIB: 09730999785</li>
            <li>MBS: 081631839</li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h5>Vlasnici</h5>
          <ul>
            <li>Anja Mađarević Lučin, član društva</li>
            <li>Marijana Galović, član društva</li>
          </ul>

          <ul>
            <li>IBAN: HR4923400091111314379</li>
          </ul>
          <ul>
            <li>
              <a href="/politika-privatnosti.pdf" target="_blank" rel="noopener noreferrer">
                Politika privatnosti
              </a>
            </li>
          </ul>
        </div>
      </div>

      <h2
        className={styles.footerBlooperText}
        onClick={() => setShowImage(!showImage)}
      >
        ¡Largate de mi casa!
      </h2>

      {showImage && (
        <img
          src="/maramica2.jpeg"
          alt="Content koji izaziva emocije - casadelcopy.hr"
          className={styles.footerImage}
        />
      )}
    </footer>
  );
}

