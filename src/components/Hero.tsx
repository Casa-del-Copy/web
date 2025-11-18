import Section from "@/components/Section";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section>
      <div className={styles.headline}>
        <h1 className="font-outline">
          <span style={{ color: "var(--color-text-1)" }}>Content, </span>
          <span style={{ color: "var(--color-text-2)" }}> ne sapunica.</span>
        </h1>
      </div>

      <div
        className={styles.heroImage}
        aria-label="Hero image"
      />
    </Section>
  );
}

