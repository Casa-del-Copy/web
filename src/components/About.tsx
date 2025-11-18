import HoverableText from "@/components/HoverableText";
import Section from "@/components/Section";
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <Section>
        <div className={styles.companySection}>
          <HoverableText tag="h2" hoverText="Televisa presenta">
            O Casi
          </HoverableText>

          <div
            className={styles.companySectionImage}
            aria-label="About company image"
          />

          <div className={styles.companySectionText}>
            <p className={styles.text}>
              Casa del Copy je kreativna agencija čiju sudbinu u šaci drže dvije mujersuele* koje se, iako stvaraju content s kojim vajba Gen Z, dobro sjećaju kako je Marisol zaradila ožiljak**.
              Godinama smo bile novinarke, ali slijedom životnih okolnosti postale smo content kreatorice i copywriterice***.
              Uživamo u kreiranju video i foto contenta, ali naša amor para siempre**** je riječ.
              Pisanje. Copy. Sukladno tome, u slobodno vrijeme savršeno precizno skeniramo, detektiramo i svisoka komentiramo AI tekstove.
              Za kraj, moto nam možda je {"\""}Content, ne sapunica{"\""}, ali tko smo mi da se pretvaramo - low key životni cilj nam je napisati (dobru) sapunicu.
            </p>

            <ul className={styles.subList}>
              <li><sub>*Ženetina, klasična telenovela uvreda. Nismo, ali mujersuela je najbolja riječ.</sub></li>
              <li><sub>**Pala je NA razbijeno ogledalo dok je trčala šumicom. S ogledalom.</sub></li>
              <li><sub>***Male izmjene u srodnim područjima karijere nisu ništa neobično, prisjetimo se da je Juan Miguel, iako psihijatar, za nekoliko mjeseci postao oftalmolog-kirurg kako bi operirao Marichuy od sljepoće.</sub></li>
              <li><sub>****Možete li vjerovati da ne postoji telenovela naziva “Amor para siempre”?</sub></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.profileSection}>
          <div
            className={styles.profileSectionImage}
            style={{
              backgroundImage: 'url("/about-anja.jpeg")',
            }}
            aria-label="Anja Mađarević Lučin"
          />

          <div className={styles.profileSectionText}>
            <h3 className={styles.profileSectionTextHeading}>
              Anja Mađarević Lučin
            </h3>

            <p className={styles.profileSectionTextHeadingSubtitle}>
              (Zagreb, 1987.)
            </p>

            <p className={styles.text}>
              Magistrirala je komunikologiju, ali pisanje voli još od osnovnoškolskih zadaćnica koje su uvijek bile malo duže od traženog.
              U fotoagenciji Cropix trenirala je oko za detalje, a u Domu i Dizajnu Jutarnjeg lista godinama slagala priče o prostoru, stilu i ljudima.
              Nakon kreativnih kampanja u agenciji Pišemo, danas je polovica tandema Casa del Copy i vodi glavnu riječ za estetiku, ton i atmosferu.
              <br /><br />
              Kad ne piše, slaže moodboarde, traži savršene lokacije i žonglira s dvije djevojčice, tri lonca i mužem IT-evcem zaduženim za otpetljavanje svega što se u Casi otpetljati mora - od kablova do poslovnih izazova.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className={`${styles.profileSection} ${styles.reverse}`}>
        <div
          className={styles.profileSectionImage}
          style={{
            backgroundImage: 'url("/about-mare.jpeg")',
          }}
          aria-label="Marijana Galović"
        />

          <div className={styles.profileSectionText}>
            <h3 className={styles.profileSectionTextHeading}>
              Marijana Galović
            </h3>

            <p className={styles.profileSectionTextHeadingSubtitle}>
              (Zagreb, 1985.)
            </p>

            <p className={styles.text}>
              Magistrirala je novinarstvo u predbolonjsko doba, kad se diplomski još nosio u fasciklu, a {"\""}multitasking{"\""} jednostavno zvao {"\""}život{"\""}.
              U studentskim godinama je radila u ugostiteljstvu gdje brusi brzinu, snalažljivost i zen za (pre)zahtjevne narudžbe.
              U Jutarnjem listu osam je godina pisala i uređivala Dom&Dizajn, ulazila ljudima u domove i isporučivala priče s dozom humora koji joj postaje zaštitni znak.
              U agenciji Pišemo tri godine osmišljavala je kampanje, popravljala briefove i rješavala nemoguće {"\""}usput{"\""}.
              <br /><br />
              Kod kuće balansira školske i vrtićke zadatke svoje djece i raspored letova muža pilota. I sve uvijek sleti kako treba.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

