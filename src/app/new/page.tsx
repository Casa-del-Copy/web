import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Quote from "@/components/Quote";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">
      <main>
        <div className="bg-pattern" />

        <Header />

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
