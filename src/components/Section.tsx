import LiveText from "@/components/LiveText";
import { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  headerText?: string;
  headerHoverableText?: string;
  className?: string;
}

export default function Section({ children, headerText, headerHoverableText, className }: SectionProps) {
  return (
    <section
      className={`${styles.section} ${className}`}
    >
      {headerText && (
        <h2
          style={{
            textAlign: "center",
          }}
        >
          {headerHoverableText ? (
            <LiveText tag="div" hoverText={headerHoverableText} >
              {headerText}
            </LiveText>
          ) : (
            <div>{headerText}</div>
          )}
        </h2>
      )}

      {children}
    </section>
  );
}

