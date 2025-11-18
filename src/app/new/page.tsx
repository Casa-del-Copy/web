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
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <Hero />

        <Projects />

        <Quote text="Godinama smo bile novinarke, ali slijedom životnih okolnosti postale smo content kreatori, što nije ništa spektakularno." />

        <Services />

        <Quote text="Godinama smo bile novinarke, ali slijedom životnih okolnosti postale smo content kreatori, što nije ništa spektakularno." />

        <About />

        <Quote text="Godinama smo bile novinarke, ali slijedom životnih okolnosti postale smo content kreatori, što nije ništa spektakularno." />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}
