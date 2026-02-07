"use client";

import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

const GA_ID = "G-3J0T85VFFS";

function loadGA() {
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      loadGA();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    loadGA();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        Koristimo kolačiće za analitiku kako bi znali je li{" "}
        <a href="https://www.youtube.com/watch?v=zSBY_8VfI5g" target="_blank" rel="noopener noreferrer">
          Gilda
        </a>{" "}
        svratila na naš web.
      </p>
      <div className={styles.buttons}>
        <button onClick={decline} className={styles.declineButton}>
          Odbijam
        </button>
        <button onClick={accept} className={styles.acceptButton}>
          Prihvaćam
        </button>
      </div>
    </div>
  );
}
