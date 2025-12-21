"use client"

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Quote from "@/components/Quote";
import Footer from "../../components/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const theme = newTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">
      <main>
        <div className="bg-pattern" />

        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <Hero />

        <Projects />

        <Quote text="Views? <br /> Više od epizode u kojoj je Esmeralda progledala." />

        <Services />

        <Quote text="Iza svake objave… <br /> Krije se neočekivani obrat! <br /> (gasps in Spanish)" />

        <About />

        <Quote text="U sljedećoj epizodi… <br /> Neočekivani briefovi. Nemogući rokovi. Predugačke rečenice. Previše ideja. Hoće li pitch preživjeti komentare klijenta? Hoće li brend pronaći svoj TOV?" />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}
