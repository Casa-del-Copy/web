import HoverableText from "@/components/HoverableText";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  headerText?: string;
  headerHoverableText?: string;
  className?: string;
}

export default function Section({ children, headerText, headerHoverableText, className }: SectionProps) {
  return (
    <section
      className={className}
      style={{
        margin: "108px 0",
        width: "100%",
      }}
    >
      {headerText && (
        <h2
          style={{
            textAlign: "center",
          }}
        >
          {headerHoverableText ? (
            <HoverableText tag="div" children={headerText} hoverText={headerHoverableText} />
          ) : (
            <div>{headerText}</div>
          )}
        </h2>
      )}
      {children}
    </section>
  );
}

