import LiveText from "@/components/LiveText";
import Project from "@/components/Project";
import Section from "@/components/Section";

const ptGalleryImages = [
  {
    src: "/projects/pt-majice-full.jpeg",
    thumb: "/projects/pt-majice-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-ruke-full.jpeg",
    thumb: "/projects/pt-ruke-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-odbojka-full.jpeg",
    thumb: "/projects/pt-odbojka-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-spf-full.jpeg",
    thumb: "/projects/pt-spf-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-stolica-full.jpeg",
    thumb: "/projects/pt-stolica-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-pogledaosi-full.jpeg",
    thumb: "/projects/pt-pogledaosi-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-stablo-full.jpeg",
    thumb: "/projects/pt-stablo-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-vesmasina-full.jpeg",
    thumb: "/projects/pt-vesmasina-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-zenabor-full.jpeg",
    thumb: "/projects/pt-zenabor-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/pt-salice-full.jpeg",
    thumb: "/projects/pt-salice-thumb.jpg",
    caption: ""
  },
];

const madreBadessaGalleryImages = [
  {
    src: "/projects/mb-brasno-full.jpeg",
    thumb: "/projects/mb-brasno-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-grozde-full.jpeg",
    thumb: "/projects/mb-grozde-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-izmora-full.jpeg",
    thumb: "/projects/mb-izmora-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-justa-full.jpeg",
    thumb: "/projects/mb-justa-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-justazena-full.jpeg",
    thumb: "/projects/mb-justazena-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-kapadjedmraz-full.jpeg",
    thumb: "/projects/mb-kapadjedmraz-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-kauc-full.jpeg",
    thumb: "/projects/mb-kauc-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-naboku-full.jpeg",
    thumb: "/projects/mb-naboku-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-noga-full.jpeg",
    thumb: "/projects/mb-noga-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-kolut-full.jpeg",
    thumb: "/projects/mb-kolut-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-plaza-full.jpeg",
    thumb: "/projects/mb-plaza-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-plazaruke-full.jpeg",
    thumb: "/projects/mb-plazaruke-thumb.jpg",
    caption: ""
  },
  {
    src: "/projects/mb-vaza-full.jpeg",
    thumb: "/projects/mb-vaza-thumb.jpg",
    caption: ""
  },
];

export default function Projects() {
  return (
    <Section>
      <LiveText tag="h2" hoverText="Nuestro Trabajo" style={{ textAlign: "center" }}>
        Portfolio
      </LiveText>

      <Section>
        <Project
          projectLinks={[
            {title: "PeTe Instagram", url: "https://www.instagram.com/pete_maraska"}
          ]}
          videoUrl="/projects/pt-video.mp4"
          heading="PeTe Maraska"
          paragraph="Volimo raditi s Maraskom, pogotovo na IG profilu pete_maraska, koji u potpunosti kreiramo, vodimo i punimo svježim idejama. Od postova i reelsa do dnevnih storija, svaki kadar, video i caption nastaje u našem malom kreativnom laboratoriju koji je stalni izvor smijeha i inspiracije. I ono nama najvažnije - kreativne slobode koju smo oduvijek željele."
          position="right"
          galleryImages={ptGalleryImages}
        />
      </Section>

      <div className="divider" />

      <Section>
        <Project
          projectLinks={[
            {title: "Madre Badessa Instagram", url: "https://www.instagram.com/madrebadessa.spirits"}
          ]}
          videoUrl="/projects/mb-video.mp4"
          heading="Madre Badessa"
          paragraph="Priča o Madre Badessa Spirits priča je o neprestanoj potrazi za svježim i kreativnim načinima da ljubiteljima finih pića približimo svijet premium likera i rakija. Iz mjeseca u mjesec stvaramo sadržaj koji otkriva sve ono što ovaj 100% hrvatski proizvod čini posebnim - autentičnost, profinjenost i dašak “pomalo” lifestylea kojem svi ponekad težimo. Kroz pažljivo oblikovane riječi, upečatljivu fotografiju i atmosferične video priče nastojimo prenijeti ljepotu rituala guštanja."
          position="left"
          galleryImages={madreBadessaGalleryImages}
        />
      </Section>

      <div className="divider" />

      <Section>
        <Project
          projectLinks={[
            {title: "Poliklinika Kinetis Website", url: "https://poliklinika-kinetis.hr/"}
          ]}
          videoUrl="/projects/kinetis-video.mp4"
          heading="Poliklinika Kinetis"
          paragraph="Poliklinika Kinetis tražila je komunikaciju koja neće pojednostavljivati struku, ali će pojednostaviti razumijevanje. Taj balans bio je polazišna točka cijelog projekta. Suradnja nam je posebno draga jer je tekla promišljeno i nenametljivo, s dovoljno prostora za fokus i precizne odluke. Slogan, web i sadržaj oblikovale smo s jasnim ciljem: točne informacije, smiren ton i osjećaj povjerenja. Iste smjernice prate i fotografije - diskretne, promišljene i usmjerene na bitno - kako bi jasno komunicirale sigurnost, stručnost i osjećaj da ste u pravim rukama."
          position="right"
        />
      </Section>
    </Section>
  );
}
