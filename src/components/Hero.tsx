export default function HeroSection() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        margin: "72px 0"
      }}>
        <h1 style={{
          fontSize: "2.8rem",
          lineHeight: 1.1,
          letterSpacing: "-1px",
        }}>
          <span style={{ color: "var(--color-text-1)" }}>Content, </span>
          <span style={{ color: "var(--color-text-2)" }}> ne sapunica.</span>
        </h1>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '2000 / 1580',
          backgroundImage: 'url("/fotke/zajednicka_papiri2-cropped.jpeg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: '24px',
        }}
        aria-label="Hero image"
      />
    </>
  );
}

