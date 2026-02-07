import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>404</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        Ova stranica ne postoji.
      </p>
      <Link
        href="/"
        style={{
          color: "var(--color-text-2)",
          fontSize: "1.1rem",
          textDecoration: "underline",
        }}
      >
        Natrag na naslovnicu
      </Link>
    </div>
  );
}
