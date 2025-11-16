import Section from "@/components/Section";

interface QuoteProps {
  text: string;
}

export default function Quote({ text }: QuoteProps) {
  return (
    <Section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "72px 0",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "650px",
            width: "100%",
            padding: "0 80px 0 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              transform: "rotate(2.5deg)",
              color: "var(--color-text-1)",
              fontSize: "1.3rem",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            {/* SVG Icon - rotated to the left */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="78"
              fill="none"
              viewBox="0 0 78 78"
              style={{
                position: "absolute",
                left: "-28px",
                top: "-30px",
                transform: "rotate(-15deg)",
                opacity: 0.6,
                pointerEvents: "none",
              }}
            >
              <path
                fill="#943d6d"
                fillOpacity=".4"
                d="M76.183 27.413c6.242 20.458-5.366 42.157-25.947 48.437C29.654 82.13 7.93 70.6 1.688 50.143S7.054 7.986 27.615 1.713s42.32 5.222 48.568 25.7M26.046 4.44c-18.114 9.265-1.588 66.125 17.148 69.754C76.831 80.685 53.006-9.35 26.046 4.44"
              />
            </svg>

            {text}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="max-width: 650px"] {
            max-width: 550px !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="max-width: 650px"] {
            max-width: calc(100% - 48px) !important;
            padding: 0 16px 0 60px !important;
          }
          div[style*="fontSize: \"1.3rem\""] {
            font-size: 1.1rem !important;
          }
          svg[style*="width: 48"] {
            width: 36px !important;
            height: 36px !important;
            left: -48px !important;
            top: -6px !important;
          }
        }
      `}</style>
    </Section>
  );
}

