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
              className={styles.contactIconLink}
              href="https://wa.me/00385989569960?text=Treba mi content, život mi je sapunica!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whats App"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                <path fill="currentColor" d="M20.161 4.741a10.76 10.76 0 0 0-7.666-3.178c-5.976 0-10.84 4.863-10.84 10.84 0 1.909.498 3.774 1.446 5.42l-1.538 5.615 5.747-1.51a10.8 10.8 0 0 0 5.18 1.32h.005c5.972 0 10.943-4.864 10.943-10.84 0-2.896-1.231-5.616-3.277-7.667m-7.666 16.68a9 9 0 0 1-4.59-1.255l-.327-.195-3.408.893.908-3.325-.215-.342a9 9 0 0 1-1.377-4.795c0-4.965 4.043-9.008 9.014-9.008a8.93 8.93 0 0 1 6.367 2.641c1.7 1.704 2.744 3.965 2.74 6.372 0 4.97-4.146 9.014-9.112 9.014m4.942-6.748c-.269-.137-1.602-.791-1.851-.88-.25-.092-.43-.136-.61.138-.181.273-.699.879-.86 1.064-.156.18-.317.205-.586.069-1.591-.796-2.636-1.421-3.686-3.223-.279-.479.278-.444.796-1.48.087-.18.044-.337-.025-.473-.068-.137-.61-1.47-.835-2.012-.22-.527-.444-.454-.61-.464-.156-.01-.337-.01-.518-.01-.18 0-.473.069-.722.337-.25.274-.948.928-.948 2.261s.972 2.622 1.104 2.803c.137.18 1.91 2.915 4.629 4.092 1.719.742 2.392.805 3.252.678.522-.078 1.601-.654 1.826-1.289s.225-1.177.156-1.289c-.063-.122-.244-.19-.513-.322" />
              </svg>
            </a>

            <a
              className={`${styles.contactIconLink} ${styles.emailIcon}`}
              href="mailto:casadelcopy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
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

