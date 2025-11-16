import HoverableText from "@/components/HoverableText";
import Section from "@/components/Section";
import styles from './Services.module.css';

export default function Services() {
  return (
    <Section headerText="Usluge" headerHoverableText="¿Qué quieres de mí?">
      <div className={styles.boxesGrid}>
        <div className={styles.box}>
          <h3>
            Copywriting i sadržaj
          </h3>

          <ul>
            <li>Website copywriting (tekstovi za web stranice: Početna, O nama, Usluge, itd.)</li>
            <li>Content writing (blogovi, edukativni članci, vodiči…)</li>
            <li>Newsletter i email kampanje</li>
            <li>Objave za medije i PR članci</li>
            <li>Advertorial i native tekstovi</li>
            <li>Long-form &amp; storytelling sadržaj (reportaže, narativni članci, intervjui)</li>
            <li>Brand storytelling (priča brenda, tone of voice, narativi)</li>
          </ul>

          <svg className={styles.dropCircle} xmlns="http://www.w3.org/2000/svg" width="142" height="142" fill="none" viewBox="0 0 78 78">
            <path fill="#943d6d" fillOpacity=".4" d="M76.183 27.413c6.242 20.458-5.366 42.157-25.947 48.437C29.654 82.13 7.93 70.6 1.688 50.143S7.054 7.986 27.615 1.713s42.32 5.222 48.568 25.7M26.046 4.44c-18.114 9.265-1.588 66.125 17.148 69.754C76.831 80.685 53.006-9.35 26.046 4.44" />
          </svg>
        </div>

        <div className={styles.box}>
          <h3>
            Društvene mreže
          </h3>
          <ul>
            <li>Strategija za društvene mreže (ciljevi, ton komunikacije, ciljana publika)</li>
            <li>Kreiranje i planiranje sadržaja (tekst + vizuali + kreativni koncept)</li>
            <li>Izrada mjesečnog plana objava</li>
            <li>Objava sadržaja i vođenje profila</li>
            <li>Community management&nbsp;</li>
            <li>Praćenje analitike i mjesečni izvještaji</li>
            <li>Praćenje trendova i optimizacija strategije</li>
            <li>Postavljanje i optimizacija plaćenih oglasa</li>
          </ul>
        </div>

        <div className={styles.box}>
          <h3>
            Strategija i planiranje
          </h3>
          <ul>
            <li>Izrada strategije brenda (pozicioniranje, vrijednosti, poruke, tone of voice)</li>
            <li>Vizualni identitet brenda (logo, paleta, tipografija, smjernice…)</li>
            <li>Kreiranje i provođenja kampanja (digitalne kampanje, multichannel kampanje)</li>
            <li>SEO strategija i optimizacija (istraživanje ključnih riječi, pisanje SEO sadržaja, optimizacija web stranica)</li>
          </ul>
        </div>

        <div className={styles.box}>
          <h3>
            Produkcija
          </h3>
          <ul>
            <li>Foto produkcija (lifestyle, produkt, događanja)</li>
            <li>Video produkcija (promo video, kratki formati, kampanje, social video)</li>
            <li>Grafički dizajn (vizuali za kampanje, web, društvene mreže i print)</li>
            <li>TVC reklama (tv spotovi, režija i produkcija)</li>
            <li>OOH kampanje (outdoor: billboardi, citylighti, LED ekrani, megaboardi, transit oglašavanje)</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

