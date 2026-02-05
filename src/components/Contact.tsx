import LiveText from "@/components/LiveText";
import Section from "@/components/Section";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Section>
      <div className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <LiveText
            tag="h3"
            hoverText="¿Por qué no me llamas?"
          >
            Kontakt
          </LiveText>

          <div className={styles.contactIcons}>
            <a
              className={styles.contactIconLink}
              href="https://www.instagram.com/casa.del.copy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                <path fill="currentColor" d="M12.505 6.885a5.6 5.6 0 0 0-5.61 5.61 5.6 5.6 0 0 0 5.61 5.61 5.6 5.6 0 0 0 5.61-5.61 5.6 5.6 0 0 0-5.61-5.61m0 9.258a3.654 3.654 0 0 1-3.648-3.648 3.65 3.65 0 0 1 3.648-3.647 3.65 3.65 0 0 1 3.647 3.647 3.654 3.654 0 0 1-3.647 3.648m7.148-9.488c0 .728-.586 1.309-1.308 1.309a1.309 1.309 0 1 1 1.309-1.309m3.716 1.328c-.083-1.753-.483-3.305-1.767-4.585-1.28-1.279-2.832-1.68-4.585-1.767-1.807-.103-7.222-.103-9.029 0-1.748.083-3.3.483-4.585 1.763-1.284 1.279-1.68 2.832-1.767 4.585-.103 1.806-.103 7.221 0 9.028.083 1.753.483 3.305 1.767 4.585 1.285 1.28 2.832 1.68 4.585 1.767 1.807.103 7.222.103 9.029 0 1.753-.083 3.305-.483 4.585-1.767 1.279-1.28 1.68-2.832 1.767-4.585.103-1.807.103-7.217 0-9.024m-2.334 10.962a3.7 3.7 0 0 1-2.08 2.08c-1.44.572-4.858.44-6.45.44s-5.015.127-6.45-.44a3.7 3.7 0 0 1-2.08-2.08c-.572-1.44-.44-4.858-.44-6.45s-.127-5.015.44-6.45a3.7 3.7 0 0 1 2.08-2.08c1.44-.571 4.858-.44 6.45-.44s5.015-.127 6.45.44a3.7 3.7 0 0 1 2.08 2.08c.571 1.44.44 4.858.44 6.45s.131 5.015-.44 6.45" />
              </svg>
            </a>

            <a
              className={`${styles.contactIconLink} ${styles.emailIcon}`}
              href="mailto:casadelcopy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 25 25">
                <rect x="3.5" y="5.5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4.75 6.75L12.5 13.25L20.25 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
