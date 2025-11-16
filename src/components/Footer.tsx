export default function Footer() {
  return (
    <>
      <footer
        style={{
          width: "100%",
          borderTop: "2px solid var(--color-bg-box-2)",
          padding: "72px 0",
          marginTop: "72px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            maxWidth: "1300px",
            width: "100%",
            marginBottom: "48px",
          }}
        >
          {/* First Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            <p style={{ marginBottom: "8px" }}>
              <b>Casa del Copy d.o.o.</b>
            </p>
            <p style={{ marginBottom: "4px" }}>Štefanovec 143</p>
            <p style={{ marginBottom: "4px" }}>10000 Zagreb</p>
            <p style={{ marginBottom: "4px" }}>OIB: 09730999785</p>
            <p style={{ marginBottom: "0" }}>MBS: 081631839</p>
          </div>

          {/* Second Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            <p style={{ marginBottom: "8px" }}>
              <b>Vlasnici:</b>
            </p>
            <p style={{ marginBottom: "4px" }}>
              Anja Mađarević Lučin, član društva
            </p>
            <p style={{ marginBottom: "4px" }}>
              Marijana Galović, član društva
            </p>
            <p style={{ marginBottom: "4px" }}>
              Temeljni kapital: 2.500€, uplaćen u cijelosti
            </p>
            <p style={{ marginBottom: "4px" }}>
              Registarski sud: Trgovački sud u Zagrebu
            </p>
            <p style={{ marginBottom: "4px" }}>
              IBAN: HR4923400091111314379
            </p>
            <p style={{ marginBottom: "0" }}>
              (Privredna banka Zagreb)
            </p>
          </div>
        </div>

        {/* Blooper Text */}
        <div
          style={{
            textAlign: "center",
            color: "var(--color-text-3)",
            fontSize: "1.2rem",
            lineHeight: 1.6,
          }}
        >
          ꜟLargate de mi casa!!
        </div>
      </footer>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          footer div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          footer {
            padding: 48px 0 !important;
            margin-top: 48px !important;
          }
          footer div[style*="grid-template-columns: 1fr 1fr"] {
            gap: 24px !important;
            margin-bottom: 32px !important;
          }
          footer div[style*="fontSize: \"1rem\""] {
            font-size: 0.9rem !important;
          }
          footer div[style*="fontSize: \"1.2rem\""] {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </>
  );
}

