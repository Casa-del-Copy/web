import Section from "@/components/Section";
import styles from "./Quote.module.css";

interface QuoteProps {
  text: string;
}

export default function Quote({ text }: QuoteProps) {
  return (
    <Section>
      <div className={styles.quoteContainer}>
        <div className="divider" />

        <div className={styles.quoteContent}>
          <div className={styles.quoteText}>
            <svg
              className={styles.quoteDropIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="none"
              viewBox="0 0 78 78"
            >
              <path
                fill="currentColor"
                fillOpacity=".4"
                d="M76.183 27.413c6.242 20.458-5.366 42.157-25.947 48.437C29.654 82.13 7.93 70.6 1.688 50.143S7.054 7.986 27.615 1.713s42.32 5.222 48.568 25.7M26.046 4.44c-18.114 9.265-1.588 66.125 17.148 69.754C76.831 80.685 53.006-9.35 26.046 4.44"
              />
            </svg>

            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>

        <div className="divider" />
      </div>
    </Section>
  );
}

